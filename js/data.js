/**
 * RoktoBondhon (রক্তবন্ধন) — Barguna District Data, Blood Compatibility & Validation Logic
 */
window.RB = window.RB || {};

// --- Source: src/data/bargunaData.ts ---
(function () {
const BARGUNA_UPAZILAS = [{
  id: 'barguna-sadar',
  nameBn: 'বরগুনা সদর',
  nameEn: 'Barguna Sadar',
  unionsCount: 10,
  primaryHospitalBn: 'বরগুনা ২৫০ শয্যা জেনারেল হাসপাতাল',
  primaryHospitalEn: 'Barguna 250-Bed General Hospital',
  coordinatorZoneBn: 'সদর অঞ্চল-১ (পৌরসভা ও ১০টি ইউনিয়ন)',
  coordinatorZoneEn: 'Sadar Zone-1 (Municipality & 10 Unions)'
}, {
  id: 'amtali',
  nameBn: 'আমতলী',
  nameEn: 'Amtali',
  unionsCount: 7,
  primaryHospitalBn: 'আমতলী ৫০ শয্যা উপজেলা স্বাস্থ্য কমপ্লেক্স',
  primaryHospitalEn: 'Amtali 50-Bed Upazila Health Complex',
  coordinatorZoneBn: 'আমতলী অঞ্চল-২ (পৌরসভা ও ৭টি ইউনিয়ন)',
  coordinatorZoneEn: 'Amtali Zone-2 (Municipality & 7 Unions)'
}, {
  id: 'betagi',
  nameBn: 'বেতাগী',
  nameEn: 'Betagi',
  unionsCount: 7,
  primaryHospitalBn: 'বেতাগী উপজেলা স্বাস্থ্য কমপ্লেক্স',
  primaryHospitalEn: 'Betagi Upazila Health Complex',
  coordinatorZoneBn: 'বেতাগী অঞ্চল-৩ (পৌরসভা ও ৭টি ইউনিয়ন)',
  coordinatorZoneEn: 'Betagi Zone-3 (Municipality & 7 Unions)'
}, {
  id: 'bamna',
  nameBn: 'বামনা',
  nameEn: 'Bamna',
  unionsCount: 4,
  primaryHospitalBn: 'বামনা উপজেলা স্বাস্থ্য কমপ্লেক্স',
  primaryHospitalEn: 'Bamna Upazila Health Complex',
  coordinatorZoneBn: 'বামনা অঞ্চল-৪ (৪টি ইউনিয়ন)',
  coordinatorZoneEn: 'Bamna Zone-4 (4 Unions)'
}, {
  id: 'patharghata',
  nameBn: 'পাথরঘাটা',
  nameEn: 'Patharghata',
  unionsCount: 7,
  primaryHospitalBn: 'পাথরঘাটা উপজেলা স্বাস্থ্য কমপ্লেক্স',
  primaryHospitalEn: 'Patharghata Upazila Health Complex',
  coordinatorZoneBn: 'পাথরঘাটা উপকূলীয় অঞ্চল-৫ (পৌরসভা ও ৭টি ইউনিয়ন)',
  coordinatorZoneEn: 'Patharghata Coastal Zone-5 (Municipality & 7 Unions)'
}, {
  id: 'taltali',
  nameBn: 'তালতলী',
  nameEn: 'Taltali',
  unionsCount: 7,
  primaryHospitalBn: 'তালতলী উপজেলা স্বাস্থ্য কমপ্লেক্স',
  primaryHospitalEn: 'Taltali Upazila Health Complex',
  coordinatorZoneBn: 'তালতলী উপকূলীয় অঞ্চল-৬ (৭টি ইউনিয়ন)',
  coordinatorZoneEn: 'Taltali Coastal Zone-6 (7 Unions)'
}];
const DISTRICT_ARCHITECTURE_CONFIG = [{
  districtId: 'barguna',
  nameBn: 'বরগুনা জেলা (প্রাথমিক সেবা অঞ্চল)',
  nameEn: 'Barguna District (Initial Launch)',
  divisionBn: 'বরিশাল বিভাগ',
  divisionEn: 'Barishal Division',
  isActiveLaunch: true,
  upazilas: BARGUNA_UPAZILAS
}, {
  districtId: 'patuakhali',
  nameBn: 'পটুয়াখালী জেলা (পরবর্তী ধাপ)',
  nameEn: 'Patuakhali District (Phase 2)',
  divisionBn: 'বরিশাল বিভাগ',
  divisionEn: 'Barishal Division',
  isActiveLaunch: false,
  upazilas: []
}, {
  districtId: 'barishal',
  nameBn: 'বরিশাল জেলা (পরবর্তী ধাপ)',
  nameEn: 'Barishal District (Phase 2)',
  divisionBn: 'বরিশাল বিভাগ',
  divisionEn: 'Barishal Division',
  isActiveLaunch: false,
  upazilas: []
}, {
  districtId: 'all-64-districts',
  nameBn: 'সমগ্র বাংলাদেশের ৬৪টি জেলা (জাতীয় সম্প্রসারণ)',
  nameEn: 'All 64 Districts of Bangladesh (National Scale)',
  divisionBn: '৮টি বিভাগ',
  divisionEn: '8 Divisions',
  isActiveLaunch: false,
  upazilas: []
}];

/**
 * Clearly labeled DEMONSTRATION donor records.
 * No real personal donor identities or phone numbers are exposed.
 */
const DEMO_DONORS = [{
  id: 'demo-donor-1',
  code: 'RB-BRG-001',
  nameBn: 'মোঃ রাকিবুল হাসান',
  nameEn: 'Md. Rakibul Hasan',
  bloodGroup: 'O+',
  upazilaId: 'barguna-sadar',
  locationBn: 'কলেজ রোড, বরগুনা সদর',
  locationEn: 'College Road, Barguna Sadar',
  isAvailable: true,
  lastDonationDaysAgo: 118,
  totalDonations: 5,
  maskedPhone: '017XX-XXXXXX [নমুনা সুরক্ষিত]',
  verifiedByOrgBn: 'রক্তবন্ধন বরগুনা সদর সমন্বয় দল (নমুনা)',
  verifiedByOrgEn: 'RoktoBondhon Barguna Sadar Team (Sample)',
  isDemoRecord: true
}, {
  id: 'demo-donor-2',
  code: 'RB-BRG-002',
  nameBn: 'তানভীর আহমেদ',
  nameEn: 'Tanvir Ahmed',
  bloodGroup: 'O-',
  upazilaId: 'barguna-sadar',
  locationBn: 'সদর হাসপাতাল সংলগ্ন, বরগুনা সদর',
  locationEn: 'Near General Hospital, Barguna Sadar',
  isAvailable: true,
  lastDonationDaysAgo: 145,
  totalDonations: 7,
  maskedPhone: '018XX-XXXXXX [নমুনা সুরক্ষিত]',
  verifiedByOrgBn: 'রক্তবন্ধন জরুরি রক্তদাতা ইউনিট (নমুনা)',
  verifiedByOrgEn: 'RoktoBondhon Emergency Pool (Sample)',
  isDemoRecord: true
}, {
  id: 'demo-donor-3',
  code: 'RB-AMT-003',
  nameBn: 'মাহমুদুল হাসান',
  nameEn: 'Mahmudul Hasan',
  bloodGroup: 'B+',
  upazilaId: 'amtali',
  locationBn: 'আমতলী চৌরাস্তা, আমতলী',
  locationEn: 'Amtali Chowrasta, Amtali',
  isAvailable: true,
  lastDonationDaysAgo: 96,
  totalDonations: 4,
  maskedPhone: '019XX-XXXXXX [নমুনা সুরক্ষিত]',
  verifiedByOrgBn: 'আমতলী উপজেলা সমন্বয় কেন্দ্র (নমুনা)',
  verifiedByOrgEn: 'Amtali Upazila Coordination Cell (Sample)',
  isDemoRecord: true
}, {
  id: 'demo-donor-4',
  code: 'RB-BET-004',
  nameBn: 'সাদিয়া রহমান',
  nameEn: 'Sadia Rahman',
  bloodGroup: 'A+',
  upazilaId: 'betagi',
  locationBn: 'বেতাগী পৌর এলাকা, বেতাগী',
  locationEn: 'Betagi Municipal Area, Betagi',
  isAvailable: true,
  lastDonationDaysAgo: 132,
  totalDonations: 3,
  maskedPhone: '016XX-XXXXXX [নমুনা সুরক্ষিত]',
  verifiedByOrgBn: 'বেতাগী স্বেচ্ছাসেবী ইউনিট (নমুনা)',
  verifiedByOrgEn: 'Betagi Volunteer Unit (Sample)',
  isDemoRecord: true
}, {
  id: 'demo-donor-5',
  code: 'RB-BAM-005',
  nameBn: 'নাজমুল হুদা',
  nameEn: 'Najmul Huda',
  bloodGroup: 'AB+',
  upazilaId: 'bamna',
  locationBn: 'বামনা সদর ইউনিয়ন, বামনা',
  locationEn: 'Bamna Sadar Union, Bamna',
  isAvailable: false,
  lastDonationDaysAgo: 42,
  totalDonations: 6,
  maskedPhone: '015XX-XXXXXX [নমুনা সুরক্ষিত]',
  verifiedByOrgBn: 'বামনা উপজেলা স্বেচ্ছাসেবী দল (নমুনা)',
  verifiedByOrgEn: 'Bamna Upazila Unit (Sample)',
  isDemoRecord: true
}, {
  id: 'demo-donor-6',
  code: 'RB-PTH-006',
  nameBn: 'আরিফুল ইসলাম',
  nameEn: 'Ariful Islam',
  bloodGroup: 'B-',
  upazilaId: 'patharghata',
  locationBn: 'পাথরঘাটা বিএফডিসি ঘাট সংলগ্ন',
  locationEn: 'Near BFDC Ghat, Patharghata',
  isAvailable: true,
  lastDonationDaysAgo: 160,
  totalDonations: 4,
  maskedPhone: '017XX-XXXXXX [নমুনা সুরক্ষিত]',
  verifiedByOrgBn: 'পাথরঘাটা উপকূলীয় ইউনিট (নমুনা)',
  verifiedByOrgEn: 'Patharghata Coastal Unit (Sample)',
  isDemoRecord: true
}, {
  id: 'demo-donor-7',
  code: 'RB-TLT-007',
  nameBn: 'ফারহানা ইয়াসমিন',
  nameEn: 'Farhana Yasmin',
  bloodGroup: 'A-',
  upazilaId: 'taltali',
  locationBn: 'তালতলী বাজার, তালতলী',
  locationEn: 'Taltali Bazar, Taltali',
  isAvailable: true,
  lastDonationDaysAgo: 110,
  totalDonations: 2,
  maskedPhone: '013XX-XXXXXX [নমুনা সুরক্ষিত]',
  verifiedByOrgBn: 'তালতলী স্বেচ্ছাসেবী কেন্দ্র (নমুনা)',
  verifiedByOrgEn: 'Taltali Volunteer Cell (Sample)',
  isDemoRecord: true
}, {
  id: 'demo-donor-8',
  code: 'RB-BRG-008',
  nameBn: 'কামরুল ইসলাম',
  nameEn: 'Kamrul Islam',
  bloodGroup: 'AB-',
  upazilaId: 'barguna-sadar',
  locationBn: 'টাউন হল মোড়, বরগুনা সদর',
  locationEn: 'Town Hall Intersection, Barguna Sadar',
  isAvailable: true,
  lastDonationDaysAgo: 190,
  totalDonations: 8,
  maskedPhone: '017XX-XXXXXX [নমুনা সুরক্ষিত]',
  verifiedByOrgBn: 'দুর্লভ রক্তের গ্রুপ সমন্বয় কেন্দ্র (নমুনা)',
  verifiedByOrgEn: 'Rare Blood Group Reserve Cell (Sample)',
  isDemoRecord: true
}, {
  id: 'demo-donor-9',
  code: 'RB-PTH-009',
  nameBn: 'জাহিদুল ইসলাম',
  nameEn: 'Jahidul Islam',
  bloodGroup: 'A+',
  upazilaId: 'patharghata',
  locationBn: 'পাথরঘাটা কলেজ রোড, পাথরঘাটা',
  locationEn: 'Patharghata College Road, Patharghata',
  isAvailable: true,
  lastDonationDaysAgo: 125,
  totalDonations: 4,
  maskedPhone: '017XX-XXXXXX [নমুনা সুরক্ষিত]',
  verifiedByOrgBn: 'পাথরঘাটা উপকূলীয় ইউনিট (নমুনা)',
  verifiedByOrgEn: 'Patharghata Coastal Unit (Sample)',
  isDemoRecord: true
}, {
  id: 'demo-donor-10',
  code: 'RB-BAM-010',
  nameBn: 'নুসরাত জাহান',
  nameEn: 'Nusrat Jahan',
  bloodGroup: 'O+',
  upazilaId: 'bamna',
  locationBn: 'বামনা হাসপাতাল রোড, বামনা',
  locationEn: 'Bamna Hospital Road, Bamna',
  isAvailable: true,
  lastDonationDaysAgo: 105,
  totalDonations: 5,
  maskedPhone: '018XX-XXXXXX [নমুনা সুরক্ষিত]',
  verifiedByOrgBn: 'বামনা উপজেলা স্বেচ্ছাসেবী দল (নমুনা)',
  verifiedByOrgEn: 'Bamna Upazila Unit (Sample)',
  isDemoRecord: true
}, {
  id: 'demo-donor-11',
  code: 'RB-TLT-011',
  nameBn: 'সাইফুল ইসলাম',
  nameEn: 'Saiful Islam',
  bloodGroup: 'B+',
  upazilaId: 'taltali',
  locationBn: 'তালতলী সদর ইউনিয়ন, তালতলী',
  locationEn: 'Taltali Sadar Union, Taltali',
  isAvailable: true,
  lastDonationDaysAgo: 112,
  totalDonations: 3,
  maskedPhone: '019XX-XXXXXX [নমুনা সুরক্ষিত]',
  verifiedByOrgBn: 'তালতলী স্বেচ্ছাসেবী কেন্দ্র (নমুনা)',
  verifiedByOrgEn: 'Taltali Volunteer Cell (Sample)',
  isDemoRecord: true
}, {
  id: 'demo-donor-12',
  code: 'RB-BET-012',
  nameBn: 'মেহেদী হাসান',
  nameEn: 'Mehedi Hasan',
  bloodGroup: 'O-',
  upazilaId: 'betagi',
  locationBn: 'বেতাগী হাসপাতাল সংলগ্ন, বেতাগী',
  locationEn: 'Near Betagi Hospital, Betagi',
  isAvailable: true,
  lastDonationDaysAgo: 150,
  totalDonations: 6,
  maskedPhone: '016XX-XXXXXX [নমুনা সুরক্ষিত]',
  verifiedByOrgBn: 'বেতাগী স্বেচ্ছাসেবী ইউনিট (নমুনা)',
  verifiedByOrgEn: 'Betagi Volunteer Unit (Sample)',
  isDemoRecord: true
}];
const INITIAL_DEMO_EMERGENCY_REQUESTS = [{
  id: 'req-demo-1',
  patientName: 'নমুনা রোগী: জরুরি প্রসূতি অস্ত্রোপচার',
  bloodGroup: 'O-',
  bagsNeeded: 2,
  upazilaId: 'barguna-sadar',
  hospitalName: 'বরগুনা ২৫০ শয্যা জেনারেল হাসপাতাল',
  urgency: 'critical',
  reasonBn: 'জরুরি প্রসূতি অস্ত্রোপচার (সিজারিয়ান) [নমুনা অনুরোধ]',
  reasonEn: 'Emergency C-Section Surgery [Demo Request]',
  contactPhone: '017XX-XXXXXX [গোপনীয়তা সুরক্ষিত]',
  postedTimeBn: 'নমুনা অনুরোধ',
  postedTimeEn: 'Demo Board Example',
  isDemoRecord: true
}, {
  id: 'req-demo-2',
  patientName: 'নমুনা রোগী: থ্যালাসেমিয়ায় আক্রান্ত শিশু',
  bloodGroup: 'B+',
  bagsNeeded: 1,
  upazilaId: 'amtali',
  hospitalName: 'আমতলী ৫০ শয্যা উপজেলা স্বাস্থ্য কমপ্লেক্স',
  urgency: 'urgent',
  reasonBn: 'নিয়মিত রক্ত সঞ্চালন (থ্যালাসেমিয়া) [নমুনা অনুরোধ]',
  reasonEn: 'Monthly Thalassemia Transfusion [Demo Request]',
  contactPhone: '018XX-XXXXXX [গোপনীয়তা সুরক্ষিত]',
  postedTimeBn: 'নমুনা অনুরোধ',
  postedTimeEn: 'Demo Board Example',
  isDemoRecord: true
}, {
  id: 'req-demo-3',
  patientName: 'নমুনা রোগী: সড়ক দুর্ঘটনায় আহত রোগী',
  bloodGroup: 'A+',
  bagsNeeded: 3,
  upazilaId: 'patharghata',
  hospitalName: 'পাথরঘাটা উপজেলা স্বাস্থ্য কমপ্লেক্স',
  urgency: 'critical',
  reasonBn: 'দুর্ঘটনা-পরবর্তী অতিরিক্ত রক্তক্ষরণ [নমুনা অনুরোধ]',
  reasonEn: 'Post-accident hemorrhage [Demo Request]',
  contactPhone: '019XX-XXXXXX [গোপনীয়তা সুরক্ষিত]',
  postedTimeBn: 'নমুনা অনুরোধ',
  postedTimeEn: 'Demo Board Example',
  isDemoRecord: true
}];
const DEMO_CAMPAIGNS = [{
  id: 'camp-1',
  titleBn: 'বরগুনা সদর বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও সচেতনতা কর্মসূচি (নমুনা)',
  titleEn: 'Barguna Sadar Free Blood Grouping & Awareness Drive (Demo)',
  dateBn: 'আসন্ন কর্মসূচি · বরগুনা সরকারি কলেজ প্রাঙ্গণ',
  dateEn: 'Upcoming Schedule · Barguna Govt. College Campus',
  upazilaId: 'barguna-sadar',
  venueBn: 'বরগুনা সরকারি কলেজ মাঠ, বরগুনা সদর',
  venueEn: 'Barguna Government College Ground, Barguna Sadar',
  organizerBn: 'রক্তবন্ধন বরগুনা সদর সমন্বয় দল',
  organizerEn: 'RoktoBondhon Barguna Sadar Coordination Team',
  targetServicesBn: 'বিনামূল্যে রক্তের গ্রুপ নির্ণয়, ডিজিটাল রক্তদাতা নিবন্ধন ও থ্যালাসেমিয়া সচেতনতা',
  targetServicesEn: 'Free ABO/Rh typing, Digital Donor ID onboarding & Thalassemia counseling',
  status: 'registration-open'
}, {
  id: 'camp-2',
  titleBn: 'পাথরঘাটা উপকূলীয় যুব ও মৎস্যজীবী রক্তদান নিবন্ধন শিবির (নমুনা)',
  titleEn: 'Patharghata Coastal Youth & Community Donor Registration Camp (Demo)',
  dateBn: 'আসন্ন কর্মসূচি · পাথরঘাটা পৌর মিলনায়তন',
  dateEn: 'Upcoming Schedule · Patharghata Municipal Auditorium',
  upazilaId: 'patharghata',
  venueBn: 'পাথরঘাটা পৌর মিলনায়তন, পাথরঘাটা',
  venueEn: 'Patharghata Municipal Auditorium, Patharghata',
  organizerBn: 'রক্তবন্ধন উপকূলীয় স্বাস্থ্য নেটওয়ার্ক',
  organizerEn: 'RoktoBondhon Coastal Health Network',
  targetServicesBn: 'জরুরি রক্তদাতা তালিকাভুক্তি ও হিমোগ্লোবিন পরীক্ষা',
  targetServicesEn: 'Emergency donor enrollment & hemoglobin screening',
  status: 'upcoming'
}, {
  id: 'camp-3',
  titleBn: 'আমতলী ও তালতলী কলেজ শিক্ষার্থী স্বেচ্ছায় রক্তদান কর্মশালা (নমুনা)',
  titleEn: 'Amtali & Taltali College Youth Blood Bond Workshop (Demo)',
  dateBn: 'আসন্ন কর্মসূচি · আমতলী সরকারি কলেজ মিলনায়তন',
  dateEn: 'Upcoming Schedule · Amtali Govt. College Auditorium',
  upazilaId: 'amtali',
  venueBn: 'আমতলী সরকারি কলেজ প্রাঙ্গণ, আমতলী',
  venueEn: 'Amtali Govt. College, Amtali',
  organizerBn: 'রক্তবন্ধন স্বেচ্ছাসেবক নেটওয়ার্ক',
  organizerEn: 'RoktoBondhon Volunteer Network',
  targetServicesBn: 'তরুণ স্বেচ্ছাসেবক প্রশিক্ষণ ও হাসপাতালের রিকুইজিশন যাচাই পদ্ধতি',
  targetServicesEn: 'Youth volunteer training & first-responder request verification',
  status: 'registration-open'
}];
const DEMO_VOLUNTEER_COORDINATORS = [{
  id: 'vol-1',
  nameBn: 'সমন্বয়ক কেন্দ্র — বরগুনা সদর (নমুনা)',
  nameEn: 'Coordinator Cell — Barguna Sadar (Demo)',
  roleBn: 'হাসপাতাল রিকুইজিশন ও ক্রস-ম্যাচিং যাচাই দল',
  roleEn: 'Hospital Requisition & Cross-Matching Verification Team',
  upazilaId: 'barguna-sadar',
  responsibilityBn: 'বরগুনা ২৫০ শয্যা জেনারেল হাসপাতালে আগত রোগীদের রক্তের রিকুইজিশন যাচাই এবং উপযুক্ত রক্তদাতার সাথে সংযোগ স্থাপন।',
  responsibilityEn: 'Verifies blood requisitions at Barguna 250-Bed General Hospital and coordinates donors',
  isDemoRecord: true
}, {
  id: 'vol-2',
  nameBn: 'সমন্বয়ক কেন্দ্র — আমতলী ও তালতলী (নমুনা)',
  nameEn: 'Coordinator Cell — Amtali & Taltali (Demo)',
  roleBn: 'জরুরি সাড়াদান ও রোগী সহায়তা দল',
  roleEn: 'Emergency Response & Transit Support Unit',
  upazilaId: 'amtali',
  responsibilityBn: 'আমতলী ও তালতলী উপজেলা স্বাস্থ্য কমপ্লেক্সে জরুরি প্রসূতি ও দুর্ঘটনায় আহত রোগীদের জন্য রক্তদাতা সমন্বয়।',
  responsibilityEn: 'Coordinates urgent maternal and trauma blood needs across Amtali and Taltali',
  isDemoRecord: true
}, {
  id: 'vol-3',
  nameBn: 'সমন্বয়ক কেন্দ্র — বেতাগী ও বামনা (নমুনা)',
  nameEn: 'Coordinator Cell — Betagi & Bamna (Demo)',
  roleBn: 'ইউনিয়ন পর্যায়ে রক্তদাতা সংযোগ ও সচেতনতা দল',
  roleEn: 'Community Donor Outreach & Campaign Team',
  upazilaId: 'betagi',
  responsibilityBn: 'বেতাগী ও বামনার ইউনিয়ন পর্যায়ে নতুন স্বেচ্ছাসেবী রক্তদাতা নিবন্ধন এবং ৯০ দিনের বিরতি ট্র্যাকিং।',
  responsibilityEn: 'Manages union-level donor onboarding and 90-day recovery tracking in Betagi & Bamna',
  isDemoRecord: true
}, {
  id: 'vol-4',
  nameBn: 'সমন্বয়ক কেন্দ্র — পাথরঘাটা উপকূলীয় অঞ্চল (নমুনা)',
  nameEn: 'Coordinator Cell — Patharghata Coastal Zone (Demo)',
  roleBn: 'উপকূলীয় জরুরি রক্ত সহায়তা ইউনিট',
  roleEn: 'Coastal Emergency Blood Assistance Unit',
  upazilaId: 'patharghata',
  responsibilityBn: 'পাথরঘাটার উপকূলীয় ইউনিয়নে দুর্লভ নেগেটিভ গ্রুপের রক্তদাতা তালিকা সংরক্ষণ ও জরুরি মুহূর্তে যোগাযোগ।',
  responsibilityEn: 'Coordinates rare Rh-negative donor network across coastal Patharghata unions',
  isDemoRecord: true
}];
const DEMO_ORGANIZATIONS = [{
  id: 'org-1',
  nameBn: 'বরগুনা ২৫০ শয্যা জেনারেল হাসপাতাল (রক্ত পরিসঞ্চালন বিভাগ)',
  nameEn: 'Barguna 250-Bed General Hospital (Transfusion Dept.)',
  category: 'hospital',
  categoryLabelBn: 'সরকারি হাসপাতাল রেফারেন্স',
  categoryLabelEn: 'Public Hospital Reference',
  upazilaId: 'barguna-sadar',
  addressBn: 'হাসপাতাল সড়ক, বরগুনা সদর',
  addressEn: 'Hospital Road, Barguna Sadar',
  servicesBn: 'রক্তের গ্রুপ নির্ণয়, ক্রস-ম্যাচিং, ল্যাব স্ক্রিনিং এবং নিরাপদ রক্ত পরিসঞ্চালন সেবা।',
  servicesEn: 'Clinical blood cross-matching, screening & safe transfusion center'
}, {
  id: 'org-2',
  nameBn: 'আমতলী, পাথরঘাটা, বেতাগী, বামনা ও তালতলী উপজেলা স্বাস্থ্য কমপ্লেক্স',
  nameEn: 'Amtali & Patharghata Upazila Health Complex Network',
  category: 'hospital',
  categoryLabelBn: 'উপজেলা স্বাস্থ্য কমপ্লেক্স নেটওয়ার্ক',
  categoryLabelEn: 'Upazila Health Complex',
  upazilaId: 'amtali',
  addressBn: 'আমতলী, বেতাগী, বামনা, পাথরঘাটা ও তালতলী উপজেলা',
  addressEn: 'Amtali, Betagi, Bamna, Patharghata & Taltali Upazilas',
  servicesBn: 'উপজেলা পর্যায়ে জরুরি প্রসূতি সেবা, প্রাথমিক ট্রমা চিকিৎসা এবং রক্তের রিকুইজিশন যাচাই।',
  servicesEn: 'Upazila-level maternal emergency care and primary blood requisition verification'
}, {
  id: 'org-3',
  nameBn: 'বরগুনা জেলা স্বেচ্ছাসেবী রক্তদান সংগঠন সমন্বয় কাঠামো (নমুনা)',
  nameEn: 'Barguna Voluntary Blood Donation Organizations Alliance (Demo Pool)',
  category: 'youth-org',
  categoryLabelBn: 'স্বেচ্ছাসেবী যুব ও সামাজিক সংগঠন',
  categoryLabelEn: 'Voluntary Organization Hub',
  upazilaId: 'barguna-sadar',
  addressBn: 'বরগুনা জেলার ৬টি উপজেলায় সমন্বিত ডিজিটাল নেটওয়ার্ক',
  addressEn: 'Integrated Digital Portal across 6 Upazilas',
  servicesBn: 'স্থানীয় যুব সংগঠন, কলেজভিত্তিক ব্লাড ক্লাব এবং স্বেচ্ছাসেবকদের একীভূত মানবিক প্ল্যাটফর্ম।',
  servicesEn: 'Unified platform for local youth clubs, college societies & voluntary blood groups'
}];

  Object.assign(window.RB, { BARGUNA_UPAZILAS, DISTRICT_ARCHITECTURE_CONFIG, DEMO_DONORS, INITIAL_DEMO_EMERGENCY_REQUESTS, DEMO_CAMPAIGNS, DEMO_VOLUNTEER_COORDINATORS, DEMO_ORGANIZATIONS });
})();

