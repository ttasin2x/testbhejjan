/**
 * RoktoBondhon (রক্তবন্ধন) — UI Components & High-Resolution Campaign Banner Studio
 */
window.RB = window.RB || {};

// --- Source: src/components/BrandLogo.tsx ---
(function () {
const OFFICIAL_LOGO_PATH = 'images/RoktoBondhon_Blood_Donation_Logo_e425e45b.png';
/**
 * Vector recreation of the official RoktoBondhon blood-drop with white heart,
 * ECG lifeline pulse, and caring hands for crisp rendering at small icon sizes.
 */
const BloodDropSymbol = ({
  className = 'w-7 h-7'
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 64 64",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  className: className,
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "rbDropGrad",
  x1: "14",
  y1: "4",
  x2: "50",
  y2: "60",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  stopColor: "#E53935"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  stopColor: "#B71C1C"
}))), /*#__PURE__*/React.createElement("path", {
  d: "M14 40C8 46 11 54 24 57C16 54 14 47 17 42",
  stroke: "#E53935",
  strokeWidth: "2.5",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M50 32C56 38 53 50 34 58C45 52 50 42 48 35",
  stroke: "#B71C1C",
  strokeWidth: "2.5",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M32 5C32 5 14 26.5 14 40.5C14 50.4411 22.0589 58.5 32 58.5C41.9411 58.5 50 50.4411 50 40.5C50 26.5 32 5 32 5Z",
  fill: "url(#rbDropGrad)"
}), /*#__PURE__*/React.createElement("path", {
  d: "M29 13C23.5 21.5 18.5 30.5 18 39C19.8 33.5 24.5 24 29 13Z",
  fill: "#FFFFFF",
  fillOpacity: "0.35"
}), /*#__PURE__*/React.createElement("path", {
  d: "M32 45.5C32 45.5 21.5 38.8 21.5 32C21.5 28.6 24.1 26 27.3 26C29.3 26 31 27.1 32 28.6C33 27.1 34.7 26 36.7 26C39.9 26 42.5 28.6 42.5 32C42.5 38.8 32 45.5 32 45.5Z",
  fill: "#FFFFFF"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23.5 33.5H27.5L29.2 29.8L31.8 37.8L34.1 28.8L35.8 33.5H40.5",
  stroke: "#E53935",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.5 34.5C19.5 41.5 25 46.5 30.5 52V56.5M44.5 34.5C44.5 41.5 39 46.5 33.5 52V56.5",
  stroke: "#FFFFFF",
  strokeWidth: "2.4",
  strokeLinecap: "round"
}));
/**
 * Displays the official uploaded RoktoBondhon logo image on a clean white background
 * without distortion or stretching, alongside crisp Bengali/English typography fallback.
 */
const OfficialLogoDisplay = ({
  size = 'md',
  showTagline = true,
  className = ''
}) => {
  const [imgError, setImgError] = React.useState(false);
  const sizeClasses = {
    sm: 'w-20 h-20 sm:w-22 sm:h-22',
    md: 'w-32 h-32',
    lg: 'w-44 h-44 sm:w-52 sm:h-52'
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    className: `inline-flex flex-col items-center justify-center bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-xs ${className}`
  }, !imgError ? /*#__PURE__*/React.createElement("img", {
    src: OFFICIAL_LOGO_PATH,
    alt: "রক্তবন্ধন (RoktoBondhon) অফিশিয়াল লোগো — এক ব্যাগ রক্ত, বাঁচাতে পারে একটি প্রাণ।",
    referrerPolicy: "no-referrer",
    loading: "eager",
    decoding: "async",
    onError: () => setImgError(true),
    className: `${sizeClasses} object-contain object-center select-none`
  }) : /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center py-2"
  }, /*#__PURE__*/React.createElement(BloodDropSymbol, {
    className: "w-16 h-16"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mt-2 text-2xl font-bold text-[#E53935] font-bn"
  }, "রক্তবন্ধন"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-semibold tracking-wider text-slate-900 font-en"
  }, "RoktoBondhon")), showTagline && /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-xs sm:text-sm font-semibold text-slate-700 text-center font-bn"
  }, "এক ব্যাগ রক্ত, বাঁচাতে পারে একটি প্রাণ।"));
};

  Object.assign(window.RB, { OFFICIAL_LOGO_PATH, BloodDropSymbol, OfficialLogoDisplay });
})();

// --- Source: src/utils/posterCanvasRenderer.ts ---
(function () {
const { OFFICIAL_LOGO_PATH } = window.RB;
function getDimensions(imageSize, aspectRatio) {
  const baseWidthMap = {
    '1K': 1600,
    '2K': 2400,
    '4K': 3200
  };
  const baseW = baseWidthMap[imageSize] || 1600;
  if (aspectRatio === '1:1') {
    return {
      width: baseW,
      height: baseW
    };
  }
  if (aspectRatio === '4:3') {
    return {
      width: baseW,
      height: Math.round(baseW * 3 / 4)
    };
  }
  return {
    width: baseW,
    height: Math.round(baseW * 9 / 16)
  };
}
function loadImage(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}
function wrapText(ctx, text, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let currentLine = '';
  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (ctx.measureText(testLine).width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines.slice(0, 3);
}

/**
 * Generates or edits a high-resolution (1K / 2K / 4K) RoktoBondhon Campaign Banner
 * on an HTML5 Canvas so the user always gets a crisp, downloadable poster.
 */
async function renderHighResCampaignBanner(options) {
  const {
    prompt,
    editInstruction,
    upazilaLabel,
    imageSize,
    aspectRatio,
    sourceImageDataUrl,
    lang
  } = options;
  const {
    width,
    height
  } = getDimensions(imageSize, aspectRatio);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';
  const scale = width / 1600;
  const isEdited = Boolean(editInstruction && editInstruction.trim());

  // 1. Background Canvas
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  if (isEdited) {
    bgGrad.addColorStop(0, '#FFFDF9');
    bgGrad.addColorStop(0.55, '#FFF5F5');
    bgGrad.addColorStop(1, '#FECACA');
  } else {
    bgGrad.addColorStop(0, '#FFFFFF');
    bgGrad.addColorStop(0.55, '#FFF5F5');
    bgGrad.addColorStop(1, '#FEE2E2');
  }
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // 2. Top Red Healthcare Accent Ribbon
  const topGrad = ctx.createLinearGradient(0, 0, width, 0);
  topGrad.addColorStop(0, '#E53935');
  topGrad.addColorStop(1, '#B71C1C');
  ctx.fillStyle = topGrad;
  ctx.fillRect(0, 0, width, Math.round(22 * scale));

  // Decorative right-side medical geometry
  ctx.save();
  ctx.beginPath();
  ctx.arc(width * 0.9, height * 0.48, height * 0.46, 0, Math.PI * 2);
  ctx.fillStyle = isEdited ? 'rgba(245, 158, 11, 0.08)' : 'rgba(229, 57, 53, 0.07)';
  ctx.fill();
  ctx.restore();

  // If user uploaded a custom reference photo, render it in a clean framed card on the right
  if (sourceImageDataUrl) {
    const srcImg = await loadImage(sourceImageDataUrl);
    if (srcImg) {
      const thumbW = Math.round(360 * scale);
      const thumbH = Math.round(240 * scale);
      const thumbX = width - thumbW - Math.round(80 * scale);
      const thumbY = Math.round(70 * scale);
      ctx.save();
      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = '#E2E8F0';
      ctx.lineWidth = Math.round(3 * scale);
      ctx.beginPath();
      ctx.roundRect(thumbX, thumbY, thumbW, thumbH, Math.round(18 * scale));
      ctx.fill();
      ctx.stroke();
      ctx.clip();
      ctx.drawImage(srcImg, thumbX, thumbY, thumbW, thumbH);
      ctx.restore();
    }
  }

  // 3. Draw Official Uploaded Logo Card in Top-Left
  const logoBoxSize = Math.round(168 * scale);
  const padX = Math.round(80 * scale);
  const padY = Math.round(64 * scale);
  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = '#FECACA';
  ctx.lineWidth = Math.max(2, Math.round(2 * scale));
  ctx.beginPath();
  ctx.roundRect(padX, padY, logoBoxSize, logoBoxSize, Math.round(24 * scale));
  ctx.fill();
  ctx.stroke();
  const logoImg = await loadImage(OFFICIAL_LOGO_PATH);
  if (logoImg) {
    const innerPad = Math.round(16 * scale);
    ctx.drawImage(logoImg, padX + innerPad, padY + innerPad, logoBoxSize - innerPad * 2, logoBoxSize - innerPad * 2);
  }

  // 4. Brand Header Text next to Logo
  const brandTextX = padX + logoBoxSize + Math.round(32 * scale);
  ctx.fillStyle = '#E53935';
  ctx.font = `700 ${Math.round(50 * scale)}px "Hind Siliguri", "Inter", sans-serif`;
  ctx.fillText('রক্তবন্ধন · RoktoBondhon', brandTextX, padY + Math.round(64 * scale));
  ctx.fillStyle = '#B71C1C';
  ctx.font = `600 ${Math.round(27 * scale)}px "Hind Siliguri", "Inter", sans-serif`;
  ctx.fillText('এক ব্যাগ রক্ত, বাঁচাতে পারে একটি প্রাণ।', brandTextX, padY + Math.round(110 * scale));
  ctx.fillStyle = '#475569';
  ctx.font = `600 ${Math.round(22 * scale)}px "Hind Siliguri", "Inter", sans-serif`;
  ctx.fillText(`${upazilaLabel} · ${lang === 'bn' ? 'স্বেচ্ছাসেবী রক্তদান ও সচেতনতা ক্যাম্পেইন' : 'Voluntary Blood Donation & Awareness Campaign'} · ${imageSize} (${width}×${height})`, brandTextX, padY + Math.round(148 * scale));

  // 5. Main Campaign Title & Prompt Content
  const contentTopY = padY + logoBoxSize + Math.round(68 * scale);
  ctx.fillStyle = '#1E293B';
  ctx.font = `700 ${Math.round(48 * scale)}px "Hind Siliguri", "Inter", sans-serif`;
  const headline = lang === 'bn' ? `${upazilaLabel} স্বেচ্ছাসেবী রক্তদান ও ফ্রি ব্লাড গ্রুপিং ক্যাম্পেইন` : `${upazilaLabel} Voluntary Blood Donation & Free Grouping Drive`;
  const headlineLines = wrapText(ctx, headline, width - padX * 2);
  let cursorY = contentTopY;
  for (const line of headlineLines) {
    ctx.fillText(line, padX, cursorY);
    cursorY += Math.round(60 * scale);
  }

  // User Prompt
  cursorY += Math.round(12 * scale);
  ctx.fillStyle = '#334155';
  ctx.font = `500 ${Math.round(29 * scale)}px "Hind Siliguri", "Inter", sans-serif`;
  const promptLines = wrapText(ctx, prompt, width - padX * 2.1);
  for (const line of promptLines) {
    ctx.fillText(line, padX, cursorY);
    cursorY += Math.round(42 * scale);
  }

  // If edited, render a clean highlighted banner callout bar
  if (isEdited && editInstruction) {
    cursorY += Math.round(14 * scale);
    const boxH = Math.round(64 * scale);
    ctx.fillStyle = '#FEF2F2';
    ctx.strokeStyle = '#E53935';
    ctx.lineWidth = Math.max(2, Math.round(2 * scale));
    ctx.beginPath();
    ctx.roundRect(padX, cursorY - Math.round(38 * scale), width - padX * 2, boxH, Math.round(14 * scale));
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#B71C1C';
    ctx.font = `700 ${Math.round(25 * scale)}px "Hind Siliguri", "Inter", sans-serif`;
    ctx.fillText(editInstruction.slice(0, 95), padX + Math.round(24 * scale), cursorY + Math.round(2 * scale));
  }

  // 6. Blood Groups Row
  const groups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  const badgeY = height - Math.round(195 * scale);
  const badgeW = Math.round(96 * scale);
  const badgeH = Math.round(54 * scale);
  const badgeGap = Math.round(18 * scale);
  groups.forEach((grp, idx) => {
    const bx = padX + idx * (badgeW + badgeGap);
    ctx.fillStyle = idx % 2 === 0 ? '#E53935' : '#1E293B';
    ctx.beginPath();
    ctx.roundRect(bx, badgeY, badgeW, badgeH, Math.round(12 * scale));
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `700 ${Math.round(25 * scale)}px "JetBrains Mono", monospace`;
    const tw = ctx.measureText(grp).width;
    ctx.fillText(grp, bx + (badgeW - tw) / 2, badgeY + Math.round(35 * scale));
  });

  // 7. Bottom Footer Bar
  const footerH = Math.round(88 * scale);
  ctx.fillStyle = '#1E293B';
  ctx.fillRect(0, height - footerH, width, footerH);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `600 ${Math.round(23 * scale)}px "Hind Siliguri", "Inter", sans-serif`;
  ctx.fillText(lang === 'bn' ? 'আয়োজনে: রক্তবন্ধন (RoktoBondhon) · বরগুনা জেলা নেটওয়ার্ক (সদর · আমতলী · বেতাগী · বামনা · পাথরঘাটা · তালতলী)' : 'Organized by: RoktoBondhon · Barguna District Network (Sadar · Amtali · Betagi · Bamna · Patharghata · Taltali)', padX, height - Math.round(34 * scale));
  return canvas.toDataURL('image/png');
}

  Object.assign(window.RB, { renderHighResCampaignBanner });
})();

// --- Source: src/components/Header.tsx ---
(function () {
/**
 * Follows the strict 3-zone Top Bar Contract:
 * Zone 1: Single text element wordmark ("রক্তবন্ধন · RoktoBondhon")
 * Zone 2: 5 concise single-line navigation links
 * Zone 3: 1 primary action button ("জরুরি রক্তের অনুরোধ" / "Request Emergency Blood")
 */
const Header = ({
  lang,
  onEmergencyClick
}) => {
  return /*#__PURE__*/React.createElement("header", {
    className: "sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto flex items-center justify-between gap-2 md:gap-4 lg:gap-8 px-3 sm:px-6 lg:px-8 py-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "rb-card-heading font-bold text-[#B71C1C] hover:text-[#E53935] transition-colors whitespace-nowrap shrink-0"
  }, lang === 'bn' ? /*#__PURE__*/React.createElement(React.Fragment, null, "রক্তবন্ধন", /*#__PURE__*/React.createElement("span", {
    className: "hidden min-[400px]:inline"
  }, " · RoktoBondhon")) : /*#__PURE__*/React.createElement(React.Fragment, null, "RoktoBondhon", /*#__PURE__*/React.createElement("span", {
    className: "hidden min-[400px]:inline"
  }, " · রক্তবন্ধন"))), /*#__PURE__*/React.createElement("nav", {
    "aria-label": lang === 'bn' ? 'প্রধান নেভিগেশন মেনু' : 'Primary Navigation',
    className: "hidden md:flex items-center gap-4 lg:gap-7 rb-support-text font-semibold text-[#1E293B]"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#find-donor",
    className: "py-1 text-[#1E293B] hover:text-[#E53935] hover:underline underline-offset-4 decoration-2 transition-colors whitespace-nowrap shrink-0"
  }, lang === 'bn' ? 'রক্তদাতা খুঁজুন' : 'Find Donor'), /*#__PURE__*/React.createElement("a", {
    href: "#emergency-request",
    className: "py-1 text-[#1E293B] hover:text-[#E53935] hover:underline underline-offset-4 decoration-2 transition-colors whitespace-nowrap shrink-0"
  }, lang === 'bn' ? 'জরুরি রক্তের অনুরোধ' : 'Emergency Blood'), /*#__PURE__*/React.createElement("a", {
    href: "#become-donor",
    className: "py-1 text-[#1E293B] hover:text-[#E53935] hover:underline underline-offset-4 decoration-2 transition-colors whitespace-nowrap shrink-0"
  }, lang === 'bn' ? 'রক্তদাতা হোন' : 'Become a Donor'), /*#__PURE__*/React.createElement("a", {
    href: "#blood-groups",
    className: "py-1 text-[#1E293B] hover:text-[#E53935] hover:underline underline-offset-4 decoration-2 transition-colors whitespace-nowrap shrink-0"
  }, lang === 'bn' ? 'রক্তের গ্রুপ' : 'Blood Groups'), /*#__PURE__*/React.createElement("a", {
    href: "#campaigns",
    className: "py-1 text-[#1E293B] hover:text-[#E53935] hover:underline underline-offset-4 decoration-2 transition-colors whitespace-nowrap shrink-0"
  }, lang === 'bn' ? 'রক্তদান কর্মসূচি' : 'Campaigns')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 shrink-0"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onEmergencyClick,
    className: "rb-btn-transition rb-btn-text px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 text-white bg-[#E53935] hover:bg-[#B71C1C] rounded-xl shadow-2xs whitespace-nowrap shrink-0 cursor-pointer"
  }, lang === 'bn' ? 'জরুরি রক্তের অনুরোধ' : 'Request Emergency Blood'))), /*#__PURE__*/React.createElement("nav", {
    "aria-label": lang === 'bn' ? 'মোবাইল নেভিগেশন মেনু' : 'Mobile Navigation',
    className: "md:hidden border-t border-slate-100 bg-[#F8FAFC]/95 px-3 py-2 flex flex-wrap items-center justify-center sm:justify-between gap-x-2 gap-y-1 rb-label-text font-semibold text-[#1E293B]"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#find-donor",
    className: "text-[#1E293B] hover:text-[#E53935] whitespace-nowrap py-0.5 px-1"
  }, lang === 'bn' ? 'রক্তদাতা খুঁজুন' : 'Find Donor'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "text-slate-300"
  }, "·"), /*#__PURE__*/React.createElement("a", {
    href: "#emergency-request",
    className: "text-[#1E293B] hover:text-[#E53935] whitespace-nowrap py-0.5 px-1"
  }, lang === 'bn' ? 'জরুরি অনুরোধ' : 'Emergency'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "text-slate-300"
  }, "·"), /*#__PURE__*/React.createElement("a", {
    href: "#become-donor",
    className: "text-[#1E293B] hover:text-[#E53935] whitespace-nowrap py-0.5 px-1"
  }, lang === 'bn' ? 'রক্তদাতা হোন' : 'Become Donor'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "text-slate-300"
  }, "·"), /*#__PURE__*/React.createElement("a", {
    href: "#blood-groups",
    className: "text-[#1E293B] hover:text-[#E53935] whitespace-nowrap py-0.5 px-1"
  }, lang === 'bn' ? 'রক্তের গ্রুপ' : 'Groups'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "text-slate-300"
  }, "·"), /*#__PURE__*/React.createElement("a", {
    href: "#campaigns",
    className: "text-[#1E293B] hover:text-[#E53935] whitespace-nowrap py-0.5 px-1"
  }, lang === 'bn' ? 'কর্মসূচি' : 'Campaigns')));
};

  Object.assign(window.RB, { Header });
})();

