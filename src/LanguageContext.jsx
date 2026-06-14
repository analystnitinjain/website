import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang)
    document.documentElement.setAttribute('lang', lang === 'hi' ? 'hi' : 'en')
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}

export const t = {
  en: {
    // Nav
    home: 'Home',
    aboutUs: 'About Us',
    freeContent: 'Free Content',
    subscribe: 'Subscribe',
    contactUs: 'Contact Us',

    // Footer
    privacyPolicy: 'PRIVACY POLICY',
    disclaimers: 'DISCLAIMERS',
    termsConditions: 'TERMS & CONDITIONS',
    complaintsData: 'COMPLAINTS DATA',
    cancellationRefund: 'CANCELLATION & REFUND',
    grievanceRedressal: 'GRIEVANCE REDRESSAL',
    codeOfConduct: 'CODE OF CONDUCT',
    investorCharter: 'INVESTOR CHARTER',
    faq: 'FAQ',
    contact: 'CONTACT',
    copyright: 'Copyright © 2026 Nitin Jain - All Rights Reserved',
    sebiNo: 'SEBI Research Analyst No.:',
    bseNo: 'BSE Enlistment No.:',

    // Home page
    heroTitle: 'Stay Tuned!',
    heroSub: 'We are yet to start. Thank you for your patience.',
    aboutSectionTitle: 'About Us',
    whatWeStandFor: 'What we stand for',
    sebiDesc: 'Nitin Jain is a SEBI registered research analyst entity (INH000010399).',
    moreInfoSoon: 'More information coming soon.',
    findOutMore: 'FIND OUT MORE',
    ourServices: 'Our Services',
    newProducts: 'New Products',
    mostPopular: 'Most Popular',
    bestValue: 'Best Value',
    connectWithUs: 'Connect With Us',
    newsletter: 'Newsletter',
    comingSoon: 'Coming Soon',

    // Coming Soon page
    comingSoonTitle: 'Coming Soon',
    comingSoonSub: 'We are yet to start. Thank you for your patience.',

    // Contact page
    weAreHere: 'We are right here:',
    primaryContact: 'Primary Contact/Grievances/Principal Officer:',
    sebiRegistration: 'SEBI Registration',
    bseEnlistment: 'BSE Enlistment',
    contactIntro: 'Reach out at below details with any queries about the services, feedback or any complaints.',
    officeTimings: 'Office Timings:',
    monFri: 'Monday to Friday:',
    satSun: 'Saturday & Sunday:',
    closed: 'Closed',

    // Complaints data
    lastUpdated: 'Last Updated: 30th Sep 2025',
  },
  hi: {
    // Nav
    home: 'होम',
    aboutUs: 'हमारे बारे में',
    freeContent: 'मुफ़्त सामग्री',
    subscribe: 'सब्सक्राइब करें',
    contactUs: 'संपर्क करें',

    // Footer
    privacyPolicy: 'गोपनीयता नीति',
    disclaimers: 'अस्वीकरण',
    termsConditions: 'नियम एवं शर्तें',
    complaintsData: 'शिकायत डेटा',
    cancellationRefund: 'रद्दीकरण और वापसी',
    grievanceRedressal: 'शिकायत निवारण',
    codeOfConduct: 'आचार संहिता',
    investorCharter: 'निवेशक चार्टर',
    faq: 'अक्सर पूछे जाने वाले प्रश्न',
    contact: 'संपर्क',
    copyright: 'कॉपीराइट © 2026 नितिन जैन - सर्वाधिकार सुरक्षित',
    sebiNo: 'सेबी रिसर्च एनालिस्ट नं.:',
    bseNo: 'बीएसई सूचीकरण नं.:',

    // Home page
    heroTitle: 'बने रहें!',
    heroSub: 'हम अभी शुरू नहीं हुए हैं। आपकी प्रतीक्षा के लिए धन्यवाद।',
    aboutSectionTitle: 'हमारे बारे में',
    whatWeStandFor: 'हम किसके लिए खड़े हैं',
    sebiDesc: 'नितिन जैन एक सेबी पंजीकृत रिसर्च एनालिस्ट संस्था हैं (INH000010399)।',
    moreInfoSoon: 'अधिक जानकारी जल्द आ रही है।',
    findOutMore: 'अधिक जानें',
    ourServices: 'हमारी सेवाएं',
    newProducts: 'नए उत्पाद',
    mostPopular: 'सबसे लोकप्रिय',
    bestValue: 'सर्वोत्तम मूल्य',
    connectWithUs: 'हमसे जुड़ें',
    newsletter: 'न्यूज़लेटर',
    comingSoon: 'जल्द आ रहा है',

    // Coming Soon page
    comingSoonTitle: 'जल्द आ रहा है',
    comingSoonSub: 'हम अभी शुरू नहीं हुए हैं। आपकी प्रतीक्षा के लिए धन्यवाद।',

    // Contact page
    weAreHere: 'हम यहाँ हैं:',
    primaryContact: 'प्राथमिक संपर्क/शिकायतें/प्रधान अधिकारी:',
    sebiRegistration: 'सेबी पंजीकरण',
    bseEnlistment: 'बीएसई सूचीकरण',
    contactIntro: 'सेवाओं, प्रतिक्रिया या किसी शिकायत के बारे में नीचे दिए गए विवरण पर हमसे संपर्क करें।',
    officeTimings: 'कार्यालय समय:',
    monFri: 'सोमवार से शुक्रवार:',
    satSun: 'शनिवार और रविवार:',
    closed: 'बंद',

    // Complaints data
    lastUpdated: 'अंतिम अपडेट: 30 सितंबर 2025',
  },
}