// --- Source: src/utils/bloodLogic.ts ---
(function () {
const ALL_BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
const BLOOD_COMPATIBILITY_MAP = {
  'A+': {
    group: 'A+',
    nameBn: 'এ পজিটিভ (A+)',
    canDonateTo: ['A+', 'AB+'],
    canReceiveFrom: ['A+', 'A-', 'O+', 'O-'],
    plasmaCanDonateTo: ['A+', 'A-', 'O+', 'O-'],
    clinicalNoteBn: 'বাংলাদেশে অন্যতম প্রচলিত রক্তের গ্রুপ; A+ এবং AB+ রোগীদের লোহিত কণিকা দিতে পারে।',
    clinicalNoteEn: 'One of the most common blood types; red cells are compatible with A+ and AB+ recipients.'
  },
  'A-': {
    group: 'A-',
    nameBn: 'এ নেগেটিভ (A-)',
    canDonateTo: ['A+', 'A-', 'AB+', 'AB-'],
    canReceiveFrom: ['A-', 'O-'],
    plasmaCanDonateTo: ['A+', 'A-', 'O+', 'O-'],
    clinicalNoteBn: 'দুর্লভ নেগেটিভ গ্রুপ; সকল A এবং AB গ্রুপের রোগীকে রক্ত দিতে পারে।',
    clinicalNoteEn: 'Rare Rh-negative group; can donate red blood cells to both Rh+ and Rh- A and AB patients.'
  },
  'B+': {
    group: 'B+',
    nameBn: 'বি পজিটিভ (B+)',
    canDonateTo: ['B+', 'AB+'],
    canReceiveFrom: ['B+', 'B-', 'O+', 'O-'],
    plasmaCanDonateTo: ['B+', 'B-', 'O+', 'O-'],
    clinicalNoteBn: 'দক্ষিণ এশিয়ায় অত্যন্ত গুরুত্বপূর্ণ ও বহুল প্রচলিত গ্রুপ; B+ ও AB+ রোগীদের রক্ত দিতে পারে।',
    clinicalNoteEn: 'Highly prevalent across Bangladesh; donates red cells to B+ and AB+ patients.'
  },
  'B-': {
    group: 'B-',
    nameBn: 'বি নেগেটিভ (B-)',
    canDonateTo: ['B+', 'B-', 'AB+', 'AB-'],
    canReceiveFrom: ['B-', 'O-'],
    plasmaCanDonateTo: ['B+', 'B-', 'O+', 'O-'],
    clinicalNoteBn: 'অত্যন্ত দুর্লভ গ্রুপ; জরুরি প্রয়োজনে B-, B+, AB- ও AB+ রোগীদের জীবন বাঁচাতে অপরিহার্য।',
    clinicalNoteEn: 'Rare blood type; vital reserve for B-, B+, AB-, and AB+ patients during emergencies.'
  },
  'O+': {
    group: 'O+',
    nameBn: 'ও পজিটিভ (O+)',
    canDonateTo: ['O+', 'A+', 'B+', 'AB+'],
    canReceiveFrom: ['O+', 'O-'],
    plasmaCanDonateTo: ['O+', 'O-'],
    clinicalNoteBn: 'সকল পজিটিভ রক্তের গ্রুপের (A+, B+, AB+, O+) রোগীকে লোহিত কণিকা দান করতে পারে।',
    clinicalNoteEn: 'High-demand blood group; can donate red cells to all Rh-positive blood groups.'
  },
  'O-': {
    group: 'O-',
    nameBn: 'ও নেগেটিভ (O-)',
    canDonateTo: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    canReceiveFrom: ['O-'],
    plasmaCanDonateTo: ['O+', 'O-'],
    clinicalNoteBn: 'সার্বজনীন রক্তদাতা (Universal Red Cell Donor); জরুরি ট্রমা ও নবজাতকের চিকিৎসায় অপরিহার্য।',
    clinicalNoteEn: 'Universal red blood cell donor; critical for emergency trauma when patient type is unknown.'
  },
  'AB+': {
    group: 'AB+',
    nameBn: 'এবি পজিটিভ (AB+)',
    canDonateTo: ['AB+'],
    canReceiveFrom: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    plasmaCanDonateTo: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    clinicalNoteBn: 'সার্বজনীন গ্রহীতা (Universal Red Cell Recipient); যেকোনো গ্রুপের লোহিত কণিকা গ্রহণ করতে পারে।',
    clinicalNoteEn: 'Universal red cell recipient and universal plasma donor across all ABO groups.'
  },
  'AB-': {
    group: 'AB-',
    nameBn: 'এবি নেগেটিভ (AB-)',
    canDonateTo: ['AB+', 'AB-'],
    canReceiveFrom: ['AB-', 'A-', 'B-', 'O-'],
    plasmaCanDonateTo: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    clinicalNoteBn: 'সবচেয়ে দুর্লভ রক্তের গ্রুপগুলোর একটি; প্লাজমা দানে সার্বজনীনভাবে কার্যকর।',
    clinicalNoteEn: 'Rarest blood group; receives from all Rh-negative types and serves as universal plasma donor.'
  }
};
/**
 * Filters demonstration donors by exact or clinically compatible blood group,
 * Barguna upazila, availability status, and text query.
 */
function filterDonors(donors, options) {
  const {
    bloodGroup = 'ALL',
    upazilaId = 'ALL',
    onlyAvailable = false,
    includeCompatibleDonors = false,
    searchQuery = ''
  } = options;
  const allowedGroups = bloodGroup === 'ALL' ? null : includeCompatibleDonors ? BLOOD_COMPATIBILITY_MAP[bloodGroup].canReceiveFrom : [bloodGroup];
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return donors.filter(donor => {
    if (allowedGroups && !allowedGroups.includes(donor.bloodGroup)) {
      return false;
    }
    if (upazilaId !== 'ALL' && donor.upazilaId !== upazilaId) {
      return false;
    }
    if (onlyAvailable && !donor.isAvailable) {
      return false;
    }
    if (normalizedQuery) {
      const haystack = `${donor.nameBn} ${donor.nameEn} ${donor.locationBn} ${donor.locationEn} ${donor.code} ${donor.bloodGroup}`.toLowerCase();
      if (!haystack.includes(normalizedQuery)) {
        return false;
      }
    }
    return true;
  });
}
/**
 * Evaluates standard Bangladesh safe blood donation clinical eligibility criteria:
 * - Age: 18 to 60 years
 * - Weight: >= 48 kg
 * - Interval since last whole blood donation: >= 90 days (3 months)
 * - Hemoglobin: >= 12.5 g/dL (if provided)
 */
function checkDonorEligibility(input) {
  const reasonsBn = [];
  const reasonsEn = [];
  let nextEligibleInDays = 0;
  if (input.age < 18 || input.age > 60) {
    reasonsBn.push('রক্তদাতার বয়স ১৮ থেকে ৬০ বছরের মধ্যে হতে হবে।');
    reasonsEn.push('Donor age must be between 18 and 60 years.');
  }
  if (input.weightKg < 48) {
    reasonsBn.push('নিরাপদ রক্তদানের জন্য ওজন কমপক্ষে ৪৮ কেজি (১০৬ পাউন্ড) হতে হবে।');
    reasonsEn.push('Minimum body weight for safe blood donation is 48 kg.');
  }
  if (input.daysSinceLastDonation < 90) {
    nextEligibleInDays = 90 - input.daysSinceLastDonation;
    reasonsBn.push(`সর্বশেষ রক্তদানের পর ৯০ দিন পূর্ণ হতে আরও ${toBnDigits(nextEligibleInDays)} দিন বাকি।`);
    reasonsEn.push(`Must wait ${nextEligibleInDays} more day(s) to complete the 90-day recovery interval.`);
  }
  if (input.hemoglobinGdl !== undefined && input.hemoglobinGdl < 12.5) {
    reasonsBn.push('হিমোগ্লোবিন মাত্রা কমপক্ষে ১২.৫ g/dL হতে হবে।');
    reasonsEn.push('Hemoglobin level must be at least 12.5 g/dL.');
  }
  if (input.hasRecentSurgeryOrIllness) {
    reasonsBn.push('সাম্প্রতিক বড় অস্ত্রোপচার বা তীব্র অসুস্থতা থাকলে বর্তমানে রক্তদান স্থগিত রাখুন।');
    reasonsEn.push('Please defer donation if recovering from recent major surgery or acute illness.');
  }
  return {
    eligible: reasonsBn.length === 0,
    nextEligibleInDays,
    reasonsBn,
    reasonsEn
  };
}
const VALID_BARGUNA_UPAZILA_IDS = ['barguna-sadar', 'amtali', 'betagi', 'bamna', 'patharghata', 'taltali'];

/**
 * Validates that a (districtId, upazilaId) pair belongs to a valid parent-child
 * geographic hierarchy (currently Barguna District's 6 Upazilas, extensible to 64 districts).
 */
function isValidDistrictUpazilaPair(districtId, upazilaId) {
  if (districtId !== 'barguna') {
    return false;
  }
  return VALID_BARGUNA_UPAZILA_IDS.includes(upazilaId);
}
/**
 * Validates emergency blood request inputs including strict Barguna Upazila membership,
 * field length boundaries, and Bangladesh mobile format.
 */
function validateEmergencyRequest(input) {
  const trimmedPatient = (input.patientName || '').trim();
  if (trimmedPatient.length < 2 || trimmedPatient.length > 100) {
    return {
      valid: false,
      errorBn: 'রোগীর নাম ২ থেকে ১০০ অক্ষরের মধ্যে হতে হবে।',
      errorEn: 'Patient name must be between 2 and 100 characters.'
    };
  }
  if (!input.bloodGroup || !ALL_BLOOD_GROUPS.includes(input.bloodGroup)) {
    return {
      valid: false,
      errorBn: 'রক্তের গ্রুপ নির্বাচন করুন।',
      errorEn: 'Please select a valid blood group.'
    };
  }
  if (!Number.isFinite(input.bagsNeeded) || input.bagsNeeded < 1 || input.bagsNeeded > 10) {
    return {
      valid: false,
      errorBn: 'রক্তের ব্যাগের সংখ্যা ১ থেকে ১০ এর মধ্যে হতে হবে।',
      errorEn: 'Number of blood bags must be between 1 and 10.'
    };
  }
  if (!input.upazilaId || !VALID_BARGUNA_UPAZILA_IDS.includes(input.upazilaId)) {
    return {
      valid: false,
      errorBn: 'বরগুনা জেলার বৈধ উপজেলা নির্বাচন করুন।',
      errorEn: 'Please select a valid Upazila in Barguna District.'
    };
  }
  const trimmedHospital = (input.hospitalName || '').trim();
  if (trimmedHospital.length < 3 || trimmedHospital.length > 150) {
    return {
      valid: false,
      errorBn: 'হাসপাতাল বা ক্লিনিকের নাম ৩ থেকে ১৫০ অক্ষরের মধ্যে উল্লেখ করুন।',
      errorEn: 'Hospital or clinic name must be between 3 and 150 characters.'
    };
  }
  const cleanPhone = (input.contactPhone || '').replace(/[\s-]/g, '');
  const bdPhoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
  if (!bdPhoneRegex.test(cleanPhone)) {
    return {
      valid: false,
      errorBn: 'সঠিক বাংলাদেশি মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)।',
      errorEn: 'Please enter a valid 11-digit Bangladesh mobile number (e.g. 017XXXXXXXX).'
    };
  }
  return {
    valid: true
  };
}
/**
 * Validates donor registration inputs and enforces all three mandatory donor consents:
 * 1. Public masked directory listing consent
 * 2. Verified contact mediation workflow consent
 * 3. 100% voluntary, non-commercial blood donation pledge
 */
function validateDonorRegistration(input) {
  const trimmedName = (input.fullName || '').trim();
  if (trimmedName.length < 2 || trimmedName.length > 80) {
    return {
      valid: false,
      errorBn: 'অনুগ্রহ করে রক্তদাতার পূর্ণ নাম লিখুন (২–৮০ অক্ষর)।',
      errorEn: 'Please enter the donor full name (2–80 characters).'
    };
  }
  if (!input.bloodGroup || !ALL_BLOOD_GROUPS.includes(input.bloodGroup)) {
    return {
      valid: false,
      errorBn: 'বৈধ রক্তের গ্রুপ নির্বাচন করুন।',
      errorEn: 'Please select a valid blood group.'
    };
  }
  if (!input.upazilaId || !VALID_BARGUNA_UPAZILA_IDS.includes(input.upazilaId)) {
    return {
      valid: false,
      errorBn: 'বরগুনা জেলার বৈধ উপজেলা নির্বাচন করুন।',
      errorEn: 'Please select a valid Upazila in Barguna District.'
    };
  }
  const trimmedArea = (input.areaName || '').trim();
  if (trimmedArea.length < 2 || trimmedArea.length > 120) {
    return {
      valid: false,
      errorBn: 'আপনার ইউনিয়ন বা এলাকার নাম লিখুন (২–১২০ অক্ষর)।',
      errorEn: 'Please enter your union or locality in Barguna (2–120 characters).'
    };
  }
  const cleanPhone = (input.phone || '').replace(/[\s-]/g, '');
  if (!/^(?:\+?88)?01[3-9]\d{8}$/.test(cleanPhone)) {
    return {
      valid: false,
      errorBn: 'সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)।',
      errorEn: 'Please enter a valid 11-digit mobile number (e.g. 017XXXXXXXX).'
    };
  }
  if (!input.consentPublicDirectory || !input.consentContactWorkflow || !input.consentVoluntaryNoPayment) {
    return {
      valid: false,
      errorBn: 'রক্তদাতা হিসেবে নিবন্ধনের জন্য ৩টি আবশ্যিক গোপনীয়তা ও স্বেচ্ছাসেবী সম্মতিতে টিক চিহ্ন দিন।',
      errorEn: 'Please accept all 3 mandatory privacy, contact mediation, and voluntary donation consents to register.'
    };
  }
  return {
    valid: true
  };
}
const EN_TO_BN_DIGIT_MAP = {
  '0': '০',
  '1': '১',
  '2': '২',
  '3': '৩',
  '4': '৪',
  '5': '৫',
  '6': '৬',
  '7': '৭',
  '8': '৮',
  '9': '৯'
};

/**
 * Converts ASCII digits (0-9) to Bengali numerals (০-৯) so numbers embedded inside
 * Bengali sentences render seamlessly in Hind Siliguri without mid-word font switching.
 */
function toBnDigits(value) {
  return String(value).replace(/[0-9]/g, d => EN_TO_BN_DIGIT_MAP[d] ?? d);
}

/**
 * Masks a Bangladesh mobile phone number for privacy protection in demonstration
 * and public board views (e.g., "01712345678" -> "017XX-XXXX78 [নমুনা গোপনীয়তা সুরক্ষিত]").
 */
function maskBangladeshPhone(rawPhone, lang = 'bn') {
  const digits = rawPhone.replace(/\D/g, '');
  const local = digits.startsWith('880') ? digits.slice(2) : digits;
  if (local.length === 11 && local.startsWith('01')) {
    const prefix = local.slice(0, 3);
    const suffix = local.slice(-2);
    return lang === 'bn' ? `${prefix}XX-XXXX${suffix} [নমুনা গোপনীয়তা সুরক্ষিত]` : `${prefix}XX-XXXX${suffix} [Demo Masked]`;
  }
  return lang === 'bn' ? '017XX-XXXXXX [নমুনা গোপনীয়তা সুরক্ষিত]' : '017XX-XXXXXX [Demo Masked]';
}

  Object.assign(window.RB, { ALL_BLOOD_GROUPS, BLOOD_COMPATIBILITY_MAP, VALID_BARGUNA_UPAZILA_IDS, filterDonors, checkDonorEligibility, isValidDistrictUpazilaPair, validateEmergencyRequest, validateDonorRegistration, toBnDigits, maskBangladeshPhone });
})();