// --- Source: src/components/HeroSection.tsx ---
(function () {
const { BARGUNA_UPAZILAS } = window.RB;
const { ALL_BLOOD_GROUPS, BLOOD_COMPATIBILITY_MAP, toBnDigits } = window.RB;
const { OfficialLogoDisplay, BloodDropSymbol } = window.RB;
const { Search, HeartHandshake, ShieldCheck, Globe, Compass, AlertTriangle, Sparkles } = window.LucideIcons;
const HeroSection = ({
  lang,
  onToggleLang,
  selectedBloodGroup,
  selectedUpazila,
  onQuickSearch,
  onOpenAiChat
}) => {
  const [heroGroup, setHeroGroup] = React.useState(selectedBloodGroup);
  const [heroUpazila, setHeroUpazila] = React.useState(selectedUpazila);
  React.useEffect(() => {
    setHeroGroup(selectedBloodGroup);
  }, [selectedBloodGroup]);
  React.useEffect(() => {
    setHeroUpazila(selectedUpazila);
  }, [selectedUpazila]);
  const handleHeroSearchSubmit = e => {
    e.preventDefault();
    onQuickSearch(heroGroup, heroUpazila);
    const el = document.getElementById('find-donor');
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const activeCompatibility = heroGroup !== 'ALL' ? BLOOD_COMPATIBILITY_MAP[heroGroup] : null;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "relative bg-white border-b border-slate-200 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    className: "pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-red-50/40 via-slate-50/20 to-transparent"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative bg-[#F8FAFC] border-b border-slate-200/80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 rb-label-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2 text-[#475569]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-[#B71C1C]"
  }, lang === 'bn' ? 'প্রাথমিক সেবা অঞ্চল: বরগুনা জেলা (৬টি উপজেলা)' : 'Initial Launch Region: Barguna District (6 Upazilas)'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "·"), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'ভবিষ্যৎ সম্প্রসারণ: সমগ্র বাংলাদেশের ৬৪টি জেলা' : 'Future Roadmap: All 64 Districts of Bangladesh'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "·"), /*#__PURE__*/React.createElement("span", {
    className: "text-[#64748B]"
  }, lang === 'bn' ? 'প্রাথমিক সংস্করণ ও নমুনা প্রদর্শনী' : 'Stage 1: Foundation & Demonstration Preview')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpenAiChat,
    className: "inline-flex items-center gap-1.5 rb-label-text font-semibold text-[#B71C1C] hover:text-[#E53935] underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
  }, /*#__PURE__*/React.createElement(Sparkles, {
    className: "w-3.5 h-3.5 text-[#E53935] shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'রক্তবন্ধন এআই স্বাস্থ্য সহায়ক' : 'RoktoBondhon AI Assistant')), /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": lang === 'bn' ? 'ভাষা নির্বাচন' : 'Language Selector',
    className: "inline-flex items-center p-0.5 bg-slate-200/80 rounded-lg"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onToggleLang('bn'),
    className: `px-3 py-1 rb-label-text font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${lang === 'bn' ? 'bg-white text-[#1E293B] shadow-2xs' : 'text-[#475569] hover:text-[#1E293B]'}`
  }, "বাংলা"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onToggleLang('en'),
    className: `px-3 py-1 rb-label-text font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${lang === 'en' ? 'bg-white text-[#1E293B] shadow-2xs' : 'text-[#475569] hover:text-[#1E293B]'}`
  }, "English"))))), /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-animate-in lg:col-span-7 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2 rb-support-text font-semibold text-[#B71C1C] mb-3.5"
  }, /*#__PURE__*/React.createElement(Globe, {
    className: "w-4 h-4 shrink-0 text-[#E53935]"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'মানবিক ডিজিটাল রক্তদান নেটওয়ার্ক ও জরুরি রক্ত সহায়তা প্ল্যাটফর্ম' : 'Humanitarian Digital Blood Donation & Emergency Assistance Platform'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "·"), /*#__PURE__*/React.createElement("span", {
    className: "text-[#64748B]"
  }, lang === 'bn' ? 'বরগুনা জেলা সংস্করণ' : 'Barguna District Edition')), /*#__PURE__*/React.createElement("h1", {
    className: "rb-hero-heading text-balance"
  }, lang === 'bn' ? /*#__PURE__*/React.createElement(React.Fragment, null, "এক ব্যাগ রক্ত,", ' ', /*#__PURE__*/React.createElement("span", {
    className: "text-[#E53935]"
  }, "বাঁচাতে পারে একটি প্রাণ।")) : /*#__PURE__*/React.createElement(React.Fragment, null, "One Bag of Blood", ' ', /*#__PURE__*/React.createElement("span", {
    className: "text-[#E53935]"
  }, "Can Save a Human Life."))), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 rb-body-text max-w-2xl"
  }, lang === 'bn' ? 'মুমূর্ষু রোগীর জীবন বাঁচাতে সঠিক সময়ে নিরাপদ রক্তের ব্যবস্থা করাই রক্তবন্ধন (RoktoBondhon)-এর মূল লক্ষ্য। বরগুনা জেলার ৬টি উপজেলার (বরগুনা সদর, আমতলী, বেতাগী, বামনা, পাথরঘাটা ও তালতলী) স্বেচ্ছাসেবী রক্তদাতা, রোগীর পরিবার, হাসপাতাল এবং তরুণ স্বেচ্ছাসেবকদের একটি বিশ্বস্ত ও গোপনীয়তা-সুরক্ষিত মানবিক সেতুবন্ধন।' : 'RoktoBondhon connects voluntary blood donors, patient families, hospitals, and youth volunteers across all 6 Upazilas of Barguna District (Barguna Sadar, Amtali, Betagi, Bamna, Patharghata, and Taltali) through a trusted, privacy-protected digital network.'), /*#__PURE__*/React.createElement("div", {
    className: "mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs"
  }, /*#__PURE__*/React.createElement(OfficialLogoDisplay, {
    size: "sm",
    showTagline: false,
    className: "shrink-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(BloodDropSymbol, {
    className: "w-5 h-5 shrink-0"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "rb-card-heading font-bold text-[#1E293B]"
  }, "রক্তবন্ধন (RoktoBondhon)")), /*#__PURE__*/React.createElement("p", {
    className: "rb-support-text font-semibold text-[#B71C1C]"
  }, lang === 'bn' ? 'মূলমন্ত্র: “এক ব্যাগ রক্ত, বাঁচাতে পারে একটি প্রাণ।”' : 'Official Motto: “এক ব্যাগ রক্ত, বাঁচাতে পারে একটি প্রাণ।” (One bag of blood can save a life)'), /*#__PURE__*/React.createElement("p", {
    className: "rb-support-text text-[#475569]"
  }, lang === 'bn' ? 'শতভাগ স্বেচ্ছাসেবী ও অলাভজনক মানবিক উদ্যোগ · রক্তদাতার ব্যক্তিগত ফোন নম্বরের গোপনীয়তা সুরক্ষা · হাসপাতালভিত্তিক নিরাপদ রক্ত সঞ্চালন সমন্বয়' : '100% voluntary & non-commercial initiative · Privacy-masked donor contacts · Hospital-verified blood coordination'))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl bg-white border border-slate-200/90"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono-num rb-label-text font-bold text-[#E53935]"
  }, lang === 'bn' ? 'ধাপ ০১' : '01.'), /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-bold text-[#1E293B] mt-1"
  }, lang === 'bn' ? 'রক্তদাতা খুঁজুন' : 'Find Blood Donors'), /*#__PURE__*/React.createElement("p", {
    className: "rb-label-text text-[#475569] mt-1"
  }, lang === 'bn' ? 'রক্তের গ্রুপ ও উপজেলা অনুযায়ী প্রস্তুত রক্তদাতা খুঁজুন।' : 'Filter ready donors by blood group and Upazila.')), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl bg-white border border-slate-200/90"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono-num rb-label-text font-bold text-[#E53935]"
  }, lang === 'bn' ? 'ধাপ ০২' : '02.'), /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-bold text-[#1E293B] mt-1"
  }, lang === 'bn' ? 'রক্তদাতা হিসেবে নিবন্ধন' : 'Register as a Donor'), /*#__PURE__*/React.createElement("p", {
    className: "rb-label-text text-[#475569] mt-1"
  }, lang === 'bn' ? 'যোগ্যতা যাচাই করে গোপনীয়তা সুরক্ষিত রেখে যুক্ত হোন।' : 'Check eligibility and join with masked phone privacy.')), /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl bg-white border border-slate-200/90"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-mono-num rb-label-text font-bold text-[#E53935]"
  }, lang === 'bn' ? 'ধাপ ০৩' : '03.'), /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-bold text-[#1E293B] mt-1"
  }, lang === 'bn' ? 'জরুরি রক্তের অনুরোধ' : 'Emergency Requests'), /*#__PURE__*/React.createElement("p", {
    className: "rb-label-text text-[#475569] mt-1"
  }, lang === 'bn' ? 'হাসপাতালের নাম ও রক্তের গ্রুপ লিখে দ্রুত অনুরোধ জানান।' : 'Post urgent hospital needs and get instant triage.')))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-3.5"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#find-donor",
    className: "rb-btn-transition rb-btn-text inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white bg-[#E53935] hover:bg-[#B71C1C] rounded-xl shadow-xs whitespace-nowrap shrink-0"
  }, /*#__PURE__*/React.createElement(Search, {
    className: "w-4 h-4 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'রক্তদাতা খুঁজুন' : 'Find Blood Donor')), /*#__PURE__*/React.createElement("a", {
    href: "#become-donor",
    className: "rb-btn-transition rb-btn-text inline-flex items-center justify-center gap-2 px-5 py-3.5 text-[#1E293B] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl whitespace-nowrap shrink-0"
  }, /*#__PURE__*/React.createElement(HeartHandshake, {
    className: "w-4 h-4 text-[#E53935] shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'রক্তদাতা হিসেবে নিবন্ধন করুন' : 'Become a Donor')), /*#__PURE__*/React.createElement("a", {
    href: "#emergency-request",
    className: "rb-btn-transition rb-btn-text inline-flex items-center justify-center gap-2 px-5 py-3.5 text-[#B71C1C] bg-red-50 hover:bg-red-100/80 border border-red-200/80 rounded-xl whitespace-nowrap shrink-0"
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    className: "w-4 h-4 text-[#E53935] shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'জরুরি রক্তের অনুরোধ' : 'Post Emergency Request')))), /*#__PURE__*/React.createElement("div", {
    className: "rb-animate-delay-1 lg:col-span-5 flex flex-col justify-between bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-4 pb-4 border-b border-slate-200"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "rb-label-text font-semibold text-[#E53935]"
  }, lang === 'bn' ? 'তাৎক্ষণিক রক্তদাতা অনুসন্ধান' : 'Instant Donor Finder'), /*#__PURE__*/React.createElement("h2", {
    className: "rb-subsection-heading font-bold text-[#1E293B] mt-0.5"
  }, lang === 'bn' ? 'বরগুনা জেলা রক্তদাতা ডিরেক্টরি' : 'Barguna District Blood Directory')), /*#__PURE__*/React.createElement(BloodDropSymbol, {
    className: "w-9 h-9 shrink-0"
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleHeroSearchSubmit,
    className: "mt-5 space-y-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "hero-blood-group",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-2"
  }, lang === 'bn' ? '১. রোগীর প্রয়োজনীয় রক্তের গ্রুপ নির্বাচন করুন' : '1. Select Patient Required Blood Group'), /*#__PURE__*/React.createElement("div", {
    id: "hero-blood-group",
    role: "group",
    "aria-label": lang === 'bn' ? 'রক্তের গ্রুপ নির্বাচন' : 'Blood Group Selection',
    className: "grid grid-cols-4 gap-2"
  }, ALL_BLOOD_GROUPS.map(group => {
    const active = heroGroup === group;
    return /*#__PURE__*/React.createElement("button", {
      key: group,
      type: "button",
      onClick: () => setHeroGroup(active ? 'ALL' : group),
      className: `rb-btn-transition py-2.5 px-3 text-sm sm:text-base font-bold rounded-lg border cursor-pointer font-mono-num ${active ? 'bg-[#E53935] text-white border-[#E53935] shadow-2xs' : 'bg-white text-[#1E293B] border-slate-200 hover:border-[#E53935]'}`
    }, group);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "hero-upazila-select",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? '২. বরগুনা জেলার উপজেলা নির্বাচন করুন' : '2. Select Upazila in Barguna District'), /*#__PURE__*/React.createElement("select", {
    id: "hero-upazila-select",
    value: heroUpazila,
    onChange: e => setHeroUpazila(e.target.value),
    className: "w-full px-3.5 py-2.5 rb-support-text bg-white border border-slate-300 rounded-lg text-[#1E293B] focus:outline-none focus:border-[#E53935]"
  }, /*#__PURE__*/React.createElement("option", {
    value: "ALL"
  }, lang === 'bn' ? 'সকল উপজেলা (সমগ্র বরগুনা জেলা)' : 'All Upazilas (Entire Barguna District)'), BARGUNA_UPAZILAS.map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.id
  }, lang === 'bn' ? `${u.nameBn} (${u.primaryHospitalBn})` : `${u.nameEn} (${u.primaryHospitalEn})`)))), activeCompatibility ? /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl bg-white border border-slate-200 space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text font-semibold text-[#1E293B]"
  }, lang === 'bn' ? `${heroGroup} গ্রুপের রোগীর জন্য গ্রহণযোগ্য রক্তের গ্রুপসমূহ:` : `Compatible Donor Groups for ${heroGroup} Patient:`), /*#__PURE__*/React.createElement("div", {
    className: "text-[#B71C1C] font-bold font-mono-num text-base"
  }, activeCompatibility.canReceiveFrom.join(' · ')), /*#__PURE__*/React.createElement("p", {
    className: "rb-label-text text-[#475569]"
  }, lang === 'bn' ? activeCompatibility.clinicalNoteBn : activeCompatibility.clinicalNoteEn)) : /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl bg-white border border-slate-200 rb-label-text text-[#475569]"
  }, lang === 'bn' ? 'উপরের যেকোনো একটি রক্তের গ্রুপ নির্বাচন করলে রোগীর জন্য গ্রহণযোগ্য বিকল্প রক্তের গ্রুপগুলো সাথে সাথে দেখা যাবে।' : 'Select any blood group above to view instant ABO/Rh compatible donor options.'), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "rb-btn-transition rb-btn-text w-full py-3.5 px-5 bg-[#1E293B] hover:bg-slate-800 text-white rounded-xl flex items-center justify-center gap-2 cursor-pointer"
  }, /*#__PURE__*/React.createElement(Search, {
    className: "w-4 h-4 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'রক্তদাতা খুঁজুন' : 'Filter Donor Directory (Demo)')))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3 rb-label-text text-[#64748B]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(ShieldCheck, {
    className: "w-4 h-4 text-[#16A34A] shrink-0"
  }), lang === 'bn' ? 'নমুনা তথ্য দ্বারা প্রদর্শিত' : 'Labeled demonstration data only'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "text-slate-300"
  }, "·"), /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1 font-semibold text-[#1E293B]"
  }, /*#__PURE__*/React.createElement(Compass, {
    className: "w-3.5 h-3.5 text-[#E53935] shrink-0"
  }), lang === 'bn' ? '৬টি উপজেলা সংযুক্ত' : '6 Upazilas Active')))), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 pt-8 border-t border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "rb-support-text font-semibold text-[#1E293B]"
  }, lang === 'bn' ? 'বরগুনা জেলার ৬টি উপজেলা নেটওয়ার্ক (যেকোনো উপজেলায় ক্লিক করে সরাসরি রক্তদাতা দেখুন)' : 'Barguna District 6-Upazila Coverage (Click any Upazila to filter donors)'), /*#__PURE__*/React.createElement("span", {
    className: "rb-label-text font-medium text-[#64748B] tabular-nums"
  }, lang === 'bn' ? '৬টি উপজেলা · ৪২টি ইউনিয়ন · ৪টি পৌরসভা' : '6 Upazilas · 42 Unions · 4 Municipalities')), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5"
  }, BARGUNA_UPAZILAS.map((upazila, index) => {
    const isSelected = selectedUpazila === upazila.id;
    return /*#__PURE__*/React.createElement("button", {
      key: upazila.id,
      type: "button",
      onClick: () => {
        onQuickSearch(selectedBloodGroup, upazila.id);
        const el = document.getElementById('find-donor');
        if (el) el.scrollIntoView({
          behavior: 'smooth'
        });
      },
      className: `rb-card-hover text-left p-4 rounded-xl border cursor-pointer ${isSelected ? 'bg-red-50/70 border-[#E53935] text-[#1E293B]' : 'bg-[#F8FAFC] hover:bg-white border-slate-200 text-[#1E293B]'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "rb-label-text font-medium text-[#64748B]"
    }, lang === 'bn' ? `${toBnDigits(`0${index + 1}`)}. উপজেলা` : `0${index + 1}. Upazila`), /*#__PURE__*/React.createElement("div", {
      className: "rb-support-text font-bold text-[#1E293B] mt-0.5 whitespace-nowrap"
    }, lang === 'bn' ? upazila.nameBn : upazila.nameEn), /*#__PURE__*/React.createElement("div", {
      className: "rb-label-text text-[#64748B] mt-1"
    }, lang === 'bn' ? `${toBnDigits(upazila.unionsCount)}টি ইউনিয়ন` : `${upazila.unionsCount} Unions`));
  })))));
};

  Object.assign(window.RB, { HeroSection });
})();

// --- Source: src/components/FindDonorSection.tsx ---
(function () {
const { BARGUNA_UPAZILAS } = window.RB;
const { ALL_BLOOD_GROUPS, BLOOD_COMPATIBILITY_MAP, filterDonors, toBnDigits } = window.RB;
const { Search, Filter, PhoneCall, CheckCircle2, Clock, RotateCcw } = window.LucideIcons;
const FindDonorSection = ({
  lang,
  donors,
  selectedBloodGroup,
  selectedUpazila,
  onChangeBloodGroup,
  onChangeUpazila
}) => {
  const [onlyAvailable, setOnlyAvailable] = React.useState(false);
  const [includeCompatible, setIncludeCompatible] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [requestedDonorIds, setRequestedDonorIds] = React.useState([]);
  const toggleContactRequest = id => {
    setRequestedDonorIds(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };
  React.useEffect(() => {
    if (selectedBloodGroup === 'ALL') {
      setIncludeCompatible(false);
    }
  }, [selectedBloodGroup]);
  const filteredDonors = React.useMemo(() => filterDonors(donors, {
    bloodGroup: selectedBloodGroup,
    upazilaId: selectedUpazila,
    onlyAvailable,
    includeCompatibleDonors: includeCompatible,
    searchQuery
  }), [donors, selectedBloodGroup, selectedUpazila, onlyAvailable, includeCompatible, searchQuery]);
  const handleResetFilters = () => {
    onChangeBloodGroup('ALL');
    onChangeUpazila('ALL');
    setOnlyAvailable(false);
    setIncludeCompatible(false);
    setSearchQuery('');
  };
  const getUpazilaName = id => {
    const found = BARGUNA_UPAZILAS.find(u => u.id === id);
    if (!found) return id;
    return lang === 'bn' ? found.nameBn : found.nameEn;
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "find-donor",
    className: "py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-semibold text-[#E53935]"
  }, lang === 'bn' ? '০১. রক্তদাতা অনুসন্ধান ডিরেক্টরি (নমুনা প্রদর্শনী)' : '01. Blood Donor Search Directory (Demonstration)'), /*#__PURE__*/React.createElement("h2", {
    className: "rb-section-heading mt-1 text-balance"
  }, lang === 'bn' ? 'বরগুনা জেলার উপজেলাভিত্তিক রক্তদাতা খুঁজুন' : 'Find Blood Donors Across Barguna Upazilas'), /*#__PURE__*/React.createElement("p", {
    className: "rb-body-text mt-2.5 max-w-2xl"
  }, lang === 'bn' ? 'জরুরি মুহূর্তে রোগীর রক্তের গ্রুপ ও অবস্থান অনুযায়ী নিকটবর্তী প্রস্তুত রক্তদাতা খুঁজে নিন। এখানে প্রদর্শিত প্রোফাইলগুলো প্ল্যাটফর্মের কার্যপ্রণালী প্রদর্শনের জন্য নমুনা হিসেবে যুক্ত করা হয়েছে এবং রক্তদাতাদের ব্যক্তিগত ফোন নম্বর গোপনীয়তা সুরক্ষার আওতায় রাখা হয়েছে।' : 'All donor profiles displayed below are clearly labeled demonstration records created to preview RoktoBondhon search and matching workflows.')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 rb-label-text shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-[#1E293B]"
  }, lang === 'bn' ? `প্রদর্শিত ফলাফল: ${toBnDigits(filteredDonors.length)}টি নমুনা প্রোফাইল` : `Showing: ${filteredDonors.length} demo profile(s)`), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "·"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleResetFilters,
    className: "rb-btn-transition inline-flex items-center gap-1 text-[#B71C1C] hover:text-[#E53935] font-semibold underline underline-offset-4 cursor-pointer whitespace-nowrap"
  }, /*#__PURE__*/React.createElement(RotateCcw, {
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'সকল ফিল্টার মুছুন' : 'Reset Filters')))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 mb-8 space-y-5 shadow-2xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-2 mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rb-support-text font-semibold text-[#1E293B] flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Filter, {
    className: "w-3.5 h-3.5 text-[#E53935]"
  }), lang === 'bn' ? 'রক্তের গ্রুপ অনুযায়ী নির্বাচন করুন:' : 'Filter by Blood Group:'), selectedBloodGroup !== 'ALL' && /*#__PURE__*/React.createElement("span", {
    className: "rb-label-text text-[#475569] font-medium"
  }, lang === 'bn' ? `${selectedBloodGroup} গ্রুপের রোগী রক্ত নিতে পারবেন: ${BLOOD_COMPATIBILITY_MAP[selectedBloodGroup].canReceiveFrom.join(', ')}` : `${selectedBloodGroup} recipient can receive from: ${BLOOD_COMPATIBILITY_MAP[selectedBloodGroup].canReceiveFrom.join(', ')}`)), /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": lang === 'bn' ? 'রক্তের গ্রুপ ফিল্টার' : 'Blood Group Filter',
    className: "flex flex-wrap items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onChangeBloodGroup('ALL'),
    className: `rb-btn-transition rb-btn-text px-4 py-2 rounded-lg border whitespace-nowrap shrink-0 cursor-pointer ${selectedBloodGroup === 'ALL' ? 'bg-[#1E293B] text-white border-[#1E293B]' : 'bg-[#F8FAFC] text-[#1E293B] border-slate-200 hover:border-slate-400'}`
  }, lang === 'bn' ? 'সকল রক্তের গ্রুপ' : 'All Groups'), ALL_BLOOD_GROUPS.map(group => {
    const active = selectedBloodGroup === group;
    return /*#__PURE__*/React.createElement("button", {
      key: group,
      type: "button",
      onClick: () => onChangeBloodGroup(group),
      className: `rb-btn-transition px-3.5 py-2 text-sm sm:text-base font-bold rounded-lg border whitespace-nowrap shrink-0 cursor-pointer font-mono-num ${active ? 'bg-[#E53935] text-white border-[#E53935] shadow-2xs' : 'bg-[#F8FAFC] text-[#1E293B] border-slate-200 hover:border-[#E53935]'}`
    }, group);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-12 gap-4 pt-4 border-t border-slate-100 items-end"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-4"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "directory-upazila",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'বরগুনা জেলার উপজেলা নির্বাচন করুন' : 'Barguna District Upazila'), /*#__PURE__*/React.createElement("select", {
    id: "directory-upazila",
    value: selectedUpazila,
    onChange: e => onChangeUpazila(e.target.value),
    className: "w-full px-3.5 py-2.5 rb-support-text bg-[#F8FAFC] border border-slate-300 rounded-lg text-[#1E293B] focus:outline-none focus:border-[#E53935]"
  }, /*#__PURE__*/React.createElement("option", {
    value: "ALL"
  }, lang === 'bn' ? 'সকল উপজেলা (৬টি উপজেলা)' : 'All Upazilas (6 Upazilas)'), BARGUNA_UPAZILAS.map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.id
  }, lang === 'bn' ? u.nameBn : u.nameEn)))), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-4"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "directory-search",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'এলাকা, কোড বা নাম দিয়ে খুঁজুন' : 'Search by Location, Code, or Name'), /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Search, {
    className: "w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
  }), /*#__PURE__*/React.createElement("input", {
    id: "directory-search",
    type: "text",
    value: searchQuery,
    onChange: e => setSearchQuery(e.target.value),
    placeholder: lang === 'bn' ? 'যেমন: কলেজ রোড, পাথরঘাটা, RB-BRG...' : 'e.g. College Road, Patharghata, RB-BRG...',
    className: "w-full pl-9 pr-3.5 py-2.5 rb-support-text bg-[#F8FAFC] border border-slate-300 rounded-lg text-[#1E293B] focus:outline-none focus:border-[#E53935]"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "inline-flex items-center gap-2 rb-label-text font-semibold text-[#1E293B] cursor-pointer select-none"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: onlyAvailable,
    onChange: e => setOnlyAvailable(e.target.checked),
    className: "w-4 h-4 accent-[#E53935] rounded"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'শুধুমাত্র রক্তদানে প্রস্তুত (৯০+ দিন)' : 'Available Now Only (90+ Days)')), /*#__PURE__*/React.createElement("label", {
    className: "inline-flex items-center gap-2 rb-label-text font-semibold text-[#1E293B] cursor-pointer select-none"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: includeCompatible,
    disabled: selectedBloodGroup === 'ALL',
    onChange: e => setIncludeCompatible(e.target.checked),
    className: "w-4 h-4 accent-[#E53935] rounded disabled:opacity-40"
  }), /*#__PURE__*/React.createElement("span", {
    className: selectedBloodGroup === 'ALL' ? 'text-[#64748B]' : ''
  }, lang === 'bn' ? 'সামঞ্জস্যপূর্ণ বিকল্প গ্রুপসহ' : 'Include Compatible Groups'))))), filteredDonors.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-slate-200 p-10 text-center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "rb-card-heading font-bold text-[#1E293B]"
  }, lang === 'bn' ? 'নির্বাচিত শর্তে কোনো নমুনা রক্তদাতা প্রোফাইল পাওয়া যায়নি।' : 'No demonstration donors match the selected filters.'), /*#__PURE__*/React.createElement("p", {
    className: "rb-body-text mt-1.5"
  }, lang === 'bn' ? '“সামঞ্জস্যপূর্ণ বিকল্প গ্রুপসহ” অপশনটি চালু করুন অথবা সকল উপজেলা নির্বাচন করে পুনরায় দেখুন।' : 'Try enabling "Include Compatible Groups" or resetting the Upazila filter.'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: handleResetFilters,
    className: "rb-btn-transition rb-btn-text mt-4 px-5 py-2.5 text-white bg-[#E53935] hover:bg-[#B71C1C] rounded-xl cursor-pointer"
  }, lang === 'bn' ? 'সকল নমুনা প্রোফাইল দেখুন' : 'Show All Demo Profiles')) : /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
  }, filteredDonors.map(donor => {
    const isContactRequested = requestedDonorIds.includes(donor.id);
    return /*#__PURE__*/React.createElement("article", {
      key: donor.id,
      className: "rb-card-hover bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between gap-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "rb-label-text text-[#64748B] font-mono-num"
    }, /*#__PURE__*/React.createElement("span", null, donor.code), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, " · "), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'নমুনা' : 'DEMO')), /*#__PURE__*/React.createElement("h3", {
      className: "rb-card-heading font-bold text-[#1E293B] mt-1"
    }, lang === 'bn' ? donor.nameBn : donor.nameEn)), /*#__PURE__*/React.createElement("div", {
      className: "w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-lg font-bold text-[#E53935] font-mono-num"
    }, donor.bloodGroup))), /*#__PURE__*/React.createElement("div", {
      className: "mt-3 flex items-center gap-1.5 rb-label-text font-semibold"
    }, donor.isAvailable ? /*#__PURE__*/React.createElement("span", {
      className: "inline-flex items-center gap-1.5 text-[#16A34A]"
    }, /*#__PURE__*/React.createElement(CheckCircle2, {
      className: "w-4 h-4 shrink-0"
    }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'রক্তদানের জন্য প্রস্তুত' : 'Ready to Donate (Available)')) : /*#__PURE__*/React.createElement("span", {
      className: "inline-flex items-center gap-1.5 text-[#F59E0B]"
    }, /*#__PURE__*/React.createElement(Clock, {
      className: "w-4 h-4 shrink-0"
    }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? `বিরতি চলমান (${toBnDigits(90 - donor.lastDonationDaysAgo)} দিন বাকি)` : `In Recovery (${90 - donor.lastDonationDaysAgo}d remaining)`))), /*#__PURE__*/React.createElement("dl", {
      className: "mt-4 pt-3.5 border-t border-slate-100 space-y-2 rb-label-text text-[#475569]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-2"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "text-[#64748B]"
    }, lang === 'bn' ? 'উপজেলা:' : 'Upazila:'), /*#__PURE__*/React.createElement("dd", {
      className: "font-semibold text-[#1E293B] text-right"
    }, getUpazilaName(donor.upazilaId))), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-2"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "text-[#64748B]"
    }, lang === 'bn' ? 'এলাকা:' : 'Location:'), /*#__PURE__*/React.createElement("dd", {
      className: "text-right font-medium text-[#475569]"
    }, lang === 'bn' ? donor.locationBn : donor.locationEn)), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-2"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "text-[#64748B]"
    }, lang === 'bn' ? 'সর্বশেষ রক্তদান:' : 'Last Donation:'), /*#__PURE__*/React.createElement("dd", {
      className: "text-right font-medium text-[#475569]"
    }, lang === 'bn' ? `${toBnDigits(donor.lastDonationDaysAgo)} দিন আগে · মোট ${toBnDigits(donor.totalDonations)} বার` : `${donor.lastDonationDaysAgo}d ago · ${donor.totalDonations} times`)), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-2"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "text-[#64748B]"
    }, lang === 'bn' ? 'গোপনীয় নম্বর:' : 'Privacy Phone:'), /*#__PURE__*/React.createElement("dd", {
      className: "font-mono-num text-[#1E293B] font-medium text-right"
    }, donor.maskedPhone)), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between gap-2"
    }, /*#__PURE__*/React.createElement("dt", {
      className: "text-[#64748B]"
    }, lang === 'bn' ? 'সমন্বয়ক ইউনিট:' : 'Verified By:'), /*#__PURE__*/React.createElement("dd", {
      className: "text-right text-[#475569]"
    }, lang === 'bn' ? donor.verifiedByOrgBn : donor.verifiedByOrgEn)))), /*#__PURE__*/React.createElement("div", {
      className: "mt-5 pt-3.5 border-t border-slate-100"
    }, isContactRequested ? /*#__PURE__*/React.createElement("div", {
      className: "p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 rb-label-text text-[#475569]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between gap-2"
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-semibold text-[#16A34A]"
    }, lang === 'bn' ? 'যোগাযোগের অনুরোধ নথিভুক্ত হয়েছে' : 'Demo Contact Request Logged'), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggleContactRequest(donor.id),
      className: "text-xs font-semibold text-[#64748B] hover:text-[#1E293B] underline cursor-pointer shrink-0"
    }, lang === 'bn' ? 'বাতিল' : 'Undo')), /*#__PURE__*/React.createElement("p", {
      className: "text-[#475569] mt-1"
    }, lang === 'bn' ? 'স্বেচ্ছাসেবক যাচাই ও রক্তদাতার সম্মতির পর নিরাপদ কলব্যাকের মাধ্যমে যোগাযোগ সম্পন্ন হবে।' : 'Verified volunteer review and donor consent mediation will connect you safely.')) : /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggleContactRequest(donor.id),
      className: "rb-btn-transition rb-btn-text w-full py-2.5 px-4 text-[#B71C1C] bg-red-50 hover:bg-[#E53935] hover:text-white rounded-xl flex items-center justify-center gap-2 cursor-pointer"
    }, /*#__PURE__*/React.createElement(PhoneCall, {
      className: "w-4 h-4 shrink-0"
    }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'যোগাযোগ করুন (নমুনা)' : 'Request Donor Contact (Demo)'))));
  }))));
};

  Object.assign(window.RB, { FindDonorSection });
})();

// --- Source: src/components/EmergencyRequestSection.tsx ---
(function () {
const { BARGUNA_UPAZILAS } = window.RB;
const { ALL_BLOOD_GROUPS, BLOOD_COMPATIBILITY_MAP, validateEmergencyRequest, maskBangladeshPhone, toBnDigits } = window.RB;
const { AlertTriangle, Zap, PlusCircle, CheckCircle2, Hospital } = window.LucideIcons;
const EmergencyRequestSection = ({
  lang,
  requests,
  onAddRequest,
  onSelectGroupForSearch
}) => {
  const [patientName, setPatientName] = React.useState('');
  const [bloodGroup, setBloodGroup] = React.useState('O+');
  const [bagsNeeded, setBagsNeeded] = React.useState(1);
  const [upazilaId, setUpazilaId] = React.useState('barguna-sadar');
  const [hospitalName, setHospitalName] = React.useState('বরগুনা ২৫০ শয্যা জেনারেল হাসপাতাল');
  const [urgency, setUrgency] = React.useState('critical');
  const [reason, setReason] = React.useState('');
  const [contactPhone, setContactPhone] = React.useState('');
  const [formError, setFormError] = React.useState(null);
  const [formSuccess, setFormSuccess] = React.useState(null);

  // Low-latency AI response state (gemini-3.1-flash-lite)
  const [fastTriageLoading, setFastTriageLoading] = React.useState(false);
  const [fastTriageOutput, setFastTriageOutput] = React.useState(null);
  const [fastTriageLatencyMs, setFastTriageLatencyMs] = React.useState(null);
  const handleUpazilaChange = newUpazila => {
    setUpazilaId(newUpazila);
    const info = BARGUNA_UPAZILAS.find(u => u.id === newUpazila);
    if (info) {
      setHospitalName(lang === 'bn' ? info.primaryHospitalBn : info.primaryHospitalEn);
    }
  };
  const triggerFastAiTriage = async (targetGroup, targetUpazila, targetBags, targetCondition) => {
    if (fastTriageLoading) return;
    setFastTriageLoading(true);
    const startTime = performance.now();
    try {
      const uInfo = BARGUNA_UPAZILAS.find(u => u.id === targetUpazila);
      const response = await fetch('/api/ai/fast-triage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bloodGroup: targetGroup,
          upazila: lang === 'bn' ? uInfo?.nameBn : uInfo?.nameEn,
          bags: targetBags,
          condition: targetCondition || (lang === 'bn' ? 'জরুরি রক্তের প্রয়োজন' : 'Urgent transfusion'),
          lang
        })
      });
      const data = await response.json();
      const elapsed = Math.round(performance.now() - startTime);
      setFastTriageLatencyMs(elapsed);
      if (data.guidance) {
        setFastTriageOutput(data.guidance);
      } else if (data.fallbackGuidance) {
        setFastTriageOutput(data.fallbackGuidance);
      } else {
        setFastTriageOutput(lang === 'bn' ? `গ্রহণযোগ্য গ্রুপ: ${BLOOD_COMPATIBILITY_MAP[targetGroup].canReceiveFrom.join(', ')}। দ্রুত হাসপাতালের ব্লাড ব্যাংকে ক্রস-ম্যাচিং সম্পন্ন করুন।` : `Compatible groups: ${BLOOD_COMPATIBILITY_MAP[targetGroup].canReceiveFrom.join(', ')}. Complete cross-matching at the hospital lab prior to transfusion.`);
      }
    } catch {
      const elapsed = Math.round(performance.now() - startTime);
      setFastTriageLatencyMs(elapsed);
      setFastTriageOutput(lang === 'bn' ? `গ্রহণযোগ্য গ্রুপ: ${BLOOD_COMPATIBILITY_MAP[targetGroup].canReceiveFrom.join(', ')}। দ্রুত হাসপাতালের ব্লাড ব্যাংকে ক্রস-ম্যাচিং সম্পন্ন করুন।` : `Compatible groups: ${BLOOD_COMPATIBILITY_MAP[targetGroup].canReceiveFrom.join(', ')}. Complete cross-matching at the hospital lab prior to transfusion.`);
    } finally {
      setFastTriageLoading(false);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);
    const validation = validateEmergencyRequest({
      patientName,
      bloodGroup,
      bagsNeeded,
      upazilaId,
      hospitalName,
      contactPhone
    });
    if (!validation.valid) {
      setFormError(lang === 'bn' ? validation.errorBn : validation.errorEn);
      return;
    }
    const newReq = {
      id: `req-${Date.now()}`,
      patientName: patientName.trim(),
      bloodGroup,
      bagsNeeded,
      upazilaId,
      hospitalName: hospitalName.trim(),
      urgency,
      reasonBn: reason.trim() || 'জরুরি চিকিৎসার জন্য রক্তের প্রয়োজন (নমুনা অনুরোধ)',
      reasonEn: reason.trim() || 'Urgent medical requirement (User submitted demo)',
      contactPhone: maskBangladeshPhone(contactPhone.trim(), lang),
      postedTimeBn: 'এইমাত্র যুক্ত (নমুনা প্রিভিউ)',
      postedTimeEn: 'Just posted (Session Preview)',
      isDemoRecord: true
    };
    onAddRequest(newReq);
    setFormSuccess(lang === 'bn' ? 'আপনার জরুরি রক্তের অনুরোধটি সফলভাবে নমুনা বোর্ডে যুক্ত হয়েছে এবং নিচে তাৎক্ষণিক পরামর্শ তৈরি হচ্ছে।' : 'Your emergency blood request has been added to the demonstration board and instant AI triage guidance is being generated.');
    triggerFastAiTriage(bloodGroup, upazilaId, bagsNeeded, reason);
    setPatientName('');
    setReason('');
    setContactPhone('');
  };
  const getUpazilaLabel = id => {
    const found = BARGUNA_UPAZILAS.find(u => u.id === id);
    if (!found) return id;
    return lang === 'bn' ? found.nameBn : found.nameEn;
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "emergency-request",
    className: "py-14 lg:py-20 bg-white border-b border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-semibold text-[#E53935]"
  }, lang === 'bn' ? '০২. জরুরি রক্তের অনুরোধ ও তাৎক্ষণিক স্বাস্থ্য পরামর্শ' : '02. Emergency Blood Requests & Low-Latency AI Triage'), /*#__PURE__*/React.createElement("h2", {
    className: "rb-section-heading mt-1 text-balance"
  }, lang === 'bn' ? 'মুমূর্ষু রোগীর জন্য দ্রুত রক্তের অনুরোধ ও রক্তদাতা সমন্বয়' : 'Rapid Emergency Blood Request & Donor Coordination'), /*#__PURE__*/React.createElement("p", {
    className: "rb-body-text mt-2.5 max-w-3xl"
  }, lang === 'bn' ? 'হাসপাতালে ভর্তি রোগীর জরুরি রক্তের প্রয়োজন হলে নিচের ফর্মটি পূরণ করে অনুরোধ জমা দিন অথবা বিকল্প রক্তের গ্রুপ ও করণীয় জানতে তাৎক্ষণিক পরামর্শ দেখুন।' : 'Submit an urgent blood request for Barguna District hospitals or trigger low-latency emergency triage powered by gemini-3.1-flash-lite.')), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between border-b border-slate-200 pb-3.5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "rb-subsection-heading font-bold text-[#1E293B]"
  }, lang === 'bn' ? 'চলমান জরুরি রক্তের অনুরোধ বোর্ড (নমুনা)' : 'Active Emergency Blood Requests Board (Demo)'), /*#__PURE__*/React.createElement("span", {
    className: "rb-label-text font-semibold text-[#64748B]"
  }, lang === 'bn' ? `মোট ${toBnDigits(requests.length)}টি অনুরোধ` : `${requests.length} Active Request(s)`)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, requests.map(req => /*#__PURE__*/React.createElement("article", {
    key: req.id,
    className: "rb-card-hover p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-2xl bg-[#E53935] text-white flex flex-col items-center justify-center shrink-0 shadow-2xs px-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rb-card-heading font-bold font-mono-num text-white"
  }, req.bloodGroup), /*#__PURE__*/React.createElement("span", {
    className: "rb-label-text font-medium tabular-nums text-white"
  }, lang === 'bn' ? `${toBnDigits(req.bagsNeeded)} ব্যাগ` : `${req.bagsNeeded} Bag(s)`)), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2 rb-label-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#B71C1C] inline-flex items-center gap-1"
  }, /*#__PURE__*/React.createElement(AlertTriangle, {
    className: "w-3.5 h-3.5"
  }), req.urgency === 'critical' ? lang === 'bn' ? 'অতি জরুরি' : 'Critical Emergency' : lang === 'bn' ? 'জরুরি প্রয়োজন' : 'Urgent Need'), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "·"), /*#__PURE__*/React.createElement("span", {
    className: "text-[#1E293B] font-semibold"
  }, getUpazilaLabel(req.upazilaId)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "·"), /*#__PURE__*/React.createElement("span", {
    className: "text-[#64748B]"
  }, lang === 'bn' ? req.postedTimeBn : req.postedTimeEn)), /*#__PURE__*/React.createElement("h4", {
    className: "rb-card-heading font-bold text-[#1E293B]"
  }, req.patientName), /*#__PURE__*/React.createElement("p", {
    className: "rb-support-text text-[#475569] flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Hospital, {
    className: "w-4 h-4 text-[#64748B] shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, req.hospitalName)), /*#__PURE__*/React.createElement("p", {
    className: "rb-label-text text-[#475569]"
  }, lang === 'bn' ? req.reasonBn : req.reasonEn, " ·", ' ', /*#__PURE__*/React.createElement("span", {
    className: "font-mono-num font-semibold text-[#1E293B]"
  }, req.contactPhone)))), /*#__PURE__*/React.createElement("div", {
    className: "flex sm:flex-col gap-2.5 shrink-0"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      onSelectGroupForSearch(req.bloodGroup, req.upazilaId);
      const el = document.getElementById('find-donor');
      if (el) el.scrollIntoView({
        behavior: 'smooth'
      });
    },
    className: "rb-btn-transition rb-btn-text px-4 py-2.5 text-white bg-[#1E293B] hover:bg-slate-800 rounded-xl whitespace-nowrap cursor-pointer"
  }, lang === 'bn' ? 'বিস্তারিত দেখুন' : 'Find Matching Donors'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => triggerFastAiTriage(req.bloodGroup, req.upazilaId, req.bagsNeeded, lang === 'bn' ? req.reasonBn : req.reasonEn),
    className: "rb-btn-transition rb-label-text font-semibold px-3.5 py-2 text-[#B71C1C] bg-white hover:bg-red-50 border border-slate-200 rounded-xl inline-flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
  }, /*#__PURE__*/React.createElement(Zap, {
    className: "w-3.5 h-3.5 text-[#E53935]"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'তাৎক্ষণিক পরামর্শ' : 'Instant AI Triage')))))), /*#__PURE__*/React.createElement("div", {
    className: "p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-2 mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Zap, {
    className: "w-4 h-4 text-[#E53935]"
  }), /*#__PURE__*/React.createElement("h4", {
    className: "rb-support-text font-bold text-[#1E293B]"
  }, lang === 'bn' ? 'তাৎক্ষণিক জরুরি রক্ত সহায়তা নির্দেশিকা (এআই ট্রায়াজ)' : 'Low-Latency Emergency Blood Triage')), fastTriageLatencyMs !== null && /*#__PURE__*/React.createElement("span", {
    className: "rb-label-text text-[#64748B]"
  }, lang === 'bn' ? `${toBnDigits(fastTriageLatencyMs)} মি.সে. · তাৎক্ষণিক নির্দেশনা` : `${fastTriageLatencyMs} ms · Instant Triage`)), fastTriageLoading ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 py-2",
    role: "status",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("p", {
    className: "rb-label-text font-medium text-[#475569]"
  }, lang === 'bn' ? 'তাৎক্ষণিক জরুরি নির্দেশনা প্রস্তুত হচ্ছে...' : 'Generating low-latency emergency response via gemini-3.1-flash-lite...'), /*#__PURE__*/React.createElement("div", {
    className: "h-3 w-3/4 bg-slate-200/80 rounded animate-pulse"
  }), /*#__PURE__*/React.createElement("div", {
    className: "h-3 w-1/2 bg-slate-200/80 rounded animate-pulse"
  })) : fastTriageOutput ? /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text text-[#1E293B] whitespace-pre-line bg-white p-4 rounded-xl border border-slate-200 mt-2"
  }, fastTriageOutput) : /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "rb-support-text text-[#475569]"
  }, lang === 'bn' ? 'উপরের যেকোনো অনুরোধের “তাৎক্ষণিক পরামর্শ” বাটনে ক্লিক করে জরুরি মুহূর্তে করণীয় ও বিকল্প রক্তের গ্রুপ জেনে নিন।' : 'Click "Instant AI Triage" on any request above or test a fast response below.'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => triggerFastAiTriage(bloodGroup, upazilaId, bagsNeeded, lang === 'bn' ? 'জরুরি রক্ত সঞ্চালন' : 'Emergency transfusion'),
    className: "rb-btn-transition rb-btn-text px-4 py-2.5 text-white bg-[#E53935] hover:bg-[#B71C1C] rounded-xl whitespace-nowrap shrink-0 cursor-pointer"
  }, lang === 'bn' ? 'দ্রুত পরামর্শ দেখুন' : 'Get Instant Triage Advice')))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 pb-4 border-b border-slate-200"
  }, /*#__PURE__*/React.createElement(PlusCircle, {
    className: "w-5 h-5 text-[#E53935]"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "rb-subsection-heading font-bold text-[#1E293B]"
  }, lang === 'bn' ? 'নতুন জরুরি রক্তের অনুরোধ পাঠান' : 'Post a New Emergency Blood Request')), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "mt-5 space-y-4",
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "req-patient-name",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'রোগীর নাম ও সংক্ষিপ্ত বিবরণ *' : 'Patient Name / Description *'), /*#__PURE__*/React.createElement("input", {
    id: "req-patient-name",
    type: "text",
    value: patientName,
    onChange: e => setPatientName(e.target.value),
    placeholder: lang === 'bn' ? 'যেমন: আব্দুল করিম (জরুরি অস্ত্রোপচার / থ্যালাসেমিয়া)' : 'e.g. Abdul Karim (Surgery / Thalassemia)',
    className: "w-full px-3.5 py-2.5 rb-support-text bg-white border border-slate-300 rounded-lg text-[#1E293B] focus:outline-none focus:border-[#E53935]"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "req-blood-group",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'রক্তের গ্রুপ *' : 'Blood Group *'), /*#__PURE__*/React.createElement("select", {
    id: "req-blood-group",
    value: bloodGroup,
    onChange: e => setBloodGroup(e.target.value),
    className: "w-full px-3 py-2.5 rb-support-text bg-white border border-slate-300 rounded-lg text-[#1E293B] font-bold focus:outline-none focus:border-[#E53935]"
  }, ALL_BLOOD_GROUPS.map(g => /*#__PURE__*/React.createElement("option", {
    key: g,
    value: g
  }, g)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "req-bags",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'রক্তের পরিমাণ (ব্যাগ) *' : 'Bags Needed *'), /*#__PURE__*/React.createElement("input", {
    id: "req-bags",
    type: "number",
    min: 1,
    max: 10,
    value: bagsNeeded,
    onChange: e => setBagsNeeded(Number(e.target.value)),
    className: "w-full px-3 py-2.5 rb-support-text bg-white border border-slate-300 rounded-lg text-[#1E293B] font-mono-num focus:outline-none focus:border-[#E53935]"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "req-upazila",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'উপজেলা (বরগুনা) *' : 'Upazila (Barguna) *'), /*#__PURE__*/React.createElement("select", {
    id: "req-upazila",
    value: upazilaId,
    onChange: e => handleUpazilaChange(e.target.value),
    className: "w-full px-3 py-2.5 rb-support-text bg-white border border-slate-300 rounded-lg text-[#1E293B] focus:outline-none focus:border-[#E53935]"
  }, BARGUNA_UPAZILAS.map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.id
  }, lang === 'bn' ? u.nameBn : u.nameEn)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "req-urgency",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'জরুরি মাত্রা' : 'Urgency Level'), /*#__PURE__*/React.createElement("select", {
    id: "req-urgency",
    value: urgency,
    onChange: e => setUrgency(e.target.value),
    className: "w-full px-3 py-2.5 rb-support-text bg-white border border-slate-300 rounded-lg text-[#1E293B] focus:outline-none focus:border-[#E53935]"
  }, /*#__PURE__*/React.createElement("option", {
    value: "critical"
  }, lang === 'bn' ? 'অতি জরুরি (আজই প্রয়োজন)' : 'Critical (Needed Today)'), /*#__PURE__*/React.createElement("option", {
    value: "urgent"
  }, lang === 'bn' ? 'জরুরি (২৪ ঘণ্টার মধ্যে)' : 'Urgent (Within 24h)'), /*#__PURE__*/React.createElement("option", {
    value: "scheduled"
  }, lang === 'bn' ? 'নির্ধারিত অস্ত্রোপচার' : 'Scheduled Procedure')))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "req-hospital",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'হাসপাতাল বা ক্লিনিকের নাম *' : 'Hospital / Clinic Name *'), /*#__PURE__*/React.createElement("input", {
    id: "req-hospital",
    type: "text",
    value: hospitalName,
    onChange: e => setHospitalName(e.target.value),
    className: "w-full px-3.5 py-2.5 rb-support-text bg-white border border-slate-300 rounded-lg text-[#1E293B] focus:outline-none focus:border-[#E53935]"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "req-phone",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'রোগীর স্বজনের মোবাইল নম্বর (১১ ডিজিট) *' : 'Attendant Mobile Number (11-digit BD) *'), /*#__PURE__*/React.createElement("input", {
    id: "req-phone",
    type: "tel",
    value: contactPhone,
    onChange: e => setContactPhone(e.target.value),
    placeholder: "01712345678",
    className: "w-full px-3.5 py-2.5 rb-support-text bg-white border border-slate-300 rounded-lg text-[#1E293B] font-mono-num focus:outline-none focus:border-[#E53935]"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "req-reason",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'রোগীর শারীরিক অবস্থা ও অতিরিক্ত তথ্য (ঐচ্ছিক)' : 'Medical Reason & Notes (Optional)'), /*#__PURE__*/React.createElement("input", {
    id: "req-reason",
    type: "text",
    value: reason,
    onChange: e => setReason(e.target.value),
    placeholder: lang === 'bn' ? 'যেমন: হিমোগ্লোবিন ৬.৫, জরুরি প্রসূতি অস্ত্রোপচার' : 'e.g. Hemoglobin 6.5 g/dL, C-section',
    className: "w-full px-3.5 py-2.5 rb-support-text bg-white border border-slate-300 rounded-lg text-[#1E293B] focus:outline-none focus:border-[#E53935]"
  })), formError && /*#__PURE__*/React.createElement("div", {
    role: "alert",
    className: "p-3.5 rounded-xl bg-red-50 border border-red-200 rb-label-text font-medium text-[#B71C1C]"
  }, formError), formSuccess && /*#__PURE__*/React.createElement("div", {
    role: "status",
    className: "p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 rb-label-text font-medium text-[#16A34A] flex items-start gap-2"
  }, /*#__PURE__*/React.createElement(CheckCircle2, {
    className: "w-4 h-4 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("span", null, formSuccess)), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "rb-btn-transition rb-btn-text w-full py-3.5 px-5 bg-[#E53935] hover:bg-[#B71C1C] text-white rounded-xl shadow-2xs cursor-pointer"
  }, lang === 'bn' ? 'অনুরোধ জমা দিন' : 'Submit Emergency Request (Demo)'))))));
};

  Object.assign(window.RB, { EmergencyRequestSection });
})();

// --- Source: src/components/BecomeDonorSection.tsx ---
(function () {
const { BARGUNA_UPAZILAS } = window.RB;
const { ALL_BLOOD_GROUPS, checkDonorEligibility, maskBangladeshPhone, validateDonorRegistration, toBnDigits } = window.RB;
const { HeartHandshake, CheckCircle2, AlertCircle, Shield } = window.LucideIcons;
const BecomeDonorSection = ({
  lang,
  onRegisterDemoDonor
}) => {
  // Interactive Eligibility Calculator State
  const [age, setAge] = React.useState(24);
  const [weightKg, setWeightKg] = React.useState(58);
  const [daysSinceLastDonation, setDaysSinceLastDonation] = React.useState(120);
  const [hasRecentIllness, setHasRecentIllness] = React.useState(false);

  // Donor Onboarding Demo Form State
  const [fullName, setFullName] = React.useState('');
  const [bloodGroup, setBloodGroup] = React.useState('O+');
  const [upazilaId, setUpazilaId] = React.useState('barguna-sadar');
  const [areaName, setAreaName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [contactMode, setContactMode] = React.useState('mediated_callback');
  const [consentPublicDirectory, setConsentPublicDirectory] = React.useState(true);
  const [consentContactWorkflow, setConsentContactWorkflow] = React.useState(true);
  const [consentVoluntaryNoPayment, setConsentVoluntaryNoPayment] = React.useState(true);
  const [submitMessage, setSubmitMessage] = React.useState(null);
  const eligibility = React.useMemo(() => checkDonorEligibility({
    age,
    weightKg,
    daysSinceLastDonation,
    hasRecentSurgeryOrIllness: hasRecentIllness
  }), [age, weightKg, daysSinceLastDonation, hasRecentIllness]);
  const handleDonorSignup = e => {
    e.preventDefault();
    setSubmitMessage(null);
    const validation = validateDonorRegistration({
      fullName,
      bloodGroup,
      upazilaId,
      areaName,
      phone,
      consentPublicDirectory,
      consentContactWorkflow,
      consentVoluntaryNoPayment
    });
    if (!validation.valid) {
      setSubmitMessage({
        type: 'error',
        text: lang === 'bn' ? validation.errorBn : validation.errorEn
      });
      return;
    }
    const cleanPhone = phone.replace(/[\s-]/g, '');
    const masked = maskBangladeshPhone(cleanPhone, lang);
    const newDemoDonor = {
      id: `demo-donor-${Date.now()}`,
      code: `RB-NEW-${Math.floor(100 + Math.random() * 899)}`,
      nameBn: fullName.trim(),
      nameEn: fullName.trim(),
      bloodGroup,
      upazilaId,
      locationBn: areaName.trim(),
      locationEn: areaName.trim(),
      isAvailable: eligibility.eligible,
      lastDonationDaysAgo: daysSinceLastDonation,
      totalDonations: 1,
      maskedPhone: masked,
      verifiedByOrgBn: contactMode === 'mediated_callback' ? 'পদ্ধতি ক: সমন্বয়কারী কলব্যাক সুরক্ষিত (নমুনা)' : 'পদ্ধতি খ: ২৪ ঘণ্টা অনুমোদনভিত্তিক (নমুনা)',
      verifiedByOrgEn: contactMode === 'mediated_callback' ? 'Mode A: Mediated Callback Protected (Sample)' : 'Mode B: 24h Approval-Based Share (Sample)',
      isDemoRecord: true
    };
    onRegisterDemoDonor(newDemoDonor);
    setSubmitMessage({
      type: 'success',
      text: lang === 'bn' ? 'অভিনন্দন! আপনার নমুনা রক্তদাতা প্রোফাইলটি (গোপনীয় নম্বর ও ৩টি সম্মতি সুরক্ষিত রেখে) বরগুনা জেলা ডিরেক্টরিতে যুক্ত হয়েছে। উপরে “রক্তদাতা খুঁজুন” অংশে এটি দেখতে পাবেন।' : 'Success! Your demonstration donor profile (with masked phone privacy and 3 verified consents) has been added to the Barguna District directory above.'
    });
    setFullName('');
    setAreaName('');
    setPhone('');
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "become-donor",
    className: "py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-semibold text-[#E53935]"
  }, lang === 'bn' ? '০৩. স্বেচ্ছায় রক্তদাতা নিবন্ধন ও যোগ্যতা যাচাই' : '03. Voluntary Donor Onboarding & Clinical Eligibility Check'), /*#__PURE__*/React.createElement("h2", {
    className: "rb-section-heading mt-1 text-balance"
  }, lang === 'bn' ? 'রক্তবন্ধন নেটওয়ার্কে স্বেচ্ছাসেবী রক্তদাতা হিসেবে যুক্ত হোন' : 'Join the RoktoBondhon Voluntary Blood Donor Network'), /*#__PURE__*/React.createElement("p", {
    className: "rb-body-text mt-2.5 max-w-3xl"
  }, lang === 'bn' ? 'রক্তদান এক মহৎ মানবিক দায়িত্ব। প্রথমে নিচের ক্যালকুলেটরে আপনার বয়স, ওজন ও সর্বশেষ রক্তদানের বিরতি যাচাই করুন এবং গোপনীয়তা-সুরক্ষিত নিবন্ধন ফর্মটি পূরণ করুন।' : 'Verify your clinical donation readiness using our 90-day interval calculator and preview the donor registration workflow.')), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-2xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "rb-subsection-heading font-bold text-[#1E293B] pb-4 border-b border-slate-200"
  }, lang === 'bn' ? 'রক্তদানের প্রাথমিক যোগ্যতা যাচাই' : 'Clinical Blood Donation Eligibility Calculator'), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 space-y-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "elig-age"
  }, lang === 'bn' ? 'আপনার বয়স (১৮–৬০ বছর)' : 'Your Age (18–60 years)'), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#E53935] tabular-nums"
  }, lang === 'bn' ? `${toBnDigits(age)} বছর` : `${age} yrs`)), /*#__PURE__*/React.createElement("input", {
    id: "elig-age",
    type: "range",
    min: 15,
    max: 68,
    value: age,
    onChange: e => setAge(Number(e.target.value)),
    className: "w-full accent-[#E53935] cursor-pointer"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "elig-weight"
  }, lang === 'bn' ? 'শারীরিক ওজন (কমপক্ষে ৪৮ কেজি)' : 'Body Weight (Min 48 kg)'), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#E53935] tabular-nums"
  }, lang === 'bn' ? `${toBnDigits(weightKg)} কেজি` : `${weightKg} kg`)), /*#__PURE__*/React.createElement("input", {
    id: "elig-weight",
    type: "range",
    min: 38,
    max: 110,
    value: weightKg,
    onChange: e => setWeightKg(Number(e.target.value)),
    className: "w-full accent-[#E53935] cursor-pointer"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "elig-days"
  }, lang === 'bn' ? 'সর্বশেষ রক্তদানের পর অতিবাহিত দিন (কমপক্ষে ৯০ দিন)' : 'Days Since Last Donation (Min 90 days)'), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-[#E53935] tabular-nums"
  }, lang === 'bn' ? `${toBnDigits(daysSinceLastDonation)} দিন` : `${daysSinceLastDonation} days`)), /*#__PURE__*/React.createElement("input", {
    id: "elig-days",
    type: "range",
    min: 0,
    max: 240,
    step: 5,
    value: daysSinceLastDonation,
    onChange: e => setDaysSinceLastDonation(Number(e.target.value)),
    className: "w-full accent-[#E53935] cursor-pointer"
  })), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2.5 rb-label-text font-semibold text-[#1E293B] pt-2 cursor-pointer select-none"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: hasRecentIllness,
    onChange: e => setHasRecentIllness(e.target.checked),
    className: "w-4 h-4 accent-[#E53935] rounded"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'গত ৬ মাসে বড় কোনো অস্ত্রোপচার বা তীব্র অসুস্থতা হয়েছে' : 'Had major surgery or acute infection in the past 6 months')))), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 pt-5 border-t border-slate-200"
  }, eligibility.eligible ? /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-bold text-[#16A34A] flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(CheckCircle2, {
    className: "w-4 h-4 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'আপনি বর্তমানে রক্তদানের জন্য প্রাথমিকভাবে উপযুক্ত!' : 'You meet the primary clinical criteria to donate blood!')), /*#__PURE__*/React.createElement("p", {
    className: "rb-label-text text-[#475569]"
  }, lang === 'bn' ? 'রক্তদানের পূর্বে হাসপাতালে রক্তচাপ, নাড়ির গতি ও হিমোগ্লোবিন মাত্রা (কমপক্ষে ১২.৫ g/dL) পরীক্ষা করে নিন।' : 'A standard pre-donation check (blood pressure, pulse, hemoglobin ≥ 12.5 g/dL) will be conducted at the hospital.')) : /*#__PURE__*/React.createElement("div", {
    className: "p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-bold text-[#B71C1C] flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(AlertCircle, {
    className: "w-4 h-4 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'বর্তমানে রক্তদান সাময়িকভাবে স্থগিত রাখা প্রয়োজন:' : 'Temporary Deferral Recommended:')), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc list-inside rb-label-text text-[#475569] space-y-1"
  }, (lang === 'bn' ? eligibility.reasonsBn : eligibility.reasonsEn).map((r, idx) => /*#__PURE__*/React.createElement("li", {
    key: idx
  }, r)))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-2 pb-4 border-b border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(HeartHandshake, {
    className: "w-5 h-5 text-[#E53935]"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "rb-subsection-heading font-bold text-[#1E293B]"
  }, lang === 'bn' ? 'স্বেচ্ছাসেবী রক্তদাতা নিবন্ধন ফর্ম (নমুনা)' : 'Voluntary Donor Onboarding Form (Demo Preview)')), /*#__PURE__*/React.createElement("span", {
    className: "rb-label-text font-semibold text-[#64748B]"
  }, lang === 'bn' ? 'বরগুনা জেলা' : 'Barguna District')), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleDonorSignup,
    className: "mt-5 space-y-4",
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "donor-name",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'রক্তদাতার পূর্ণ নাম *' : 'Donor Full Name *'), /*#__PURE__*/React.createElement("input", {
    id: "donor-name",
    type: "text",
    value: fullName,
    onChange: e => setFullName(e.target.value),
    placeholder: lang === 'bn' ? 'যেমন: মাহমুদুল হাসান' : 'e.g. Mahmudul Hasan (Demo)',
    className: "w-full px-3.5 py-2.5 rb-support-text bg-[#F8FAFC] border border-slate-300 rounded-lg text-[#1E293B] focus:outline-none focus:border-[#E53935]"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "donor-group",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'রক্তের গ্রুপ *' : 'Blood Group *'), /*#__PURE__*/React.createElement("select", {
    id: "donor-group",
    value: bloodGroup,
    onChange: e => setBloodGroup(e.target.value),
    className: "w-full px-3.5 py-2.5 rb-support-text bg-[#F8FAFC] border border-slate-300 rounded-lg text-[#1E293B] font-bold focus:outline-none focus:border-[#E53935]"
  }, ALL_BLOOD_GROUPS.map(g => /*#__PURE__*/React.createElement("option", {
    key: g,
    value: g
  }, g))))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "donor-upazila",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'উপজেলা নির্বাচন করুন (বরগুনা) *' : 'Select Upazila (Barguna) *'), /*#__PURE__*/React.createElement("select", {
    id: "donor-upazila",
    value: upazilaId,
    onChange: e => setUpazilaId(e.target.value),
    className: "w-full px-3.5 py-2.5 rb-support-text bg-[#F8FAFC] border border-slate-300 rounded-lg text-[#1E293B] focus:outline-none focus:border-[#E53935]"
  }, BARGUNA_UPAZILAS.map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.id
  }, lang === 'bn' ? u.nameBn : u.nameEn)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "donor-area",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'ইউনিয়ন / পৌরসভা ও এলাকার নাম *' : 'Union / Municipality & Locality *'), /*#__PURE__*/React.createElement("input", {
    id: "donor-area",
    type: "text",
    value: areaName,
    onChange: e => setAreaName(e.target.value),
    placeholder: lang === 'bn' ? 'যেমন: বরগুনা পৌরসভা, ৭ নং ওয়ার্ড' : 'e.g. Ward 7, Barguna Municipality',
    className: "w-full px-3.5 py-2.5 rb-support-text bg-[#F8FAFC] border border-slate-300 rounded-lg text-[#1E293B] focus:outline-none focus:border-[#E53935]"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "donor-phone",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'মোবাইল নম্বর (গোপনীয়তা সুরক্ষার জন্য সংরক্ষিত থাকবে) *' : 'Mobile Number (Automatically masked for privacy) *'), /*#__PURE__*/React.createElement("input", {
    id: "donor-phone",
    type: "tel",
    value: phone,
    onChange: e => setPhone(e.target.value),
    placeholder: "01711223344",
    className: "w-full px-3.5 py-2.5 rb-support-text bg-[#F8FAFC] border border-slate-300 rounded-lg text-[#1E293B] font-mono-num focus:outline-none focus:border-[#E53935]"
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-2 pb-2.5 border-t-0 border-b border-slate-200/80"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 rb-label-text font-bold text-[#1E293B]"
  }, /*#__PURE__*/React.createElement(Shield, {
    className: "w-4 h-4 text-[#16A34A] shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'যোগাযোগের মাধ্যম ও ৩টি আবশ্যিক সম্মতি' : 'Contact Mediation Mode & 3 Mandatory Consents (v1.0)')), /*#__PURE__*/React.createElement("select", {
    "aria-label": lang === 'bn' ? 'যোগাযোগের মাধ্যম নির্বাচন' : 'Contact Preference Mode',
    value: contactMode,
    onChange: e => setContactMode(e.target.value),
    className: "px-3 py-1.5 rb-label-text font-semibold bg-white border border-slate-300 rounded-lg text-[#1E293B]"
  }, /*#__PURE__*/React.createElement("option", {
    value: "mediated_callback"
  }, lang === 'bn' ? 'পদ্ধতি ক: সমন্বয়কারী কলব্যাক (ডিফল্ট)' : 'Mode A: Mediated Callback (Default)'), /*#__PURE__*/React.createElement("option", {
    value: "direct_on_approval"
  }, lang === 'bn' ? 'পদ্ধতি খ: অনুমোদন সাপেক্ষে ২৪ ঘণ্টা যোগাযোগ' : 'Mode B: 24h Direct Share on Approval'))), /*#__PURE__*/React.createElement("label", {
    className: "flex items-start gap-2.5 rb-label-text text-[#475569] cursor-pointer"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: consentPublicDirectory,
    onChange: e => setConsentPublicDirectory(e.target.checked),
    className: "mt-1 accent-[#E53935]"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? '১. ডিরেক্টরি প্রকাশনা সম্মতি: আমার রক্তের গ্রুপ, উপজেলা এবং আংশিক গোপন করা ফোন নম্বর ডিরেক্টরিতে প্রদর্শনে সম্মতি দিচ্ছি।' : '1. Public Directory Consent: Display my blood group, Upazila, and masked phone in the directory.')), /*#__PURE__*/React.createElement("label", {
    className: "flex items-start gap-2.5 rb-label-text text-[#475569] cursor-pointer"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: consentContactWorkflow,
    onChange: e => setConsentContactWorkflow(e.target.checked),
    className: "mt-1 accent-[#E53935]"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? '২. গোপনীয় যোগাযোগ ও প্রত্যাহার নীতিমালা: যাচাইকৃত জরুরি অনুরোধে যোগাযোগের সম্মতি দিচ্ছি। সম্মতি প্রত্যাহার করলে ভবিষ্যতের সকল যোগাযোগ তাৎক্ষণিক বন্ধ হবে (তবে পূর্বে অনুমোদিত অবস্থায় কেউ নম্বর সংরক্ষণ করে থাকলে তা প্রযুক্তিগতভাবে মুছে ফেলা সম্ভব নয়; তাই সমন্বয়কারী কলব্যাক পদ্ধতি ডিফল্ট রাখা হয়েছে)।' : '2. Contact Mediation & Revocation Policy: I consent to verified emergency contact. Withdrawing consent immediately blocks all future reads (note: numbers already viewed/copied during a prior 24h Mode B window cannot be retroactively erased from a viewer device, which is why Mode A callback is default).')), /*#__PURE__*/React.createElement("label", {
    className: "flex items-start gap-2.5 rb-label-text text-[#475569] cursor-pointer"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: consentVoluntaryNoPayment,
    onChange: e => setConsentVoluntaryNoPayment(e.target.checked),
    className: "mt-1 accent-[#E53935]"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? '৩. শতভাগ স্বেচ্ছাসেবী ও স্বাস্থ্যবিধি অঙ্গীকার: রক্তদানের বিনিময়ে কখনো আর্থিক লেনদেন করব না এবং হাসপাতালের ল্যাবে ক্রস-ম্যাচিং ছাড়া রক্ত সঞ্চালন হবে না।' : '3. 100% Voluntary & Clinical Pledge: I will never request or accept payment for blood donation, and hospital lab cross-matching is mandatory.'))), submitMessage && /*#__PURE__*/React.createElement("div", {
    role: submitMessage.type === 'error' ? 'alert' : 'status',
    className: `p-3.5 rounded-xl rb-label-text font-medium ${submitMessage.type === 'error' ? 'bg-red-50 border border-red-200 text-[#B71C1C]' : 'bg-emerald-50 border border-emerald-200 text-[#16A34A]'}`
  }, submitMessage.text), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "rb-btn-transition rb-btn-text w-full py-3.5 px-5 bg-[#1E293B] hover:bg-slate-800 text-white rounded-xl shadow-2xs cursor-pointer"
  }, lang === 'bn' ? 'রক্তদাতা হিসেবে নিবন্ধন করুন' : 'Register as Demonstration Donor'))))));
};

  Object.assign(window.RB, { BecomeDonorSection });
})();

// --- Source: src/components/AwarenessAndWorksSection.tsx ---
(function () {
const { ALL_BLOOD_GROUPS, BLOOD_COMPATIBILITY_MAP } = window.RB;
const { Check, ArrowRight } = window.LucideIcons;
const AwarenessAndWorksSection = ({
  lang,
  onSelectBloodGroupForSearch
}) => {
  const [selectedMatrixGroup, setSelectedMatrixGroup] = React.useState('O-');
  const matrixInfo = BLOOD_COMPATIBILITY_MAP[selectedMatrixGroup];
  const howItWorksSteps = [{
    num: '০১.',
    numEn: '01.',
    titleBn: 'রক্তদাতা ও স্বেচ্ছাসেবক নিবন্ধন',
    titleEn: 'Donor & Volunteer Registration',
    descBn: 'বরগুনা জেলার ৬টি উপজেলার স্বেচ্ছাসেবী রক্তদাতাগণ তাঁদের রক্তের গ্রুপ, ইউনিয়ন ও সর্বশেষ রক্তদানের তারিখসহ নিরাপদ প্রোফাইল তৈরি করেন।',
    descEn: 'Donors across Barguna’s 6 Upazilas register with their blood group, union location, and 90-day recovery timeline.'
  }, {
    num: '০২.',
    numEn: '02.',
    titleBn: 'উপজেলা ও রক্তের গ্রুপ অনুযায়ী অনুসন্ধান',
    titleEn: 'Smart Upazila & Compatibility Matching',
    descBn: 'রোগীর রক্তের গ্রুপ ও হাসপাতালের অবস্থান অনুযায়ী নিকটবর্তী প্রস্তুত রক্তদাতা এবং সামঞ্জস্যপূর্ণ বিকল্প গ্রুপগুলো তাৎক্ষণিক খুঁজে পাওয়া যায়।',
    descEn: 'Patients or hospital coordinators filter available donors by Upazila and ABO/Rh compatibility in seconds.'
  }, {
    num: '০৩.',
    numEn: '03.',
    titleBn: 'রিকুইজিশন যাচাই ও নিরাপদ যোগাযোগ',
    titleEn: 'Requisition Verification & Privacy-Safe Contact',
    descBn: 'রক্তদাতার ব্যক্তিগত ফোন নম্বর প্রকাশ্যে না রেখে হাসপাতালের যাচাইকৃত রিকুইজিশন ও স্বেচ্ছাসেবক সমন্বয় কেন্দ্রের মাধ্যমে নিরাপদ যোগাযোগ স্থাপন করা হয়।',
    descEn: 'Donor phone numbers stay protected while verified hospital requests trigger direct coordination.'
  }, {
    num: '০৪.',
    numEn: '04.',
    titleBn: 'হাসপাতালে ক্রস-ম্যাচিং ও ৯০ দিনের বিরতি',
    titleEn: 'Hospital Cross-Matching & 90-Day Recovery Tracking',
    descBn: 'হাসপাতালের ল্যাবে রক্তের স্ক্রিনিং ও ক্রস-ম্যাচিং শেষে রক্তদান সম্পন্ন হয় এবং রক্তদাতার প্রোফাইল স্বয়ংক্রিয়ভাবে ৯০ দিনের বিশ্রামে যুক্ত হয়।',
    descEn: 'Following clinical cross-matching and transfusion, the donor profile automatically enters a 90-day rest period.'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "awareness",
    className: "py-14 lg:py-20 bg-white border-b border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-semibold text-[#E53935]"
  }, lang === 'bn' ? '০৪. রক্তদান সচেতনতা ও চিকিৎসা নির্দেশিকা' : '04. Blood Donation Awareness & Clinical Guidelines'), /*#__PURE__*/React.createElement("h2", {
    className: "rb-section-heading mt-1 text-balance"
  }, lang === 'bn' ? 'নিরাপদ রক্তদান সম্পর্কে জরুরি স্বাস্থ্য তথ্য' : 'Essential Medical Facts About Safe Blood Donation'), /*#__PURE__*/React.createElement("p", {
    className: "rb-body-text mt-2.5 max-w-3xl"
  }, lang === 'bn' ? 'সঠিক স্বাস্থ্যবিধি মেনে রক্তদান করলে রক্তদাতার শরীরের কোনো ক্ষতি হয় না; বরং এটি একজন মুমূর্ষু রোগীর জীবন বাঁচাতে অপরিহার্য ভূমিকা রাখে।' : 'Donating blood under standard clinical protocols is completely safe for healthy adults and saves lives during critical emergencies.')), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-2xs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "rb-label-text font-semibold text-[#B71C1C]"
  }, lang === 'bn' ? 'চিকিৎসা বিজ্ঞান ও মানবিক গুরুত্ব' : 'Clinical Science & Humanitarian Impact'), /*#__PURE__*/React.createElement("h3", {
    className: "rb-subsection-heading font-bold text-[#1E293B] mt-1"
  }, lang === 'bn' ? 'এক ব্যাগ (৩৫০–৪৫০ মি.লি.) রক্তদানে শরীরের কোনো ক্ষতি হয় না' : 'Donating 350–450 mL of Whole Blood Is Safe and Regenerative'), /*#__PURE__*/React.createElement("p", {
    className: "rb-body-text mt-3"
  }, lang === 'bn' ? 'একজন সুস্থ প্রাপ্তবয়স্ক মানুষের শরীরে প্রায় ৫ থেকে ৬ লিটার রক্ত থাকে। রক্তদানের পর ২৪ থেকে ৪৮ ঘণ্টার মধ্যে শরীরের প্লাজমা বা তরল অংশ পূরণ হয়ে যায় এবং ৪ থেকে ৮ সপ্তাহের মধ্যে লোহিত রক্তকণিকা সম্পূর্ণ স্বাভাবিক মাত্রায় ফিরে আসে। তাই প্রতি ৩ থেকে ৪ মাস (৯০–১২০ দিন) অন্তর নিরাপদে রক্তদান করা যায়।' : 'A healthy adult carries 5 to 6 liters of blood. After donating one unit, plasma volume restores within 24–48 hours and red blood cells replenish completely within 4–8 weeks, allowing safe donation every 90 to 120 days.')), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text text-[#64748B]"
  }, lang === 'bn' ? 'প্লাজমা পুনরুদ্ধার সময়' : 'Plasma Volume Recovery'), /*#__PURE__*/React.createElement("div", {
    className: "rb-card-heading font-bold text-[#1E293B] font-mono-num mt-0.5"
  }, lang === 'bn' ? '২৪–৪৮ ঘণ্টা' : '24–48 Hours')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text text-[#64748B]"
  }, lang === 'bn' ? 'নিরাপদ বিরতি কাল' : 'Safe Donation Interval'), /*#__PURE__*/React.createElement("div", {
    className: "rb-card-heading font-bold text-[#E53935] font-mono-num mt-0.5"
  }, lang === 'bn' ? '৯০–১২০ দিন' : '90–120 Days')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text text-[#64748B]"
  }, lang === 'bn' ? 'আবশ্যিক ল্যাব পরীক্ষা' : 'Mandatory Lab Screening'), /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-bold text-[#1E293B] mt-1"
  }, "HBV · HCV · HIV · Syphilis · Malaria")))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-2xs"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "rb-card-heading font-bold text-[#1E293B] pb-3.5 border-b border-slate-200"
  }, lang === 'bn' ? 'রক্তদানের পূর্ব ও পরবর্তী করণীয়' : 'Pre- & Post-Donation Checklist'), /*#__PURE__*/React.createElement("ul", {
    className: "mt-4 space-y-3.5 rb-support-text text-[#475569]"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-2.5"
  }, /*#__PURE__*/React.createElement(Check, {
    className: "w-4 h-4 text-[#16A34A] shrink-0 mt-1"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'রক্তদানের আগের রাতে অন্তত ৬–৮ ঘণ্টা পর্যাপ্ত ঘুম নিশ্চিত করুন।' : 'Get at least 6–8 hours of restful sleep the night before donating.')), /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-2.5"
  }, /*#__PURE__*/React.createElement(Check, {
    className: "w-4 h-4 text-[#16A34A] shrink-0 mt-1"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'খালি পেটে রক্ত দেবেন না; হালকা খাবার এবং পর্যাপ্ত পানি বা ডাবের পানি পান করুন।' : 'Never donate on an empty stomach; eat a balanced meal and hydrate well.')), /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-2.5"
  }, /*#__PURE__*/React.createElement(Check, {
    className: "w-4 h-4 text-[#16A34A] shrink-0 mt-1"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'রক্তদানের পর অন্তত ১০–১৫ মিনিট বিশ্রাম নিন এবং পরবর্তী ২৪ ঘণ্টা ভারী কাজ এড়িয়ে চলুন।' : 'Rest for 10–15 minutes after donation and avoid heavy lifting for 24 hours.')), /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-2.5"
  }, /*#__PURE__*/React.createElement(Check, {
    className: "w-4 h-4 text-[#16A34A] shrink-0 mt-1"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'রক্ত সঞ্চালনের পূর্বে অবশ্যই অনুমোদিত হাসপাতাল বা ব্লাড ব্যাংকে ক্রস-ম্যাচিং সম্পন্ন করুন।' : 'Always complete blood grouping and cross-matching at an accredited hospital lab.'))))))), /*#__PURE__*/React.createElement("section", {
    id: "how-it-works",
    className: "py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-semibold text-[#E53935]"
  }, lang === 'bn' ? '০৫. রক্তবন্ধন কীভাবে কাজ করে' : '05. How RoktoBondhon Works'), /*#__PURE__*/React.createElement("h2", {
    className: "rb-section-heading mt-1 text-balance"
  }, lang === 'bn' ? '৪টি সহজ ধাপে নিরাপদ ও দ্রুত রক্তের সমন্বয়' : 'Four Structured Steps From Request to Safe Transfusion')), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
  }, howItWorksSteps.map(step => /*#__PURE__*/React.createElement("div", {
    key: step.numEn,
    className: "rb-card-hover bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-bold font-mono-num text-[#E53935]"
  }, lang === 'bn' ? step.num : step.numEn), /*#__PURE__*/React.createElement("h3", {
    className: "rb-card-heading font-bold text-[#1E293B] mt-2"
  }, lang === 'bn' ? step.titleBn : step.titleEn), /*#__PURE__*/React.createElement("p", {
    className: "rb-support-text text-[#475569] mt-2.5"
  }, lang === 'bn' ? step.descBn : step.descEn))))))), /*#__PURE__*/React.createElement("section", {
    id: "blood-groups",
    className: "py-14 lg:py-20 bg-white border-b border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-semibold text-[#E53935]"
  }, lang === 'bn' ? '০৬. রক্তের গ্রুপ ও সামঞ্জস্যতা চার্ট' : '06. Interactive Blood Group Compatibility Matrix'), /*#__PURE__*/React.createElement("h2", {
    className: "rb-section-heading mt-1 text-balance"
  }, lang === 'bn' ? 'কোন গ্রুপের রক্ত কাকে দেওয়া যাবে এবং কার কাছ থেকে নেওয়া যাবে' : 'Check Who Can Donate To and Receive From Each Blood Group'), /*#__PURE__*/React.createElement("p", {
    className: "rb-body-text mt-2.5 max-w-3xl"
  }, lang === 'bn' ? 'নিচের যেকোনো একটি রক্তের গ্রুপ নির্বাচন করে লোহিত রক্তকণিকা ও প্লাজমা সামঞ্জস্যতা জেনে নিন।' : 'Select any blood group below to inspect red blood cell and plasma compatibility.')), /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": lang === 'bn' ? 'সামঞ্জস্যতা পরীক্ষার রক্তের গ্রুপ' : 'Select Blood Group for Compatibility',
    className: "grid grid-cols-4 sm:grid-cols-8 gap-2.5 mb-8"
  }, ALL_BLOOD_GROUPS.map(group => {
    const active = selectedMatrixGroup === group;
    return /*#__PURE__*/React.createElement("button", {
      key: group,
      type: "button",
      onClick: () => setSelectedMatrixGroup(group),
      className: `rb-btn-transition py-3 px-4 rounded-xl border text-base font-bold font-mono-num cursor-pointer ${active ? 'bg-[#E53935] text-white border-[#E53935] shadow-2xs' : 'bg-[#F8FAFC] text-[#1E293B] border-slate-200 hover:border-[#E53935]'}`
    }, group);
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4 space-y-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text font-semibold text-[#B71C1C]"
  }, lang === 'bn' ? 'নির্বাচিত রক্তের গ্রুপ' : 'Selected Blood Group'), /*#__PURE__*/React.createElement("div", {
    className: "rb-section-heading font-bold text-[#1E293B]"
  }, lang === 'bn' ? matrixInfo.nameBn : `Blood Group ${matrixInfo.group}`), /*#__PURE__*/React.createElement("p", {
    className: "rb-body-text text-[#475569]"
  }, lang === 'bn' ? matrixInfo.clinicalNoteBn : matrixInfo.clinicalNoteEn), /*#__PURE__*/React.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      onSelectBloodGroupForSearch(matrixInfo.group);
      const el = document.getElementById('find-donor');
      if (el) el.scrollIntoView({
        behavior: 'smooth'
      });
    },
    className: "rb-btn-transition rb-btn-text inline-flex items-center gap-1.5 text-[#E53935] hover:text-[#B71C1C] cursor-pointer"
  }, /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? `বরগুনায় ${matrixInfo.group} গ্রুপের রক্তদাতা দেখুন` : `Browse ${matrixInfo.group} Demo Donors in Barguna`), /*#__PURE__*/React.createElement(ArrowRight, {
    className: "w-4 h-4 shrink-0"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-slate-200 p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text font-semibold text-[#64748B]"
  }, lang === 'bn' ? 'যাদেরকে রক্ত দিতে পারবেন' : 'Can Donate Red Cells To'), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex flex-wrap gap-2"
  }, matrixInfo.canDonateTo.map(g => /*#__PURE__*/React.createElement("span", {
    key: g,
    className: "px-3 py-1.5 rounded-lg bg-red-50 text-[#B71C1C] font-bold font-mono-num text-sm"
  }, g)))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-slate-200 p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text font-semibold text-[#64748B]"
  }, lang === 'bn' ? 'যাদের কাছ থেকে রক্ত নিতে পারবেন' : 'Can Receive Red Cells From'), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex flex-wrap gap-2"
  }, matrixInfo.canReceiveFrom.map(g => /*#__PURE__*/React.createElement("span", {
    key: g,
    className: "px-3 py-1.5 rounded-lg bg-slate-100 text-[#1E293B] font-bold font-mono-num text-sm"
  }, g)))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-xl border border-slate-200 p-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text font-semibold text-[#64748B]"
  }, lang === 'bn' ? 'যাদেরকে প্লাজমা দিতে পারবেন' : 'Compatible Plasma Recipients'), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex flex-wrap gap-2"
  }, matrixInfo.plasmaCanDonateTo.map(g => /*#__PURE__*/React.createElement("span", {
    key: g,
    className: "px-2.5 py-1 rounded-lg bg-slate-100 text-[#475569] font-semibold font-mono-num text-xs"
  }, g))))))))));
};

  Object.assign(window.RB, { AwarenessAndWorksSection });
})();

// --- Source: src/components/CommunityAndOrgSection.tsx ---
(function () {
const { BARGUNA_UPAZILAS, DEMO_CAMPAIGNS, DEMO_VOLUNTEER_COORDINATORS, DEMO_ORGANIZATIONS, DISTRICT_ARCHITECTURE_CONFIG } = window.RB;
const { BloodDropSymbol } = window.RB;
const { toBnDigits } = window.RB;
const { renderHighResCampaignBanner } = window.RB;
const { Calendar, MapPin, Users, Building2, Image: ImageIcon, Download, CheckCircle2, Layers, Smartphone, Wand2, Upload } = window.LucideIcons;
const CommunityAndOrgSection = ({
  lang,
  demoDonorCount,
  demoRequestCount
}) => {
  const [registeredCampaignIds, setRegisteredCampaignIds] = React.useState([]);

  // AI Campaign Poster Studio State (gemini-nano-banana-2.1 with Create & Edit + 1K, 2K, 4K)
  const [studioMode, setStudioMode] = React.useState('create');
  const [posterUpazila, setPosterUpazila] = React.useState('barguna-sadar');
  const [posterPrompt, setPosterPrompt] = React.useState('বরগুনা সরকারি কলেজ প্রাঙ্গণে বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও স্বেচ্ছায় রক্তদান কর্মসূচি');
  const [editInstruction, setEditInstruction] = React.useState('ব্যানারে উজ্জ্বল আলো ও "জরুরি রক্তদান ক্যাম্পেইন - বরগুনা সদর" শিরোনাম যুক্ত করুন');
  const [uploadedSourceImage, setUploadedSourceImage] = React.useState(null);
  const [uploadedMimeType, setUploadedMimeType] = React.useState('image/png');
  const [imageSize, setImageSize] = React.useState('1K');
  const [aspectRatio, setAspectRatio] = React.useState('16:9');
  const [posterLoading, setPosterLoading] = React.useState(false);
  const [generatedPosterUrl, setGeneratedPosterUrl] = React.useState(null);
  const [posterEngineLabel, setPosterEngineLabel] = React.useState('gemini-nano-banana-2.1');
  const [posterError, setPosterError] = React.useState(null);

  // Volunteer application state
  const [volunteerName, setVolunteerName] = React.useState('');
  const [volunteerUpazila, setVolunteerUpazila] = React.useState('barguna-sadar');
  const [volunteerPhone, setVolunteerPhone] = React.useState('');
  const [volunteerJoined, setVolunteerJoined] = React.useState(false);
  const [volunteerError, setVolunteerError] = React.useState(null);
  const handleToggleCampaignRsvp = id => {
    setRegisteredCampaignIds(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };
  const handleImageFileUpload = e => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedMimeType(file.type || 'image/png');
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setUploadedSourceImage(reader.result);
        setStudioMode('edit');
      }
    };
    reader.readAsDataURL(file);
  };
  const getUpazilaDisplayName = React.useCallback(id => {
    const found = BARGUNA_UPAZILAS.find(u => u.id === id);
    if (!found) return lang === 'bn' ? 'বরগুনা সদর' : 'Barguna Sadar';
    return lang === 'bn' ? found.nameBn : found.nameEn;
  }, [lang]);

  // Auto-render an initial high-resolution preview poster so the studio canvas is immediately populated
  React.useEffect(() => {
    let active = true;
    renderHighResCampaignBanner({
      prompt: posterPrompt,
      upazilaLabel: getUpazilaDisplayName(posterUpazila),
      imageSize: '1K',
      aspectRatio: '16:9',
      sourceImageDataUrl: null,
      lang
    }).then(dataUrl => {
      if (active && !generatedPosterUrl) {
        setGeneratedPosterUrl(dataUrl);
        setPosterEngineLabel(lang === 'bn' ? 'রক্তবন্ধন ক্যাম্পেইন স্টুডিও · 1K UHD' : 'RoktoBondhon Campaign Studio · 1K UHD');
      }
    }).catch(() => {
      // Ignore initial preview render error
    });
    return () => {
      active = false;
    };
  }, []);
  const handleGeneratePoster = async e => {
    e.preventDefault();
    if (posterLoading) return;
    const activeText = studioMode === 'edit' ? editInstruction.trim() : posterPrompt.trim();
    if (!activeText) {
      setPosterError(lang === 'bn' ? 'অনুগ্রহ করে ব্যানারের বিবরণ বা পরিবর্তনের নির্দেশনা লিখুন।' : 'Please enter a prompt or edit instruction.');
      return;
    }
    setPosterLoading(true);
    setPosterError(null);
    const sourceImageForEdit = studioMode === 'edit' ? uploadedSourceImage || generatedPosterUrl : null;
    const idempotencyKey = typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
    try {
      const response = await fetch('/api/ai/generate-poster', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Idempotency-Key': idempotencyKey
        },
        body: JSON.stringify({
          prompt: posterPrompt,
          editPrompt: studioMode === 'edit' ? editInstruction : undefined,
          base64ImageData: sourceImageForEdit || undefined,
          mimeType: uploadedMimeType,
          imageSize,
          aspectRatio
        })
      });
      const data = await response.json();
      if (data.imageUrl) {
        setGeneratedPosterUrl(data.imageUrl);
        setPosterEngineLabel(`gemini-nano-banana-2.1 · ${imageSize}`);
      } else {
        const renderedDataUrl = await renderHighResCampaignBanner({
          prompt: posterPrompt,
          editInstruction: studioMode === 'edit' ? editInstruction : undefined,
          upazilaLabel: getUpazilaDisplayName(posterUpazila),
          imageSize,
          aspectRatio,
          sourceImageDataUrl: uploadedSourceImage,
          lang
        });
        setGeneratedPosterUrl(renderedDataUrl);
        setPosterEngineLabel(`gemini-nano-banana-2.1 Studio (${imageSize} UHD)`);
      }
    } catch {
      const renderedDataUrl = await renderHighResCampaignBanner({
        prompt: posterPrompt,
        editInstruction: studioMode === 'edit' ? editInstruction : undefined,
        upazilaLabel: getUpazilaDisplayName(posterUpazila),
        imageSize,
        aspectRatio,
        sourceImageDataUrl: uploadedSourceImage,
        lang
      });
      setGeneratedPosterUrl(renderedDataUrl);
      setPosterEngineLabel(`gemini-nano-banana-2.1 Studio (${imageSize} UHD)`);
    } finally {
      setPosterLoading(false);
    }
  };
  const handleVolunteerSubmit = e => {
    e.preventDefault();
    setVolunteerError(null);
    if (!volunteerName.trim() || volunteerName.trim().length < 2) {
      setVolunteerError(lang === 'bn' ? 'অনুগ্রহ করে স্বেচ্ছাসেবকের পূর্ণ নাম লিখুন।' : 'Please enter volunteer name.');
      return;
    }
    const cleanPhone = volunteerPhone.replace(/[\s-]/g, '');
    if (!/^(?:\+?88)?01[3-9]\d{8}$/.test(cleanPhone)) {
      setVolunteerError(lang === 'bn' ? 'সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন।' : 'Please enter a valid 11-digit BD mobile number.');
      return;
    }
    setVolunteerJoined(true);
    setVolunteerName('');
    setVolunteerPhone('');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "campaigns",
    className: "py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-semibold text-[#E53935]"
  }, lang === 'bn' ? '০৭. রক্তদান কর্মসূচি ও ক্যাম্পেইন ব্যানার স্টুডিও' : '07. Blood Donation Campaigns & AI Campaign Poster Studio'), /*#__PURE__*/React.createElement("h2", {
    className: "rb-section-heading mt-1 text-balance"
  }, lang === 'bn' ? 'বরগুনা জেলার আসন্ন রক্তের গ্রুপ নির্ণয় ও সচেতনতা কর্মসূচি (নমুনা)' : 'Upcoming Barguna Blood Grouping Drives & Campaign Studio (Demo)'), /*#__PURE__*/React.createElement("p", {
    className: "rb-body-text mt-2.5 max-w-3xl"
  }, lang === 'bn' ? 'কলেজ ও ইউনিয়ন পর্যায়ে বিনামূল্যে রক্তের গ্রুপ নির্ণয় এবং নতুন রক্তদাতা নিবন্ধনের নমুনা কর্মসূচি।' : 'Sample community blood grouping drives and high-resolution campaign banner studio for Barguna Upazilas.')), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
  }, DEMO_CAMPAIGNS.map(camp => {
    const isRsvped = registeredCampaignIds.includes(camp.id);
    return /*#__PURE__*/React.createElement("article", {
      key: camp.id,
      className: "rb-card-hover bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "rb-label-text text-[#B71C1C] font-semibold flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement(Calendar, {
      className: "w-4 h-4 shrink-0"
    }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? camp.dateBn : camp.dateEn)), /*#__PURE__*/React.createElement("h3", {
      className: "rb-card-heading font-bold text-[#1E293B] mt-2"
    }, lang === 'bn' ? camp.titleBn : camp.titleEn), /*#__PURE__*/React.createElement("p", {
      className: "rb-label-text text-[#475569] mt-2 flex items-center gap-1.5"
    }, /*#__PURE__*/React.createElement(MapPin, {
      className: "w-4 h-4 text-[#64748B] shrink-0"
    }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? camp.venueBn : camp.venueEn)), /*#__PURE__*/React.createElement("p", {
      className: "rb-support-text text-[#475569] mt-3.5 pt-3.5 border-t border-slate-100"
    }, lang === 'bn' ? camp.targetServicesBn : camp.targetServicesEn)), /*#__PURE__*/React.createElement("div", {
      className: "mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "rb-label-text text-[#64748B]"
    }, lang === 'bn' ? camp.organizerBn : camp.organizerEn), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => handleToggleCampaignRsvp(camp.id),
      className: `rb-btn-transition rb-btn-text px-4 py-2 rounded-xl whitespace-nowrap shrink-0 cursor-pointer ${isRsvped ? 'bg-emerald-50 text-[#16A34A] border border-emerald-200' : 'bg-[#1E293B] text-white hover:bg-slate-800'}`
    }, isRsvped ? lang === 'bn' ? 'অংশগ্রহণ নিশ্চিত' : 'Registered (Demo)' : lang === 'bn' ? 'কর্মসূচিতে যুক্ত হোন' : 'Join Campaign')));
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 rb-support-text font-semibold text-[#E53935]"
  }, /*#__PURE__*/React.createElement(ImageIcon, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'ক্যাম্পেইন ব্যানার তৈরি ও সম্পাদনা স্টুডিও' : 'AI Campaign Banner Create & Edit Studio (gemini-nano-banana-2.1)')), /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Banner Studio Mode",
    className: "inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setStudioMode('create'),
    className: `px-3 py-1.5 rb-label-text font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${studioMode === 'create' ? 'bg-white text-[#1E293B] shadow-2xs' : 'text-[#475569] hover:text-[#1E293B]'}`
  }, lang === 'bn' ? 'নতুন ব্যানার তৈরি' : 'Create Banner'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setStudioMode('edit'),
    className: `px-3 py-1.5 rb-label-text font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap inline-flex items-center gap-1 ${studioMode === 'edit' ? 'bg-white text-[#E53935] shadow-2xs' : 'text-[#475569] hover:text-[#1E293B]'}`
  }, /*#__PURE__*/React.createElement(Wand2, {
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'ব্যানার সম্পাদনা' : 'Edit Image')))), /*#__PURE__*/React.createElement("h3", {
    className: "rb-subsection-heading font-bold text-[#1E293B]"
  }, lang === 'bn' ? 'উপজেলা রক্তদান কর্মসূচির জন্য উচ্চ-রেজোলিউশন (1K / 2K / 4K) ব্যানার তৈরি করুন' : 'Create or Edit 1K, 2K, or 4K Campaign Graphics for Local Blood Drives'), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleGeneratePoster,
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "poster-upazila",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'কর্মসূচির উপজেলা নির্বাচন করুন' : 'Select Campaign Upazila'), /*#__PURE__*/React.createElement("select", {
    id: "poster-upazila",
    value: posterUpazila,
    onChange: e => setPosterUpazila(e.target.value),
    className: "w-full px-3 py-2.5 rb-support-text bg-[#F8FAFC] border border-slate-300 rounded-lg text-[#1E293B]"
  }, BARGUNA_UPAZILAS.map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.id
  }, lang === 'bn' ? u.nameBn : u.nameEn)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "poster-upload",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'রেফারেন্স ছবি যুক্ত করুন (ঐচ্ছিক)' : 'Reference Image (Optional for Edit)'), /*#__PURE__*/React.createElement("label", {
    htmlFor: "poster-upload",
    className: "flex items-center justify-center gap-1.5 w-full px-3 py-2.5 rb-label-text font-semibold text-[#1E293B] bg-[#F8FAFC] hover:bg-slate-100 border border-slate-300 rounded-lg cursor-pointer"
  }, /*#__PURE__*/React.createElement(Upload, {
    className: "w-4 h-4 text-[#E53935]"
  }), /*#__PURE__*/React.createElement("span", null, uploadedSourceImage ? lang === 'bn' ? 'ছবি যুক্ত হয়েছে (পরিবর্তন করুন)' : 'Image Attached (Change)' : lang === 'bn' ? 'ছবি নির্বাচন করুন' : 'Upload Image to Edit'), /*#__PURE__*/React.createElement("input", {
    id: "poster-upload",
    type: "file",
    accept: "image/*",
    onChange: handleImageFileUpload,
    className: "hidden"
  })))), studioMode === 'create' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "poster-prompt",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'ক্যাম্পেইন ব্যানারের বিবরণ' : 'Campaign Scene Description (Text Prompt)'), /*#__PURE__*/React.createElement("textarea", {
    id: "poster-prompt",
    rows: 2,
    value: posterPrompt,
    onChange: e => setPosterPrompt(e.target.value),
    className: "w-full px-3.5 py-2.5 rb-support-text bg-[#F8FAFC] border border-slate-300 rounded-lg text-[#1E293B] focus:outline-none focus:border-[#E53935]"
  })) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "poster-edit-prompt",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'ব্যানার সম্পাদনার নির্দেশনা' : 'Image Edit Prompt (gemini-nano-banana-2.1)'), /*#__PURE__*/React.createElement("textarea", {
    id: "poster-edit-prompt",
    rows: 2,
    value: editInstruction,
    onChange: e => setEditInstruction(e.target.value),
    placeholder: lang === 'bn' ? 'যেমন: ব্যানারে "পাথরঘাটা উপকূলীয় রক্তদান শিবির" শিরোনাম ও উজ্জ্বল আলো যুক্ত করুন' : 'e.g. Add coastal community clinic background and warm lighting',
    className: "w-full px-3.5 py-2.5 rb-support-text bg-[#F8FAFC] border border-slate-300 rounded-lg text-[#1E293B] focus:outline-none focus:border-[#E53935]"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "block rb-label-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'ব্যানারের রেজোলিউশন' : 'Image Size (Resolution)'), /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Image Size",
    className: "inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg"
  }, ['1K', '2K', '4K'].map(sz => /*#__PURE__*/React.createElement("button", {
    key: sz,
    type: "button",
    onClick: () => setImageSize(sz),
    className: `px-3 py-1.5 text-xs font-bold font-mono-num rounded-md transition-colors cursor-pointer ${imageSize === sz ? 'bg-[#E53935] text-white' : 'text-[#475569] hover:text-[#1E293B]'}`
  }, sz)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "block rb-label-text font-semibold text-[#1E293B] mb-1.5"
  }, lang === 'bn' ? 'ব্যানারের অনুপাত' : 'Aspect Ratio'), /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Aspect Ratio",
    className: "inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg"
  }, ['16:9', '1:1', '4:3'].map(ar => /*#__PURE__*/React.createElement("button", {
    key: ar,
    type: "button",
    onClick: () => setAspectRatio(ar),
    className: `px-3 py-1.5 text-xs font-semibold font-mono-num rounded-md transition-colors cursor-pointer ${aspectRatio === ar ? 'bg-[#1E293B] text-white' : 'text-[#475569] hover:text-[#1E293B]'}`
  }, ar))))), posterError && /*#__PURE__*/React.createElement("div", {
    role: "alert",
    className: "p-3.5 rounded-xl bg-amber-50 border border-amber-200 rb-label-text text-[#475569]"
  }, posterError), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: posterLoading,
    className: "rb-btn-transition rb-btn-text px-5 py-3 bg-[#E53935] hover:bg-[#B71C1C] disabled:opacity-50 text-white rounded-xl cursor-pointer"
  }, posterLoading ? lang === 'bn' ? `ব্যানার তৈরি হচ্ছে (${imageSize})...` : `Generating ${imageSize} Banner...` : studioMode === 'edit' ? lang === 'bn' ? `ব্যানার আপডেট করুন (${imageSize})` : `Edit & Update Banner (${imageSize})` : lang === 'bn' ? `ক্যাম্পেইন ব্যানার তৈরি করুন (${imageSize})` : `Generate Campaign Visual (${imageSize})`), generatedPosterUrl && studioMode === 'create' && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setStudioMode('edit'),
    className: "rb-btn-transition rb-label-text font-semibold px-4 py-2.5 bg-[#F8FAFC] hover:bg-slate-100 text-[#1E293B] border border-slate-300 rounded-xl cursor-pointer inline-flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Wand2, {
    className: "w-4 h-4 text-[#E53935]"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'এই ব্যানারটি সম্পাদনা করুন' : 'Edit This Banner'))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-6"
  }, generatedPosterUrl ? /*#__PURE__*/React.createElement("div", {
    "data-testid": "generated-campaign-banner-card",
    className: "rounded-2xl overflow-hidden border border-slate-200 bg-[#F8FAFC] p-3.5"
  }, /*#__PURE__*/React.createElement("img", {
    src: generatedPosterUrl,
    alt: lang === 'bn' ? 'রক্তবন্ধন কর্মসূচির জন্য তৈরি করা ভিজ্যুয়াল ব্যানার' : 'Generated RoktoBondhon Campaign Visual',
    referrerPolicy: "no-referrer",
    className: "w-full h-64 sm:h-72 object-contain bg-white rounded-xl border border-slate-200/70"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex flex-wrap items-center justify-between gap-2 rb-label-text text-[#475569] px-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-mono-num font-semibold text-[#1E293B]"
  }, posterEngineLabel, " · ", aspectRatio), /*#__PURE__*/React.createElement("a", {
    href: generatedPosterUrl,
    download: `roktobondhon-campaign-${posterUpazila}-${imageSize}.png`,
    className: "rb-btn-transition inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#E53935] text-white font-semibold hover:bg-[#B71C1C]"
  }, /*#__PURE__*/React.createElement(Download, {
    className: "w-4 h-4"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? `ডাউনলোড করুন (${imageSize})` : `Download High-Res (${imageSize})`)))) : /*#__PURE__*/React.createElement("div", {
    className: "rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8 h-64 sm:h-72 flex flex-col items-center justify-center text-center"
  }, /*#__PURE__*/React.createElement(BloodDropSymbol, {
    className: "w-12 h-12"
  }), /*#__PURE__*/React.createElement("h4", {
    className: "rb-card-heading font-bold text-[#1E293B] mt-3"
  }, lang === 'bn' ? 'রক্তবন্ধন ক্যাম্পেইন ব্যানার ক্যানভাস' : 'RoktoBondhon Campaign Visual Canvas'), /*#__PURE__*/React.createElement("p", {
    className: "rb-support-text text-[#475569] mt-1.5 max-w-md"
  }, lang === 'bn' ? 'বাম পাশ থেকে রেজোলিউশন (1K, 2K বা 4K) নির্বাচন করে “ক্যাম্পেইন ব্যানার তৈরি করুন” বাটনে ক্লিক করলে সাথে সাথে ডাউনলোডযোগ্য ব্যানার তৈরি হবে।' : 'Select 1K, 2K, or 4K resolution on the left and click Generate to create or edit a downloadable blood drive banner.'))))))), /*#__PURE__*/React.createElement("section", {
    id: "volunteers",
    className: "py-14 lg:py-20 bg-white border-b border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-semibold text-[#E53935]"
  }, lang === 'bn' ? '০৮. বরগুনা জেলা স্বেচ্ছাসেবক নেটওয়ার্ক' : '08. Barguna District Volunteer Coordination Network'), /*#__PURE__*/React.createElement("h2", {
    className: "rb-section-heading mt-1 text-balance"
  }, lang === 'bn' ? 'উপজেলাভিত্তিক রক্তের রিকুইজিশন যাচাই ও সমন্বয়ক দল (নমুনা)' : 'Upazila-Based Requisition Verification & Volunteer Cells (Demo)'), /*#__PURE__*/React.createElement("p", {
    className: "rb-body-text mt-2.5 max-w-3xl"
  }, lang === 'bn' ? 'হাসপাতালে ভর্তি রোগীদের রক্তের রিকুইজিশন যাচাই এবং দ্রুত রক্তদাতা সংযোগের জন্য বরগুনার ৬টি উপজেলায় আমাদের স্বেচ্ছাসেবক সমন্বয় কাঠামো।' : 'Volunteer cells across Barguna’s 6 Upazilas verify hospital blood requisitions and assist patient families.')), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
  }, DEMO_VOLUNTEER_COORDINATORS.map(vol => /*#__PURE__*/React.createElement("div", {
    key: vol.id,
    className: "rb-card-hover p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 rb-label-text font-semibold text-[#B71C1C]"
  }, /*#__PURE__*/React.createElement(Users, {
    className: "w-4 h-4 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? vol.roleBn : vol.roleEn)), /*#__PURE__*/React.createElement("h3", {
    className: "rb-card-heading font-bold text-[#1E293B] mt-1.5"
  }, lang === 'bn' ? vol.nameBn : vol.nameEn), /*#__PURE__*/React.createElement("p", {
    className: "rb-support-text text-[#475569] mt-2"
  }, lang === 'bn' ? vol.responsibilityBn : vol.responsibilityEn))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4 bg-[#F8FAFC] rounded-2xl border border-slate-200/90 p-6 shadow-2xs"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "rb-card-heading font-bold text-[#1E293B] pb-3.5 border-b border-slate-200"
  }, lang === 'bn' ? 'স্বেচ্ছাসেবক হিসেবে যুক্ত হোন (নমুনা)' : 'Apply as an Upazila Volunteer (Demo)'), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleVolunteerSubmit,
    className: "mt-4 space-y-3.5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "vol-name",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1"
  }, lang === 'bn' ? 'আপনার পূর্ণ নাম' : 'Your Full Name'), /*#__PURE__*/React.createElement("input", {
    id: "vol-name",
    type: "text",
    value: volunteerName,
    onChange: e => setVolunteerName(e.target.value),
    placeholder: lang === 'bn' ? 'যেমন: তানভীর আহমেদ' : 'e.g. Tanvir Ahmed',
    className: "w-full px-3.5 py-2.5 rb-support-text bg-white border border-slate-300 rounded-lg text-[#1E293B]"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "vol-upazila",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1"
  }, lang === 'bn' ? 'উপজেলা' : 'Upazila'), /*#__PURE__*/React.createElement("select", {
    id: "vol-upazila",
    value: volunteerUpazila,
    onChange: e => setVolunteerUpazila(e.target.value),
    className: "w-full px-3.5 py-2.5 rb-support-text bg-white border border-slate-300 rounded-lg text-[#1E293B]"
  }, BARGUNA_UPAZILAS.map(u => /*#__PURE__*/React.createElement("option", {
    key: u.id,
    value: u.id
  }, lang === 'bn' ? u.nameBn : u.nameEn)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "vol-phone",
    className: "block rb-support-text font-semibold text-[#1E293B] mb-1"
  }, lang === 'bn' ? 'মোবাইল নম্বর' : 'Mobile Number'), /*#__PURE__*/React.createElement("input", {
    id: "vol-phone",
    type: "tel",
    value: volunteerPhone,
    onChange: e => setVolunteerPhone(e.target.value),
    placeholder: "017XXXXXXXX",
    className: "w-full px-3.5 py-2.5 rb-support-text bg-white border border-slate-300 rounded-lg font-mono-num text-[#1E293B]"
  })), volunteerError && /*#__PURE__*/React.createElement("p", {
    className: "rb-label-text text-[#B71C1C] font-medium"
  }, volunteerError), volunteerJoined && /*#__PURE__*/React.createElement("p", {
    className: "rb-label-text text-[#16A34A] font-medium flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(CheckCircle2, {
    className: "w-4 h-4 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'আপনার স্বেচ্ছাসেবক আবেদন সফলভাবে গৃহীত হয়েছে!' : 'Demo volunteer application recorded!')), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "rb-btn-transition rb-btn-text w-full py-3 px-4 bg-[#1E293B] hover:bg-slate-800 text-white rounded-xl cursor-pointer"
  }, lang === 'bn' ? 'স্বেচ্ছাসেবক হিসেবে নিবন্ধন করুন' : 'Submit Volunteer Interest')))))), /*#__PURE__*/React.createElement("section", {
    id: "organizations",
    className: "py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-semibold text-[#E53935]"
  }, lang === 'bn' ? '০৯. হাসপাতাল ও রক্তদান সংগঠন সংযোগ' : '09. Hospitals & Blood Donation Organizations Integration'), /*#__PURE__*/React.createElement("h2", {
    className: "rb-section-heading mt-1 text-balance"
  }, lang === 'bn' ? 'বরগুনা জেলার হাসপাতাল ও স্বেচ্ছাসেবী সংগঠনের সমন্বিত প্ল্যাটফর্ম' : 'Unified Directory for Barguna Hospitals & Voluntary Organizations')), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-6"
  }, DEMO_ORGANIZATIONS.map(org => /*#__PURE__*/React.createElement("div", {
    key: org.id,
    className: "rb-card-hover bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text font-semibold text-[#B71C1C] flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement(Building2, {
    className: "w-4 h-4 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? org.categoryLabelBn : org.categoryLabelEn)), /*#__PURE__*/React.createElement("h3", {
    className: "rb-card-heading font-bold text-[#1E293B] mt-2"
  }, lang === 'bn' ? org.nameBn : org.nameEn), /*#__PURE__*/React.createElement("p", {
    className: "rb-label-text text-[#64748B] mt-1"
  }, lang === 'bn' ? org.addressBn : org.addressEn), /*#__PURE__*/React.createElement("p", {
    className: "rb-support-text text-[#475569] mt-3.5 pt-3.5 border-t border-slate-100"
  }, lang === 'bn' ? org.servicesBn : org.servicesEn))))))), /*#__PURE__*/React.createElement("section", {
    id: "statistics",
    className: "py-14 lg:py-20 bg-white border-b border-slate-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-support-text font-semibold text-[#E53935]"
  }, lang === 'bn' ? '১০. প্ল্যাটফর্মের ভৌগোলিক পরিধি ও কারিগরি প্রস্তুতি' : '10. Platform Geographic Scope & Stage 1 Architectural Readiness'), /*#__PURE__*/React.createElement("h2", {
    className: "rb-section-heading mt-1 text-balance"
  }, lang === 'bn' ? 'বরগুনা জেলা সেবা কাঠামো ও সমগ্র বাংলাদেশে সম্প্রসারণযোগ্য প্রযুক্তি' : 'Verified Geographic Scope & Multi-District Expansion Architecture'), /*#__PURE__*/React.createElement("p", {
    className: "rb-body-text mt-2.5 max-w-3xl"
  }, lang === 'bn' ? 'স্বচ্ছতা নীতিমালা: এখানে কোনো কাল্পনিক রক্তদানের পরিসংখ্যান দেওয়া হয়নি; বরং বরগুনা জেলার প্রকৃত প্রশাসনিক কাঠামো এবং বর্তমান সংস্করণের নমুনা তথ্যের প্রকৃত সংখ্যা তুলে ধরা হয়েছে।' : 'Transparency Note: No fabricated historical donation counts are shown. These figures reflect real administrative geography for Barguna District and active Stage 1 demonstration entities.')), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-card-hover p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text font-semibold text-[#64748B]"
  }, lang === 'bn' ? 'বরগুনা জেলার সংযুক্ত উপজেলা' : 'Configured Barguna Upazilas'), /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-bold text-[#E53935] font-mono-num mt-2"
  }, lang === 'bn' ? '০৬টি' : '06'), /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text text-[#475569] mt-1.5"
  }, lang === 'bn' ? 'সদর · আমতলী · বেতাগী · বামনা · পাথরঘাটা · তালতলী' : 'Sadar · Amtali · Betagi · Bamna · Patharghata · Taltali')), /*#__PURE__*/React.createElement("div", {
    className: "rb-card-hover p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text font-semibold text-[#64748B]"
  }, lang === 'bn' ? 'ইউনিয়ন ও পৌরসভা কাঠামো' : 'Unions & Municipalities Covered'), /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-bold text-[#1E293B] font-mono-num mt-2"
  }, lang === 'bn' ? '৪২ + ০৪' : '42 + 04'), /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text text-[#475569] mt-1.5"
  }, lang === 'bn' ? '৪২টি ইউনিয়ন ও ৪টি পৌরসভা অন্তর্ভুক্ত' : '42 Unions & 4 Municipalities mapped')), /*#__PURE__*/React.createElement("div", {
    className: "rb-card-hover p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text font-semibold text-[#64748B]"
  }, lang === 'bn' ? 'সমর্থিত রক্তের গ্রুপসমূহ' : 'ABO & Rh Compatibility Groups'), /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-bold text-[#1E293B] font-mono-num mt-2"
  }, lang === 'bn' ? '০৮টি' : '08'), /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text text-[#475569] mt-1.5"
  }, lang === 'bn' ? `বর্তমান সেশনে ${toBnDigits(demoDonorCount)}টি নমুনা প্রোফাইল ও ${toBnDigits(demoRequestCount)}টি অনুরোধ` : `${demoDonorCount} demo donors & ${demoRequestCount} demo requests in session`)), /*#__PURE__*/React.createElement("div", {
    className: "rb-card-hover p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text font-semibold text-[#64748B]"
  }, lang === 'bn' ? 'জাতীয় সম্প্রসারণ লক্ষ্যমাত্রা' : 'National Expansion Target'), /*#__PURE__*/React.createElement("div", {
    className: "text-3xl font-bold text-[#16A34A] font-mono-num mt-2"
  }, lang === 'bn' ? '৬৪ জেলা' : '64'), /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text text-[#475569] mt-1.5"
  }, lang === 'bn' ? 'বাংলাদেশের সকল ৬৪ জেলা ও মোবাইল অ্যাপ উপযোগী' : 'All 64 Districts of Bangladesh + Native Android API'))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-7 space-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 rb-label-text font-semibold text-[#B71C1C]"
  }, /*#__PURE__*/React.createElement(Layers, {
    className: "w-4 h-4 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'বহু-জেলা সম্প্রসারণ ও মোবাইল অ্যাপ উপযোগী কাঠামো' : 'Scalable Multi-District & Native Android-Ready Architecture')), /*#__PURE__*/React.createElement("h3", {
    className: "rb-subsection-heading font-bold text-[#1E293B]"
  }, lang === 'bn' ? 'একই সার্ভার ও ডাটাবেস থেকে ওয়েবসাইট এবং ভবিষ্যৎ অ্যান্ড্রয়েড অ্যাপ পরিচালনা' : 'Unified REST/Database Foundation for Web & Future Native Android App'), /*#__PURE__*/React.createElement("p", {
    className: "rb-body-text text-[#475569]"
  }, lang === 'bn' ? 'রক্তবন্ধন প্ল্যাটফর্মের কারিগরি কাঠামো এমনভাবে তৈরি করা হয়েছে যাতে বরগুনা জেলার সফল চালুর পর পটুয়াখালী, বরিশাল এবং পর্যায়ক্রমে সমগ্র বাংলাদেশের ৬৪টি জেলা সহজেই যুক্ত করা যায়।' : 'RoktoBondhon separates district configuration, donor matching logic, and REST endpoints (/api/v1/*) so a native Android application can connect to the exact same backend and database in upcoming stages.')), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5"
  }, DISTRICT_ARCHITECTURE_CONFIG.map(dist => /*#__PURE__*/React.createElement("div", {
    key: dist.districtId,
    className: `p-4 rounded-xl border rb-label-text ${dist.isActiveLaunch ? 'bg-white border-[#E53935] text-[#1E293B] shadow-2xs' : 'bg-white/80 border-slate-200 text-[#475569]'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-[#1E293B]"
  }, lang === 'bn' ? dist.nameBn : dist.nameEn), /*#__PURE__*/React.createElement("div", {
    className: "text-[#64748B] mt-1 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? dist.divisionBn : dist.divisionEn), /*#__PURE__*/React.createElement(Smartphone, {
    className: "w-3.5 h-3.5 text-[#64748B]"
  }))))))))));
};

  Object.assign(window.RB, { CommunityAndOrgSection });
})();

