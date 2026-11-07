/**
 * RoktoBondhon (রক্তবন্ধন) — Main Application Entry
 */
window.RB = window.RB || {};

// --- Source: src/App.tsx ---
(function () {
const { DEMO_DONORS, INITIAL_DEMO_EMERGENCY_REQUESTS } = window.RB;
const { Header } = window.RB;
const { HeroSection } = window.RB;
const { FindDonorSection } = window.RB;
const { EmergencyRequestSection } = window.RB;
const { BecomeDonorSection } = window.RB;
const { AwarenessAndWorksSection } = window.RB;
const { CommunityAndOrgSection } = window.RB;
const { AiAssistantModal } = window.RB;
const { Footer } = window.RB;
function App() {
  // Default language is Bengali ('bn') per project specification, with English ('en') switch
  const [lang, setLang] = React.useState('bn');

  // Shared state for demonstration donors and emergency requests
  const [donors, setDonors] = React.useState(DEMO_DONORS);
  const [emergencyRequests, setEmergencyRequests] = React.useState(INITIAL_DEMO_EMERGENCY_REQUESTS);

  // Directory filter state
  const [selectedBloodGroup, setSelectedBloodGroup] = React.useState('ALL');
  const [selectedUpazila, setSelectedUpazila] = React.useState('ALL');

  // Multi-turn Gemini AI Chat Modal state
  const [isAiChatOpen, setIsAiChatOpen] = React.useState(false);
  const handleQuickSearch = (group, upazila) => {
    setSelectedBloodGroup(group);
    setSelectedUpazila(upazila);
  };
  const handleAddEmergencyRequest = newReq => {
    setEmergencyRequests(prev => [newReq, ...prev]);
  };
  const handleRegisterDemoDonor = newDonor => {
    setDonors(prev => [newDonor, ...prev]);
  };
  const scrollToEmergency = () => {
    const el = document.getElementById('emergency-request');
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `min-h-screen flex flex-col bg-[#F8FAFC] text-[#1E293B] ${lang === 'bn' ? 'font-bn' : 'font-en'}`
  }, /*#__PURE__*/React.createElement(Header, {
    lang: lang,
    onEmergencyClick: scrollToEmergency
  }), /*#__PURE__*/React.createElement("main", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement(HeroSection, {
    lang: lang,
    onToggleLang: setLang,
    selectedBloodGroup: selectedBloodGroup,
    selectedUpazila: selectedUpazila,
    onQuickSearch: handleQuickSearch,
    onOpenAiChat: () => setIsAiChatOpen(true)
  }), /*#__PURE__*/React.createElement(FindDonorSection, {
    lang: lang,
    donors: donors,
    selectedBloodGroup: selectedBloodGroup,
    selectedUpazila: selectedUpazila,
    onChangeBloodGroup: setSelectedBloodGroup,
    onChangeUpazila: setSelectedUpazila
  }), /*#__PURE__*/React.createElement(EmergencyRequestSection, {
    lang: lang,
    requests: emergencyRequests,
    onAddRequest: handleAddEmergencyRequest,
    onSelectGroupForSearch: (group, upazila) => {
      setSelectedBloodGroup(group);
      setSelectedUpazila(upazila);
    }
  }), /*#__PURE__*/React.createElement(BecomeDonorSection, {
    lang: lang,
    onRegisterDemoDonor: handleRegisterDemoDonor
  }), /*#__PURE__*/React.createElement(AwarenessAndWorksSection, {
    lang: lang,
    onSelectBloodGroupForSearch: group => setSelectedBloodGroup(group)
  }), /*#__PURE__*/React.createElement(CommunityAndOrgSection, {
    lang: lang,
    demoDonorCount: donors.length,
    demoRequestCount: emergencyRequests.length
  })), /*#__PURE__*/React.createElement(Footer, {
    lang: lang
  }), /*#__PURE__*/React.createElement(AiAssistantModal, {
    lang: lang,
    isOpen: isAiChatOpen,
    onToggleOpen: () => setIsAiChatOpen(prev => !prev)
  }));
}

  Object.assign(window.RB, { App });
})();

// --- Mount Application ---
(function () {
  const rootEl = document.getElementById('root');
  if (rootEl && window.RB && window.RB.App) {
    createRoot(rootEl).render(React.createElement(window.RB.App, null));
  }
})();
