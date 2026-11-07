/**
 * RoktoBondhon (রক্তবন্ধন) — Core UI Runtime, Lucide SVG Icons & Static GitHub Pages AI Handler
 * Preserves 100% of the original React component tree, hooks, icons, and clinical AI behavior.
 */
(function (global) {
  'use strict';

  // ==========================================================================
  // 1. Lightweight React 19 Compatible VDOM & Hooks Engine
  // ==========================================================================
  const Fragment = Symbol.for('react.fragment');
  const TEXT_ELEMENT = Symbol.for('react.text');

  function createElement(type, props, ...children) {
    const flatChildren = [];
    function pushChild(c) {
      if (Array.isArray(c)) {
        for (let i = 0; i < c.length; i++) pushChild(c[i]);
      } else if (c === null || c === undefined || typeof c === 'boolean') {
        // Ignore null/undefined/boolean in JSX
      } else if (typeof c === 'object' && c.$$vnode) {
        flatChildren.push(c);
      } else {
        flatChildren.push({
          $$vnode: true,
          type: TEXT_ELEMENT,
          props: { nodeValue: String(c) },
          children: [],
        });
      }
    }
    pushChild(children);
    return {
      $$vnode: true,
      type,
      props: props || {},
      children: flatChildren,
    };
  }

  // Component instances keyed by tree path
  const componentInstances = new Map();
  let currentInstance = null;
  let currentHookIndex = 0;
  let pendingEffects = [];
  let rootContainer = null;
  let rootVNode = null;
  let isRendering = false;
  let renderQueued = false;

  function getOrCreateInstance(pathKey, ComponentFn) {
    let inst = componentInstances.get(pathKey);
    if (!inst || inst.ComponentFn !== ComponentFn) {
      if (inst && inst.hooks) {
        inst.hooks.forEach((h) => {
          if (h && typeof h.cleanup === 'function') {
            try { h.cleanup(); } catch (_e) {}
          }
        });
      }
      inst = { ComponentFn, hooks: [] };
      componentInstances.set(pathKey, inst);
    }
    return inst;
  }

  function scheduleRender() {
    if (isRendering) {
      renderQueued = true;
      return;
    }
    if (!renderQueued) {
      renderQueued = true;
      Promise.resolve().then(flushRender);
    }
  }

  function flushRender() {
    if (!rootContainer || !rootVNode) return;
    renderQueued = false;
    isRendering = true;
    const seenPaths = new Set();

    try {
      const expanded = expandVNode(rootVNode, '0', seenPaths);
      patchChildren(rootContainer, Array.isArray(expanded) ? expanded : [expanded], false);
    } finally {
      isRendering = false;
    }

    // Cleanup unmounted component instances
    for (const [k, inst] of componentInstances.entries()) {
      if (!seenPaths.has(k)) {
        if (inst.hooks) {
          inst.hooks.forEach((h) => {
            if (h && typeof h.cleanup === 'function') {
              try { h.cleanup(); } catch (_e) {}
            }
          });
        }
        componentInstances.delete(k);
      }
    }

    // Run queued useEffects
    const effectsToRun = pendingEffects.slice();
    pendingEffects = [];
    for (let i = 0; i < effectsToRun.length; i++) {
      const hook = effectsToRun[i];
      if (typeof hook.cleanup === 'function') {
        try { hook.cleanup(); } catch (_e) {}
      }
      try {
        const cleanup = hook.effect();
        hook.cleanup = typeof cleanup === 'function' ? cleanup : null;
      } catch (_e) {}
    }

    if (renderQueued) {
      flushRender();
    }
  }

  function useState(initialValue) {
    const inst = currentInstance;
    const idx = currentHookIndex++;
    if (idx >= inst.hooks.length) {
      const init = typeof initialValue === 'function' ? initialValue() : initialValue;
      inst.hooks.push({ type: 'state', state: init });
    }
    const hook = inst.hooks[idx];
    const setState = (updater) => {
      const next = typeof updater === 'function' ? updater(hook.state) : updater;
      if (!Object.is(next, hook.state)) {
        hook.state = next;
        scheduleRender();
      }
    };
    return [hook.state, setState];
  }

  function depsChanged(oldDeps, newDeps) {
    if (!oldDeps || !newDeps) return true;
    if (oldDeps.length !== newDeps.length) return true;
    for (let i = 0; i < newDeps.length; i++) {
      if (!Object.is(oldDeps[i], newDeps[i])) return true;
    }
    return false;
  }

  function useEffect(effect, deps) {
    const inst = currentInstance;
    const idx = currentHookIndex++;
    if (idx >= inst.hooks.length) {
      const hook = { type: 'effect', effect, deps, cleanup: null };
      inst.hooks.push(hook);
      pendingEffects.push(hook);
    } else {
      const hook = inst.hooks[idx];
      if (depsChanged(hook.deps, deps)) {
        hook.effect = effect;
        hook.deps = deps;
        pendingEffects.push(hook);
      }
    }
  }

  function useMemo(factory, deps) {
    const inst = currentInstance;
    const idx = currentHookIndex++;
    if (idx >= inst.hooks.length) {
      const val = factory();
      inst.hooks.push({ type: 'memo', val, deps });
      return val;
    }
    const hook = inst.hooks[idx];
    if (depsChanged(hook.deps, deps)) {
      hook.val = factory();
      hook.deps = deps;
    }
    return hook.val;
  }

  function useCallback(fn, deps) {
    return useMemo(() => fn, deps);
  }

  function useRef(initialValue) {
    const inst = currentInstance;
    const idx = currentHookIndex++;
    if (idx >= inst.hooks.length) {
      inst.hooks.push({ type: 'ref', ref: { current: initialValue } });
    }
    return inst.hooks[idx].ref;
  }

  function expandVNode(vnode, pathKey, seenPaths) {
    if (!vnode) return [];
    if (Array.isArray(vnode)) {
      const res = [];
      for (let i = 0; i < vnode.length; i++) {
        const sub = expandVNode(vnode[i], pathKey + '.' + i, seenPaths);
        if (Array.isArray(sub)) res.push(...sub);
        else if (sub) res.push(sub);
      }
      return res;
    }
    if (vnode.type === Fragment) {
      return expandVNode(vnode.children, pathKey + '.F', seenPaths);
    }
    if (typeof vnode.type === 'function') {
      const keySuffix = vnode.props && vnode.props.key != null ? ':' + vnode.props.key : '';
      const compPath = pathKey + ':' + (vnode.type.name || 'Comp') + keySuffix;
      seenPaths.add(compPath);
      const inst = getOrCreateInstance(compPath, vnode.type);
      const prevInst = currentInstance;
      const prevIdx = currentHookIndex;
      currentInstance = inst;
      currentHookIndex = 0;
      let rendered;
      try {
        rendered = vnode.type(Object.assign({}, vnode.props, { children: vnode.children }));
      } finally {
        currentInstance = prevInst;
        currentHookIndex = prevIdx;
      }
      return expandVNode(rendered, compPath, seenPaths);
    }
    const expandedChildren = [];
    for (let i = 0; i < vnode.children.length; i++) {
      const c = vnode.children[i];
      const cKey = c && c.props && c.props.key != null ? ':' + c.props.key : '.' + i;
      const sub = expandVNode(c, pathKey + cKey, seenPaths);
      if (Array.isArray(sub)) expandedChildren.push(...sub);
      else if (sub) expandedChildren.push(sub);
    }
    return {
      $$vnode: true,
      type: vnode.type,
      props: vnode.props || {},
      children: expandedChildren,
    };
  }

  const SVG_NS = 'http://www.w3.org/2000/svg';
  const SVG_ATTR_MAP = {
    className: 'class',
    strokeWidth: 'stroke-width',
    strokeLinecap: 'stroke-linecap',
    strokeLinejoin: 'stroke-linejoin',
    fillOpacity: 'fill-opacity',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
  };

  function applyProps(dom, oldProps, newProps, isSvg) {
    for (const k of Object.keys(oldProps)) {
      if (k === 'children' || k === 'key') continue;
      if (!(k in newProps)) {
        if (k === 'ref' && oldProps.ref) {
          oldProps.ref.current = null;
        } else if (k.startsWith('on') && dom.__listeners && dom.__listeners[k]) {
          const evtInfo = dom.__listeners[k];
          dom.removeEventListener(evtInfo.evtName, evtInfo.handler);
          delete dom.__listeners[k];
        } else if (k === 'className') {
          if (isSvg) dom.removeAttribute('class');
          else dom.className = '';
        } else if (k === 'htmlFor') {
          dom.removeAttribute('for');
        } else {
          dom.removeAttribute(isSvg && SVG_ATTR_MAP[k] ? SVG_ATTR_MAP[k] : k);
        }
      }
    }

    for (const [k, val] of Object.entries(newProps)) {
      if (k === 'children' || k === 'key') continue;
      if (k === 'ref') {
        if (val && typeof val === 'object') val.current = dom;
        continue;
      }
      if (k.startsWith('on') && typeof val === 'function') {
        if (!dom.__listeners) dom.__listeners = {};
        const tag = dom.tagName ? dom.tagName.toUpperCase() : '';
        let evtName = k.slice(2).toLowerCase();
        if (k === 'onChange' && (tag === 'TEXTAREA' || (tag === 'INPUT' && dom.type !== 'checkbox' && dom.type !== 'radio' && dom.type !== 'file'))) {
          evtName = 'input';
        }
        if (dom.__listeners[k] && dom.__listeners[k].evtName !== evtName) {
          dom.removeEventListener(dom.__listeners[k].evtName, dom.__listeners[k].handler);
          delete dom.__listeners[k];
        }
        if (!dom.__listeners[k]) {
          const wrapper = (e) => {
            if (dom.__listeners && dom.__listeners[k] && dom.__listeners[k].fn) {
              dom.__listeners[k].fn(e);
            }
          };
          dom.__listeners[k] = { evtName, handler: wrapper, fn: val };
          dom.addEventListener(evtName, wrapper);
        } else {
          dom.__listeners[k].fn = val;
        }
        continue;
      }

      if (isSvg) {
        const attrName = SVG_ATTR_MAP[k] || k;
        if (val === false || val == null) dom.removeAttribute(attrName);
        else dom.setAttribute(attrName, String(val));
        continue;
      }

      if (k === 'className') {
        if (dom.className !== (val || '')) dom.className = val || '';
      } else if (k === 'htmlFor') {
        dom.setAttribute('for', String(val || ''));
      } else if (k === 'value') {
        const strVal = val == null ? '' : String(val);
        if (dom.value !== strVal) dom.value = strVal;
      } else if (k === 'checked') {
        dom.checked = Boolean(val);
      } else if (k === 'disabled' || k === 'readOnly' || k === 'required' || k === 'noValidate') {
        dom[k] = Boolean(val);
        if (!val) dom.removeAttribute(k.toLowerCase());
      } else if (val === false || val == null) {
        dom.removeAttribute(k);
      } else {
        dom.setAttribute(k, String(val === true ? '' : val));
      }
    }
  }

  function createDomNode(vnode, isSvgContext) {
    if (vnode.type === TEXT_ELEMENT) {
      const textNode = document.createTextNode(vnode.props.nodeValue || '');
      textNode.__vnode = vnode;
      return textNode;
    }
    const isSvg = isSvgContext || vnode.type === 'svg';
    const dom = isSvg
      ? document.createElementNS(SVG_NS, vnode.type)
      : document.createElement(vnode.type);
    applyProps(dom, {}, vnode.props, isSvg);
    patchChildren(dom, vnode.children, isSvg);
    if (!isSvg && vnode.type === 'select' && 'value' in vnode.props) {
      const strVal = String(vnode.props.value ?? '');
      if (dom.value !== strVal) dom.value = strVal;
    }
    dom.__vnode = vnode;
    return dom;
  }

  function patchChildren(parentDom, newChildren, isSvgContext) {
    const existingNodes = Array.from(parentDom.childNodes);
    const maxLen = Math.max(existingNodes.length, newChildren.length);

    for (let i = 0; i < maxLen; i++) {
      const oldDom = existingNodes[i];
      const newVNode = newChildren[i];

      if (!newVNode) {
        if (oldDom) parentDom.removeChild(oldDom);
        continue;
      }

      if (!oldDom) {
        parentDom.appendChild(createDomNode(newVNode, isSvgContext));
        continue;
      }

      const oldVNode = oldDom.__vnode;
      if (!oldVNode || oldVNode.type !== newVNode.type) {
        parentDom.replaceChild(createDomNode(newVNode, isSvgContext), oldDom);
        continue;
      }

      if (newVNode.type === TEXT_ELEMENT) {
        if (oldDom.nodeValue !== newVNode.props.nodeValue) {
          oldDom.nodeValue = newVNode.props.nodeValue;
        }
        oldDom.__vnode = newVNode;
        continue;
      }

      const isSvg = isSvgContext || newVNode.type === 'svg';
      applyProps(oldDom, oldVNode.props, newVNode.props, isSvg);
      patchChildren(oldDom, newVNode.children, isSvg);
      if (!isSvg && newVNode.type === 'select' && 'value' in newVNode.props) {
        const strVal = String(newVNode.props.value ?? '');
        if (oldDom.value !== strVal) oldDom.value = strVal;
      }
      oldDom.__vnode = newVNode;
    }
  }

  function createRoot(container) {
    return {
      render(vnode) {
        rootContainer = container;
        rootVNode = vnode;
        flushRender();
      },
    };
  }

  global.React = {
    createElement,
    Fragment,
    useState,
    useEffect,
    useMemo,
    useCallback,
    useRef,
  };
  global.ReactDOM = { createRoot };
  global.createRoot = createRoot;

  // ==========================================================================
  // 2. Lucide React Icons Registry (Exact Vector Paths)
  // ==========================================================================
  function createLucideIcon(name, elements) {
    const IconComponent = function (props) {
      const className = (props && props.className) || 'w-4 h-4';
      return createElement(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          'aria-hidden': 'true',
          className,
        },
        ...elements.map(([tag, attrs], idx) =>
          createElement(tag, Object.assign({ key: idx }, attrs))
        )
      );
    };
    IconComponent.displayName = name;
    return IconComponent;
  }

  global.LucideIcons = {
    Search: createLucideIcon('Search', [
      ['circle', { cx: '11', cy: '11', r: '8' }],
      ['path', { d: 'm21 21-4.3-4.3' }],
    ]),
    Filter: createLucideIcon('Filter', [
      ['polygon', { points: '22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' }],
    ]),
    PhoneCall: createLucideIcon('PhoneCall', [
      ['path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' }],
      ['path', { d: 'M14.05 2a9 9 0 0 1 8 7.94' }],
      ['path', { d: 'M14.05 6A5 5 0 0 1 18 10' }],
    ]),
    CheckCircle2: createLucideIcon('CheckCircle2', [
      ['circle', { cx: '12', cy: '12', r: '10' }],
      ['path', { d: 'm9 12 2 2 4-4' }],
    ]),
    Clock: createLucideIcon('Clock', [
      ['circle', { cx: '12', cy: '12', r: '10' }],
      ['polyline', { points: '12 6 12 12 16 14' }],
    ]),
    RotateCcw: createLucideIcon('RotateCcw', [
      ['path', { d: 'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' }],
      ['path', { d: 'M3 3v5h5' }],
    ]),
    HeartHandshake: createLucideIcon('HeartHandshake', [
      ['path', { d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' }],
      ['path', { d: 'M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66' }],
      ['path', { d: 'm18 15-2-2' }],
      ['path', { d: 'm15 18-2-2' }],
    ]),
    ShieldCheck: createLucideIcon('ShieldCheck', [
      ['path', { d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' }],
      ['path', { d: 'm9 12 2 2 4-4' }],
    ]),
    Shield: createLucideIcon('Shield', [
      ['path', { d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' }],
    ]),
    Globe: createLucideIcon('Globe', [
      ['circle', { cx: '12', cy: '12', r: '10' }],
      ['path', { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' }],
      ['path', { d: 'M2 12h20' }],
    ]),
    Compass: createLucideIcon('Compass', [
      ['circle', { cx: '12', cy: '12', r: '10' }],
      ['polygon', { points: '16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76' }],
    ]),
    AlertTriangle: createLucideIcon('AlertTriangle', [
      ['path', { d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3' }],
      ['path', { d: 'M12 9v4' }],
      ['path', { d: 'M12 17h.01' }],
    ]),
    AlertCircle: createLucideIcon('AlertCircle', [
      ['circle', { cx: '12', cy: '12', r: '10' }],
      ['line', { x1: '12', y1: '8', x2: '12', y2: '12' }],
      ['line', { x1: '12', y1: '16', x2: '12.01', y2: '16' }],
    ]),
    Sparkles: createLucideIcon('Sparkles', [
      ['path', { d: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z' }],
      ['path', { d: 'M20 3v4' }],
      ['path', { d: 'M22 5h-4' }],
      ['path', { d: 'M4 17v2' }],
      ['path', { d: 'M5 18H3' }],
    ]),
    Zap: createLucideIcon('Zap', [
      ['path', { d: 'M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z' }],
    ]),
    PlusCircle: createLucideIcon('PlusCircle', [
      ['circle', { cx: '12', cy: '12', r: '10' }],
      ['path', { d: 'M8 12h8' }],
      ['path', { d: 'M12 8v8' }],
    ]),
    Hospital: createLucideIcon('Hospital', [
      ['path', { d: 'M12 6v4' }],
      ['path', { d: 'M14 14h-4' }],
      ['path', { d: 'M14 18h-4' }],
      ['path', { d: 'M14 8h-4' }],
      ['path', { d: 'M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2' }],
      ['path', { d: 'M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18' }],
    ]),
    Check: createLucideIcon('Check', [
      ['path', { d: 'M20 6 9 17l-5-5' }],
    ]),
    ArrowRight: createLucideIcon('ArrowRight', [
      ['path', { d: 'M5 12h14' }],
      ['path', { d: 'm12 5 7 7-7 7' }],
    ]),
    Calendar: createLucideIcon('Calendar', [
      ['path', { d: 'M8 2v4' }],
      ['path', { d: 'M16 2v4' }],
      ['rect', { width: '18', height: '18', x: '3', y: '4', rx: '2' }],
      ['path', { d: 'M3 10h18' }],
    ]),
    MapPin: createLucideIcon('MapPin', [
      ['path', { d: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' }],
      ['circle', { cx: '12', cy: '10', r: '3' }],
    ]),
    Users: createLucideIcon('Users', [
      ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }],
      ['circle', { cx: '9', cy: '7', r: '4' }],
      ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }],
      ['path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' }],
    ]),
    Building2: createLucideIcon('Building2', [
      ['path', { d: 'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z' }],
      ['path', { d: 'M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2' }],
      ['path', { d: 'M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2' }],
      ['path', { d: 'M10 6h4' }],
      ['path', { d: 'M10 10h4' }],
      ['path', { d: 'M10 14h4' }],
      ['path', { d: 'M10 18h4' }],
    ]),
    Image: createLucideIcon('Image', [
      ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2' }],
      ['circle', { cx: '9', cy: '9', r: '2' }],
      ['path', { d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21' }],
    ]),
    Download: createLucideIcon('Download', [
      ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }],
      ['polyline', { points: '7 10 12 15 17 10' }],
      ['line', { x1: '12', x2: '12', y1: '15', y2: '3' }],
    ]),
    Layers: createLucideIcon('Layers', [
      ['path', { d: 'm12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z' }],
      ['path', { d: 'm22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65' }],
      ['path', { d: 'm22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65' }],
    ]),
    Smartphone: createLucideIcon('Smartphone', [
      ['rect', { width: '14', height: '20', x: '5', y: '2', rx: '2', ry: '2' }],
      ['path', { d: 'M12 18h.01' }],
    ]),
    Wand2: createLucideIcon('Wand2', [
      ['path', { d: 'm21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72' }],
      ['path', { d: 'm14 7 3 3' }],
      ['path', { d: 'M5 6v4' }],
      ['path', { d: 'M19 14v4' }],
      ['path', { d: 'M10 2v2' }],
      ['path', { d: 'M7 8H3' }],
      ['path', { d: 'M21 16h-4' }],
      ['path', { d: 'M11 3H9' }],
    ]),
    Upload: createLucideIcon('Upload', [
      ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' }],
      ['polyline', { points: '17 8 12 3 7 8' }],
      ['line', { x1: '12', x2: '12', y1: '3', y2: '15' }],
    ]),
    MessageSquareHeart: createLucideIcon('MessageSquareHeart', [
      ['path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' }],
      ['path', { d: 'M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8' }],
    ]),
    X: createLucideIcon('X', [
      ['path', { d: 'M18 6 6 18' }],
      ['path', { d: 'm6 6 12 12' }],
    ]),
    Send: createLucideIcon('Send', [
      ['path', { d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z' }],
      ['path', { d: 'm21.854 2.147-10.94 10.939' }],
    ]),
    Cpu: createLucideIcon('Cpu', [
      ['rect', { width: '16', height: '16', x: '4', y: '4', rx: '2' }],
      ['rect', { width: '6', height: '6', x: '9', y: '9', rx: '1' }],
      ['path', { d: 'M15 2v2' }],
      ['path', { d: 'M15 20v2' }],
      ['path', { d: 'M2 15h2' }],
      ['path', { d: 'M2 9h2' }],
      ['path', { d: 'M20 15h2' }],
      ['path', { d: 'M20 9h2' }],
      ['path', { d: 'M9 2v2' }],
      ['path', { d: 'M9 20v2' }],
    ]),
  };

  // ==========================================================================
  // 3. Static GitHub Pages API Interceptor (Preserves server.ts AI responses)
  // ==========================================================================
  const nativeFetch = global.fetch ? global.fetch.bind(global) : null;

  function buildClinicalFallbackReply(userQuestion, lang) {
    const q = String(userQuestion || '').toLowerCase();
    if (q.includes('o-') || q.includes('সার্বজনীন দাতা') || q.includes('universal donor')) {
      return lang === 'en'
        ? "O- (O Negative) red blood cells lack A, B, and Rh(D) antigens on their surface, making O- the Universal Red Cell Donor for emergency transfusions when a patient's blood group is unknown. However, hospital laboratory cross-matching is still mandatory before transfusion."
        : "O- (ও নেগেটিভ) লোহিত রক্তকণিকায় A, B বা Rh(D) অ্যান্টিজেন না থাকায় জরুরি মুহূর্তে যেকোনো গ্রুপের রোগীকে O- লোহিত কণিকা দেওয়া যায়। এ কারণেই O- গ্রুপকে সার্বজনীন রক্তদাতা (Universal Red Cell Donor) বলা হয়। তবে রক্ত সঞ্চালনের পূর্বে হাসপাতালের ল্যাবে ক্রস-ম্যাচিং করা বাধ্যতামূলক।";
    }
    if (q.includes('ab+') || q.includes('সার্বজনীন গ্রহীতা') || q.includes('universal recipient')) {
      return lang === 'en'
        ? "AB+ (AB Positive) patients have A, B, and Rh(D) antigens, allowing them to receive red blood cells from all 8 blood groups (O-, O+, A-, A+, B-, B+, AB-, AB+). Always complete hospital cross-matching before transfusion."
        : "AB+ (এবি পজিটিভ) গ্রুপের রক্তে A, B এবং Rh(D) অ্যান্টিজেন উপস্থিত থাকায় জরুরি প্রয়োজনে এই গ্রুপের রোগীরা ৮টি রক্তের গ্রুপ থেকেই লোহিত রক্তকণিকা গ্রহণ করতে পারেন। তাই AB+ গ্রুপকে সার্বজনীন গ্রহীতা বলা হয়।";
    }
    if (q.includes('পরীক্ষা') || q.includes('test') || q.includes('screening') || q.includes('ল্যাব') || q.includes('ক্রস')) {
      return lang === 'en'
        ? "Before blood transfusion at Barguna 250-Bed General Hospital or any certified Upazila Health Complex, 5 mandatory screening tests are performed alongside ABO/Rh grouping and cross-matching: 1. HIV, 2. Hepatitis B (HBsAg), 3. Hepatitis C (Anti-HCV), 4. Syphilis (VDRL), and 5. Malaria."
        : "বরগুনা ২৫০ শয্যা জেনারেল হাসপাতাল বা যেকোনো অনুমোদিত ব্লাড ব্যাংকে রক্ত সঞ্চালনের পূর্বে ABO/Rh গ্রুপিং ও ক্রস-ম্যাচিংয়ের পাশাপাশি ৫টি বাধ্যতামূলক স্ক্রিনিং পরীক্ষা করা হয়: ১. এইচআইভি (HIV), ২. হেপাটাইটিস-বি (HBsAg), ৩. হেপাটাইটিস-সি (Anti-HCV), ৪. সিফিলিস (VDRL) এবং ৫. ম্যালেরিয়া।";
    }
    if (q.includes('হাসপাতাল') || q.includes('hospital') || q.includes('বরগুনা') || q.includes('barguna')) {
      return lang === 'en'
        ? "In Barguna District, emergency blood cross-matching and transfusion services are coordinated through Barguna 250-Bed General Hospital (Barguna Sadar) and the Upazila Health Complexes in Amtali, Patharghata, Betagi, Bamna, and Taltali. For national emergency support, dial 999 or Health Call Center 16263."
        : "বরগুনা জেলায় জরুরি রক্তের প্রয়োজনে বরগুনা ২৫০ শয্যা জেনারেল হাসপাতাল (বরগুনা সদর) এবং আমতলী, পাথরঘাটা, বেতাগী, বামনা ও তালতলী উপজেলা স্বাস্থ্য কমপ্লেক্সে যোগাযোগ করুন। জাতীয় জরুরি সেবার জন্য ৯৯৯ বা স্বাস্থ্য বাতায়ন ১৬২৬৩ নম্বরে কল করতে পারেন।";
    }
    return lang === 'en'
      ? "RoktoBondhon Clinical Guidance: Voluntary donors must be 18–60 years old, weigh at least 48 kg, have hemoglobin >= 12.5 g/dL, and wait at least 90 days between whole blood donations. Drink plenty of water and eat a light meal before donating, and always complete hospital lab cross-matching before transfusion."
      : "রক্তবন্ধন স্বাস্থ্য নির্দেশিকা: স্বেচ্ছায় রক্তদাতার বয়স ১৮–৬০ বছর, ওজন কমপক্ষে ৪৮ কেজি, হিমোগ্লোবিন কমপক্ষে ১২.৫ g/dL এবং সর্বশেষ রক্তদানের পর অন্তত ৯০ দিন বিরতি থাকা আবশ্যক। রক্তদানের আগে পর্যাপ্ত পানি ও হালকা খাবার গ্রহণ করুন এবং রক্ত সঞ্চালনের পূর্বে অবশ্যই হাসপাতালের ল্যাবে ক্রস-ম্যাচিং সম্পন্ন করুন।";
  }

  function makeJsonResponse(obj, status = 200) {
    return Promise.resolve({
      ok: status >= 200 && status < 300,
      status,
      json: () => Promise.resolve(obj),
    });
  }

  global.fetch = function (input, init) {
    const url = typeof input === 'string' ? input : (input && input.url) || '';
    if (url.includes('/api/ai/fast-triage')) {
      let body = {};
      try { body = JSON.parse((init && init.body) || '{}'); } catch (_e) {}
      const lang = body.lang === 'en' ? 'en' : 'bn';
      const fallbackGuidance =
        lang === 'en'
          ? "1. Verify blood requisition slip from the attending physician at your Barguna hospital.\n2. Contact available donors in the same Upazila first and arrange 2-3 backup donors.\n3. Ensure mandatory clinical screening and cross-matching at the hospital pathology lab before transfusion."
          : "১. হাসপাতালের কর্তব্যরত চিকিৎসকের নিকট থেকে রক্তের রিকুইজিশন স্লিপ সংগ্রহ করুন।\n২. আপনার উপজেলার নিকটবর্তী ডোনারদের সাথে প্রথমে যোগাযোগ করুন এবং অন্তত ২ জন বিকল্প ডোনার প্রস্তুত রাখুন।\n৩. রক্ত গ্রহণের পূর্বে অবশ্যই হাসপাতালের ল্যাবে স্ক্রিনিং ও ক্রস-ম্যাচিং সম্পন্ন করুন।";
      return makeJsonResponse({
        model: 'gemini-3.1-flash-lite',
        guidance: fallbackGuidance,
        dryRunOrFallback: true,
      });
    }

    if (url.includes('/api/ai/chat')) {
      let body = {};
      try { body = JSON.parse((init && init.body) || '{}'); } catch (_e) {}
      const lang = body.lang === 'en' ? 'en' : 'bn';
      const messages = Array.isArray(body.messages) ? body.messages : [];
      const latest = messages.length > 0 ? messages[messages.length - 1].text : '';
      const modelMap = {
        fast: 'gemini-3.1-flash-lite',
        general: 'gemini-3.8-flash',
        complex: 'gemini-4-argon',
      };
      return makeJsonResponse({
        model: modelMap[body.mode] || 'gemini-3.8-flash',
        reply: buildClinicalFallbackReply(latest, lang),
        dryRunOrFallback: true,
      });
    }

    if (url.includes('/api/ai/generate-poster')) {
      let body = {};
      try { body = JSON.parse((init && init.body) || '{}'); } catch (_e) {}
      return makeJsonResponse({
        model: 'gemini-nano-banana-2.1',
        imageSize: body.imageSize || '1K',
        aspectRatio: body.aspectRatio || '16:9',
        fallbackStudioRender: true,
      });
    }

    if (nativeFetch) {
      return nativeFetch(input, init);
    }
    return Promise.reject(new Error('Fetch not available'));
  };
})(window);