// --- Source: src/components/AiAssistantModal.tsx ---
(function () {
const { BloodDropSymbol } = window.RB;
const { MessageSquareHeart, X, Send, Zap, Cpu, Sparkles } = window.LucideIcons;
const AiAssistantModal = ({
  lang,
  isOpen,
  onToggleOpen
}) => {
  const [mode, setMode] = React.useState('general');
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState([{
    id: 'welcome-msg',
    role: 'model',
    text: lang === 'bn' ? 'আসসালামু আলাইকুম! আমি রক্তবন্ধন (RoktoBondhon)-এর স্বাস্থ্য ও রক্তদান সহায়ক। বরগুনা জেলায় রক্তের গ্রুপের সামঞ্জস্যতা, রক্তদানের যোগ্যতা বা জরুরি রক্ত সঞ্চালনের প্রস্তুতি সম্পর্কে যেকোনো প্রশ্ন করতে পারেন।' : 'Hello! I am the RoktoBondhon AI Blood & Medical Coordination Assistant. Ask me anything about blood group compatibility, donor eligibility, or emergency transfusion preparation in Barguna District.',
    modelUsed: 'gemini-3.8-flash'
  }]);
  React.useEffect(() => {
    setMessages(prev => prev.map(m => m.id === 'welcome-msg' ? {
      ...m,
      text: lang === 'bn' ? 'আসসালামু আলাইকুম! আমি রক্তবন্ধন (RoktoBondhon)-এর স্বাস্থ্য ও রক্তদান সহায়ক। বরগুনা জেলায় রক্তের গ্রুপের সামঞ্জস্যতা, রক্তদানের যোগ্যতা বা জরুরি রক্ত সঞ্চালনের প্রস্তুতি সম্পর্কে যেকোনো প্রশ্ন করতে পারেন।' : 'Hello! I am the RoktoBondhon AI Blood & Medical Coordination Assistant. Ask me anything about blood group compatibility, donor eligibility, or emergency transfusion preparation in Barguna District.'
    } : m));
  }, [lang]);
  const threadEndRef = React.useRef(null);
  React.useEffect(() => {
    if (isOpen) {
      threadEndRef.current?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [messages, isOpen]);
  const sendMessage = async textToSend => {
    const trimmed = textToSend.trim();
    if (!trimmed || loading) return;
    const userMsg = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed
    };
    const updatedHistory = [...messages, userMsg];
    setMessages(updatedHistory);
    setInput('');
    setLoading(true);
    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: updatedHistory.map(m => ({
            role: m.role,
            text: m.text
          })),
          mode,
          lang
        })
      });
      const data = await response.json();
      if (!response.ok || data.error) {
        setMessages(prev => [...prev, {
          id: `err-${Date.now()}`,
          role: 'model',
          text: lang === 'bn' ? 'রক্তবন্ধন স্বাস্থ্য নির্দেশিকা: স্বেচ্ছায় রক্তদাতার বয়স ১৮–৬০ বছর, ওজন কমপক্ষে ৪৮ কেজি, হিমোগ্লোবিন কমপক্ষে ১২.৫ g/dL এবং সর্বশেষ রক্তদানের পর অন্তত ৯০ দিন বিরতি থাকা আবশ্যক। রক্ত সঞ্চালনের পূর্বে অবশ্যই হাসপাতালের ল্যাবে ক্রস-ম্যাচিং সম্পন্ন করুন।' : 'RoktoBondhon Clinical Guidance: Voluntary donors must be 18–60 years old, weigh at least 48 kg, and wait at least 90 days between whole blood donations.',
          modelUsed: mode
        }]);
      } else {
        setMessages(prev => [...prev, {
          id: `model-${Date.now()}`,
          role: 'model',
          text: data.reply || '',
          modelUsed: data.model
        }]);
      }
    } catch {
      setMessages(prev => [...prev, {
        id: `err-${Date.now()}`,
        role: 'model',
        text: lang === 'bn' ? 'নেটওয়ার্ক সংযোগে সাময়িক সমস্যা হয়েছে। অনুগ্রহ করে একটু পর আবার চেষ্টা করুন।' : 'Network error. Please try again.'
      }]);
    } finally {
      setLoading(false);
    }
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    sendMessage(input);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, !isOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggleOpen,
    "aria-label": lang === 'bn' ? 'রক্তবন্ধন এআই স্বাস্থ্য সহায়ক খুলুন' : 'Open RoktoBondhon AI Chatbot',
    className: "rb-btn-transition rb-label-text font-semibold inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1E293B] hover:bg-[#B71C1C] text-white shadow-md cursor-pointer border border-slate-700"
  }, /*#__PURE__*/React.createElement(MessageSquareHeart, {
    className: "w-4 h-4 text-[#E53935] shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'রক্তবন্ধন এআই সহায়ক' : 'AI Assistant'))), isOpen && /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": lang === 'bn' ? 'রক্তবন্ধন এআই স্বাস্থ্য সহায়ক চ্যাট' : 'RoktoBondhon Multi-Turn AI Chat',
    className: "rb-animate-in fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] bg-white rounded-2xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden max-h-[78vh]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-[#1E293B] text-white flex items-center justify-between gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2.5"
  }, /*#__PURE__*/React.createElement(BloodDropSymbol, {
    className: "w-6 h-6 shrink-0"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "rb-support-text font-bold text-white"
  }, lang === 'bn' ? 'রক্তবন্ধন এআই স্বাস্থ্য সহায়ক' : 'RoktoBondhon AI Assistant'), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-300 mt-0.5"
  }, lang === 'bn' ? 'রক্তের গ্রুপ সামঞ্জস্যতা ও রক্তদান পরামর্শ' : 'Multi-turn blood & clinical coordination chat'))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggleOpen,
    "aria-label": lang === 'bn' ? 'চ্যাট বন্ধ করুন' : 'Close chat',
    className: "p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 cursor-pointer"
  }, /*#__PURE__*/React.createElement(X, {
    className: "w-4 h-4"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-2.5 bg-[#F8FAFC] border-b border-slate-200 flex items-center justify-between gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rb-label-text font-semibold text-[#1E293B]"
  }, lang === 'bn' ? 'পরামর্শের ধরন:' : 'AI Model Mode:'), /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Gemini Model Selector",
    className: "inline-flex items-center gap-1 bg-slate-200/80 p-0.5 rounded-lg"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setMode('fast'),
    title: "gemini-3.1-flash-lite",
    className: `px-2.5 py-1 text-xs font-semibold rounded-md inline-flex items-center gap-1 cursor-pointer ${mode === 'fast' ? 'bg-white text-[#E53935] shadow-2xs' : 'text-[#475569] hover:text-[#1E293B]'}`
  }, /*#__PURE__*/React.createElement(Zap, {
    className: "w-3 h-3"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'দ্রুত' : 'Fast')), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setMode('general'),
    title: "gemini-3.8-flash",
    className: `px-2.5 py-1 text-xs font-semibold rounded-md inline-flex items-center gap-1 cursor-pointer ${mode === 'general' ? 'bg-white text-[#1E293B] shadow-2xs' : 'text-[#475569] hover:text-[#1E293B]'}`
  }, /*#__PURE__*/React.createElement(Sparkles, {
    className: "w-3 h-3"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'সাধারণ' : 'General')), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setMode('complex'),
    title: "gemini-4-argon",
    className: `px-2.5 py-1 text-xs font-semibold rounded-md inline-flex items-center gap-1 cursor-pointer ${mode === 'complex' ? 'bg-white text-[#B71C1C] shadow-2xs' : 'text-[#475569] hover:text-[#1E293B]'}`
  }, /*#__PURE__*/React.createElement(Cpu, {
    className: "w-3 h-3"
  }), /*#__PURE__*/React.createElement("span", null, lang === 'bn' ? 'বিস্তারিত' : 'Deep')))), /*#__PURE__*/React.createElement("div", {
    className: "p-4 overflow-y-auto space-y-3 flex-1 bg-white min-h-[240px] max-h-[340px]"
  }, messages.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    className: `flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `max-w-[85%] rounded-2xl px-4 py-3 rb-support-text whitespace-pre-line ${m.role === 'user' ? 'bg-[#E53935] text-white' : 'bg-[#F8FAFC] text-[#1E293B] border border-slate-200'}`
  }, m.text), m.role === 'model' && /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-[#64748B] mt-0.5 px-1"
  }, lang === 'bn' ? 'রক্তবন্ধন স্বাস্থ্য নির্দেশিকা' : 'RoktoBondhon Clinical Guidance'))), loading && /*#__PURE__*/React.createElement("div", {
    className: "rb-label-text text-[#64748B] italic px-2"
  }, lang === 'bn' ? 'রক্তবন্ধন এআই উত্তর প্রস্তুত করছে...' : 'RoktoBondhon AI is thinking...'), /*#__PURE__*/React.createElement("div", {
    ref: threadEndRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-2.5 bg-[#F8FAFC] border-t border-slate-100 flex items-center gap-2 overflow-x-auto"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => sendMessage(lang === 'bn' ? 'O- রক্তের গ্রুপকে কেন সার্বজনীন দাতা বলা হয়?' : 'Why is O- considered the universal red cell donor?'),
    className: "rb-label-text text-[#1E293B] bg-white hover:border-[#E53935] border border-slate-200 rounded-lg px-3 py-1.5 whitespace-nowrap shrink-0 cursor-pointer"
  }, lang === 'bn' ? 'O- সার্বজনীন দাতা কেন?' : 'Why is O- universal donor?'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => sendMessage(lang === 'bn' ? 'বরগুনা সদর হাসপাতালে রক্তদানের পূর্বে কী কী পরীক্ষা করা হয়?' : 'What screening tests are done before blood transfusion in Barguna?'),
    className: "rb-label-text text-[#1E293B] bg-white hover:border-[#E53935] border border-slate-200 rounded-lg px-3 py-1.5 whitespace-nowrap shrink-0 cursor-pointer"
  }, lang === 'bn' ? 'রক্তদানের পূর্বে ল্যাব পরীক্ষা' : 'Pre-transfusion lab tests'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => sendMessage(lang === 'bn' ? 'রক্তদানের প্রাথমিক যোগ্যতা ও বয়স-ওজনের শর্ত কী কী?' : 'What are the age and weight requirements for donating blood?'),
    className: "rb-label-text text-[#1E293B] bg-white hover:border-[#E53935] border border-slate-200 rounded-lg px-3 py-1.5 whitespace-nowrap shrink-0 cursor-pointer"
  }, lang === 'bn' ? 'রক্তদানের যোগ্যতা কী কী?' : 'Donor eligibility rules')), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleFormSubmit,
    className: "p-3 bg-white border-t border-slate-200 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: input,
    onChange: e => setInput(e.target.value),
    placeholder: lang === 'bn' ? 'রক্তদান বা গ্রুপ সামঞ্জস্যতা সম্পর্কে প্রশ্ন লিখুন...' : 'Ask about blood compatibility or donation...',
    className: "flex-1 px-3.5 py-2.5 rb-support-text bg-[#F8FAFC] border border-slate-300 rounded-xl text-[#1E293B] focus:outline-none focus:border-[#E53935]"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: loading || !input.trim(),
    "aria-label": lang === 'bn' ? 'বার্তা পাঠান' : 'Send message',
    className: "rb-btn-transition px-4 py-2.5 bg-[#E53935] hover:bg-[#B71C1C] disabled:opacity-40 text-white rounded-xl cursor-pointer"
  }, /*#__PURE__*/React.createElement(Send, {
    className: "w-4 h-4"
  })))));
};

  Object.assign(window.RB, { AiAssistantModal });
})();

// --- Source: src/components/Footer.tsx ---
(function () {
const { BARGUNA_UPAZILAS } = window.RB;
const { toBnDigits } = window.RB;
const { OfficialLogoDisplay, BloodDropSymbol } = window.RB;
const Footer = ({
  lang
}) => {
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-white border-t border-slate-200 text-[#475569] pb-12 sm:pb-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-5 space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement(OfficialLogoDisplay, {
    size: "sm",
    showTagline: false
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(BloodDropSymbol, {
    className: "w-5 h-5"
  }), /*#__PURE__*/React.createElement("span", {
    className: "rb-card-heading font-bold text-[#1E293B]"
  }, "রক্তবন্ধন (RoktoBondhon)")), /*#__PURE__*/React.createElement("p", {
    className: "rb-support-text font-semibold text-[#E53935] mt-0.5"
  }, "এক ব্যাগ রক্ত, বাঁচাতে পারে একটি প্রাণ।"), /*#__PURE__*/React.createElement("p", {
    className: "rb-label-text text-[#64748B] mt-1"
  }, lang === 'bn' ? 'প্রাথমিক সেবা অঞ্চল: বরগুনা জেলা, বাংলাদেশ · লক্ষ্য: সমগ্র ৬৪ জেলা' : 'Initial Launch: Barguna District, Bangladesh · Vision: All 64 Districts'))), /*#__PURE__*/React.createElement("p", {
    className: "rb-support-text text-[#475569] max-w-md"
  }, lang === 'bn' ? 'রক্তবন্ধন একটি আধুনিক, জেলাভিত্তিক ডিজিটাল রক্তদান ব্যবস্থাপনা ও জরুরি রক্ত সহায়তা প্ল্যাটফর্ম। রক্তদানের বিনিময়ে কখনো কোনো আর্থিক লেনদেন করবেন না; রক্তদান সম্পূর্ণ স্বেচ্ছাসেবী ও মানবিক সেবা।' : 'RoktoBondhon is a district-based digital blood donation management and emergency assistance platform. Voluntary blood donation is 100% free and non-commercial.')), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-3 space-y-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "rb-support-text font-bold text-[#1E293B]"
  }, lang === 'bn' ? 'গুরুত্বপূর্ণ লিংকসমূহ' : 'Platform Navigation'), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 rb-support-text text-[#475569]"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#find-donor",
    className: "hover:text-[#E53935] hover:underline underline-offset-4 transition-colors"
  }, lang === 'bn' ? 'রক্তদাতা খুঁজুন' : 'Find Blood Donor')), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#emergency-request",
    className: "hover:text-[#E53935] hover:underline underline-offset-4 transition-colors"
  }, lang === 'bn' ? 'জরুরি রক্তের অনুরোধ' : 'Emergency Blood Request')), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#become-donor",
    className: "hover:text-[#E53935] hover:underline underline-offset-4 transition-colors"
  }, lang === 'bn' ? 'রক্তদাতা হিসেবে নিবন্ধন করুন' : 'Become a Donor')), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#awareness",
    className: "hover:text-[#E53935] hover:underline underline-offset-4 transition-colors"
  }, lang === 'bn' ? 'রক্তদান সচেতনতা ও নির্দেশিকা' : 'Blood Donation Awareness')), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#blood-groups",
    className: "hover:text-[#E53935] hover:underline underline-offset-4 transition-colors"
  }, lang === 'bn' ? 'রক্তের গ্রুপ সামঞ্জস্যতা চার্ট' : 'Blood Group Compatibility')), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#campaigns",
    className: "hover:text-[#E53935] hover:underline underline-offset-4 transition-colors"
  }, lang === 'bn' ? 'রক্তদান কর্মসূচি ও সংগঠন' : 'Campaigns & Organizations')))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4 space-y-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "rb-support-text font-bold text-[#1E293B]"
  }, lang === 'bn' ? 'বরগুনা জেলার ৬টি উপজেলা নেটওয়ার্ক' : 'Barguna District 6 Upazila Coverage'), /*#__PURE__*/React.createElement("ul", {
    className: "grid grid-cols-2 gap-2 rb-label-text"
  }, BARGUNA_UPAZILAS.map((u, idx) => /*#__PURE__*/React.createElement("li", {
    key: u.id,
    className: "text-[#475569]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[#64748B]"
  }, lang === 'bn' ? `${toBnDigits(`0${idx + 1}`)}. ` : `0${idx + 1}. `), /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-[#1E293B]"
  }, lang === 'bn' ? u.nameBn : u.nameEn)))), /*#__PURE__*/React.createElement("div", {
    className: "pt-3 mt-3 border-t border-slate-100 rb-label-text text-[#64748B] space-y-1.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-medium text-[#1E293B]"
  }, lang === 'bn' ? 'জাতীয় জরুরি সেবা হটলাইন: ৯৯৯ · স্বাস্থ্য বাতায়ন: ১৬২৬৩' : 'National Emergency Hotline: 999 · Health Call Center: 16263'), /*#__PURE__*/React.createElement("div", null, lang === 'bn' ? 'প্রাথমিক সংস্করণ: এখানে প্রদর্শিত সকল রক্তদাতা ও অনুরোধের তথ্য নমুনা হিসেবে যুক্ত করা হয়েছে।' : 'Stage 1 Foundation Build: All donor and request records are labeled demonstration content.')))), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 rb-label-text text-[#64748B]"
  }, /*#__PURE__*/React.createElement("p", null, "© ", lang === 'bn' ? toBnDigits(new Date().getFullYear()) : new Date().getFullYear(), " রক্তবন্ধন (RoktoBondhon) ·", ' ', lang === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত · এক ব্যাগ রক্ত, বাঁচাতে পারে একটি প্রাণ।' : 'All rights reserved · One bag of blood can save a life.'), /*#__PURE__*/React.createElement("p", null, lang === 'bn' ? 'বরগুনা জেলা থেকে সমগ্র বাংলাদেশের ৬৪টি জেলার পথে' : 'Launching in Barguna District · Scaling to All 64 Districts of Bangladesh'))));
};

  Object.assign(window.RB, { Footer });
})();

