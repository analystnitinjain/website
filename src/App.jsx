import { useState, useRef, useEffect } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { pagesByPath } from './content/siteContent.js'
import UnifiedLegalPage from './UnifiedLegalPage.jsx'
import { useLang, t } from './LanguageContext.jsx'
import { siteUrl } from './siteConfig.js'

const AUDIT_REPORT_PDF = siteUrl('/assets/ACRFY25.pdf')
const SCORES_URL = 'https://scores.sebi.gov.in'
const ODR_URL = 'https://smartodr.in'
const SEBI_RA_LIST_URL =
  'https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14'

const complaintsData = {
  monthly: {
    heading: 'Data for the Month Ending March 2026',
    columns: [
      'Sr. No.',
      'Received from',
      'Pending at the end of last month',
      'Received',
      'Resolved',
      'Total Pending',
      'Pending complaints > 3 months',
      'Average Resolution time (in days)',
    ],
    rows: [
      ['1', 'Directly from Investors', '0', '0', '0', '0', '0', '-'],
      ['2', 'SEBI (SCORES)', '0', '0', '0', '0', '0', '-'],
      ['3', 'Other Sources', '0', '0', '0', '0', '0', '-'],
    ],
    grandTotal: ['0', '0', '0', '0', '0', '-'],
  },
  monthlyTrend: {
    heading: 'Trend of Monthly Disposal of Complaints',
    columns: ['Sr. No.', 'Month', 'Carried forward from previous month', 'Received', 'Resolved', 'Pending'],
    rows: [
      ['1', 'Q4 FY2025-26', '0', '0', '0', '0'],
      ['2', 'Q3 FY2025-26', '0', '0', '0', '0'],
      ['3', 'Q2 FY2025-26', '0', '0', '0', '0'],
      ['4', 'Q1 FY2025-26', '0', '0', '0', '0'],
    ],
  },
  annualTrend: {
    heading: 'Trend of Annual Disposal of Complaints',
    columns: ['Sr. No.', 'Year', 'Carried forward from previous year', 'Received', 'Resolved', 'Pending'],
    rows: [
      ['1', '2025-26', '0', '0', '0', '0'],
      ['2', '2024-25', '0', '0', '0', '0'],
    ],
  },
}

const faqItems = [
  {
    question: 'How do I verify genuine Research Analyst so as to not fall prey to impersonation fraud?',
    answer:
      'Please reach us at analystnitinjain@gmail.com if you cannot find an answer to your question. We will get back within 24 hours.',
  },
]

function buildInvestorSections(paragraphs) {
  const idxMode = paragraphs.findIndex((p) => p.startsWith('Mode of filing the complaint with research analyst:'))
  const idxRights = paragraphs.findIndex((p) => p.startsWith('Right to Privacy and Confidentiality'))
  const idxDos = paragraphs.findIndex((p) => p.startsWith('Always deal with SEBI registered Research Analyst.'))
  const idxDonts = paragraphs.findIndex((p) => p.startsWith('Do not provide funds for investment to the Research Analyst'))
  const idxFraud = paragraphs.findIndex((p) => p.startsWith('Dear Investor,'))

  const safeSlice = (start, end) => (start >= 0 ? paragraphs.slice(start, end < 0 ? undefined : end) : [])

  return [
    { heading: 'A. Vision and Mission Statements for investors', paragraphs: safeSlice(0, 2) },
    { heading: 'B. Details of business transacted by the Research Analyst with respect to the investors', paragraphs: safeSlice(2, 9) },
    { heading: 'C. Details of services provided to investors', paragraphs: safeSlice(9, idxMode) },
    { heading: 'D. Details of grievance redressal mechanism and how to access it', paragraphs: safeSlice(idxMode, idxRights) },
    { heading: 'E. Rights of Investors', paragraphs: safeSlice(idxRights, idxDos) },
    { heading: "F. Expectations from investors (Do's)", paragraphs: safeSlice(idxDos, idxDonts) },
    { heading: "Don'ts", paragraphs: safeSlice(idxDonts, idxFraud) },
    { heading: 'Beware of Frauds', paragraphs: safeSlice(idxFraud, -1) },
  ].filter((s) => s.paragraphs.length > 0)
}

function buildTermsSections(paragraphs) {
  return [
    { heading: 'Social Media Disclaimer', paragraphs: paragraphs.slice(0, 9) },
    { heading: 'Registration and License', paragraphs: paragraphs.slice(9, 11) },
    { heading: 'Copyright & No Retransmission of Information', paragraphs: paragraphs.slice(11, 14) },
    { heading: 'Liability Disclaimer', paragraphs: paragraphs.slice(14, 18) },
    { heading: 'Delay in Services', paragraphs: paragraphs.slice(18, 19) },
    { heading: 'Information Disclaimer', paragraphs: paragraphs.slice(19, 25) },
    { heading: 'Links to Third Party Sites', paragraphs: paragraphs.slice(25, 26) },
    { heading: 'Indemnification and Legal Terms', paragraphs: paragraphs.slice(26, 32) },
    { heading: 'Standard Disclaimer', paragraphs: paragraphs.slice(32) },
  ].filter((s) => s.paragraphs.length > 0)
}

function DataTable({ title, table }) {
  return (
    <section className="page-section legal-layout">
      <h2>{title ?? table.heading}</h2>
      <div className="table-wrap" tabIndex={0} role="region" aria-label={title ?? table.heading}>
        <table className="policy-table">
          <thead>
            <tr>
              {table.columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.join('-')}>
                {row.map((cell, idx) => (
                  <td key={`${cell}-${idx}`}>{cell}</td>
                ))}
              </tr>
            ))}
            {table.grandTotal ? (
              <tr>
                <td colSpan={2}>
                  <strong>Grand Total</strong>
                </td>
                {table.grandTotal.map((cell, idx) => (
                  <td key={`total-${idx}`}>
                    <strong>{cell}</strong>
                  </td>
                ))}
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function AuditReportPage() {
  return (
    <main className="page audit-report-page">
      <h1>Audit Report FY24-25</h1>
      <p className="page-note">Auditor&apos;s Report for FY24-25</p>
      <section className="page-section pdf-section">
        <iframe
          src={AUDIT_REPORT_PDF}
          title="Auditor's Report for FY24-25"
          className="pdf-viewer"
        />
        <div className="pdf-download-section">
          <a
            href={AUDIT_REPORT_PDF}
            download="ACRFY25.pdf"
            className="download-button"
            target="_blank"
            rel="noreferrer"
          >
            Download Auditor&apos;s Report (PDF)
          </a>
        </div>
      </section>
    </main>
  )
}

function ComplaintsAndAuditPage() {
  return (
    <main className="page">
      <h1>Complaints and Audit</h1>
      <section className="page-section legal-layout">
        <p>
          We are pleased to inform you that in full compliance with SEBI regulations, our audit for FY24-25 is duly
          completed. You may access the{' '}
          <a href={AUDIT_REPORT_PDF} target="_blank" rel="noreferrer">
            Auditor&apos;s Report for FY24-25 (PDF)
          </a>
          {' '}or view it on the{' '}
          <a href={siteUrl('/audit-report-fy24-25')} target="_blank" rel="noreferrer">
            audit report page
          </a>
          .
        </p>
        <p>
          <strong>Nitin Jain</strong> maintains highest level of internal governance, code of ethics and regulatory
          compliances and will continue to do so.
        </p>
      </section>
      <DataTable table={complaintsData.monthly} />
      <DataTable table={complaintsData.monthlyTrend} />
      <DataTable table={complaintsData.annualTrend} />
    </main>
  )
}

function FaqAccordion() {
  return (
    <section className="page-section legal-layout">
      <h2>Frequently Asked Questions</h2>
      {faqItems.map((item) => (
        <details key={item.question} className="faq-item" open>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </section>
  )
}

function LegalSections({ sections }) {
  return sections.map((section) => (
    <section key={section.heading} className="page-section legal-layout">
      <h2>{section.heading}</h2>
      {section.paragraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </section>
  ))
}

function LangSwitcher() {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const options = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिंदी' },
  ]
  const current = options.find((o) => o.code === lang)

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        className="lang-btn"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <span className="lang-globe" aria-hidden="true">🌐</span>
        <span>{current.native}</span>
        <span className="lang-caret" aria-hidden="true">▾</span>
      </button>
      {open && (
        <ul className="lang-dropdown" role="listbox" aria-label="Language options">
          {options.map((opt) => (
            <li
              key={opt.code}
              role="option"
              aria-selected={lang === opt.code}
              className={lang === opt.code ? 'lang-option active' : 'lang-option'}
              onClick={() => { setLang(opt.code); setOpen(false) }}
            >
              {opt.native}
              <span className="lang-label-en"> — {opt.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function SiteHeader() {
  const { lang } = useLang()
  const tr = t[lang]

  const navLinks = [
    { to: '/', label: tr.home },
    { to: '/coming-soon', label: tr.aboutUs },
    { to: '/coming-soon', label: tr.freeContent },
    { to: '/coming-soon', label: tr.subscribe },
    { to: '/contact', label: tr.contactUs },
  ]

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        {navLinks.map((item) => (
          <Link key={item.label} to={item.to}>
            {item.label}
          </Link>
        ))}
        <LangSwitcher />
      </nav>
    </header>
  )
}

function SiteFooter() {
  const { lang } = useLang()
  const tr = t[lang]

  const footerLinks = [
    [
      { path: '/legal#disclosures-privacy', label: tr.privacyPolicy },
      { href: 'https://docs.google.com/document/d/1b3ox0fGR4L9l8uClB07HAyGf2m8wNMsDhp-9-GOs13o/edit?tab=t.0', label: tr.disclaimers, external: true },
      { path: '/legal#terms-conditions', label: tr.termsConditions },
      { path: '/complaints-data', label: tr.complaintsAndAudit }
    ],
    [
      { path: '/legal#cancellation-refunds', label: tr.cancellationRefund }
    ],
    [
      { path: '/legal#grievance-redressal', label: tr.grievanceRedressal },
      { path: '/legal#accessibility-grievance', label: tr.accessibilityGrievance },
      { path: '/legal#code-of-conduct', label: tr.codeOfConduct },
      { path: '/legal#investor-charter', label: tr.investorCharter },
      { path: '/legal#valid-upi', label: tr.validUpi },
      { path: '/legal#faq', label: tr.faq },
      { path: '/contact', label: tr.contact }
    ]
  ]

  return (
    <footer className="site-footer">
      <p className="footer-copy">{tr.copyright}</p>
      <div className="footer-meta">
        <p>
          {tr.sebiNo}{' '}
          <a href={SEBI_RA_LIST_URL} target="_blank" rel="noreferrer">
            INH000010399
          </a>
        </p>
        <p>
          {tr.bseNo}{' '}
          <a href={siteUrl('/contact')} target="_blank" rel="noreferrer">
            5637
          </a>
        </p>
      </div>
      {footerLinks.map((row, idx) => (
        <div key={`row-${idx}`} className="site-footer-grid row-layout">
          {row.map((link) => (
            link.external ? (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ) : (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            )
          ))}
        </div>
      ))}
    </footer>
  )
}

function HomePage() {
  const { lang } = useLang()
  const tr = t[lang]

  const services = [
    { titleKey: 'newProducts', image: '/home/service-new.jpg' },
    { titleKey: 'mostPopular', image: '/home/service-popular.jpg' },
    { titleKey: 'bestValue', image: '/home/service-best.jpg' },
  ]

  return (
    <main className="page home-page">
      <section className="hero-banner">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>{tr.heroTitle}</h1>
          <span className="section-line" />
          <p>{tr.heroSub}</p>
        </div>
      </section>

      <section className="home-block about-block">
        <h2>{tr.aboutSectionTitle}</h2>
        <span className="section-line" />
        <div className="about-grid-container">
          <div className="about-grid">
            <div className="about-image-wrap">
              <img src="/home/about-analytics.jpg" alt="Business analytics" className="about-image" />
            </div>
            <div>
              <h3>{tr.whatWeStandFor}</h3>
              <span className="section-line" />
              <p>{tr.sebiDesc}</p>
              <p>{tr.moreInfoSoon}</p>
              <button type="button" className="cta-btn">
                {tr.findOutMore}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-block services-block">
        <h2>{tr.ourServices}</h2>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.titleKey} className="service-card">
              <img src={service.image} alt={tr[service.titleKey]} className="service-image" />
              <h3>{tr[service.titleKey]}</h3>
              <span>View {tr[service.titleKey]}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="home-block social-block">
        <h2>{tr.connectWithUs}</h2>
        <div className="social-row">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm10.75 1.5a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" />
            </svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="social-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 3h4.4l4.2 6 4.9-6H21l-7.1 8.4L21.6 21h-4.4l-4.7-6.6L7 21H3l7.3-8.8L3 3Z" />
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="social-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23 12a35.6 35.6 0 0 0-.5-5.4 3 3 0 0 0-2.1-2.1C18.6 4 12 4 12 4s-6.6 0-8.4.5A3 3 0 0 0 1.5 6.6 35.6 35.6 0 0 0 1 12a35.6 35.6 0 0 0 .5 5.4 3 3 0 0 0 2.1 2.1C5.4 20 12 20 12 20s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1A35.6 35.6 0 0 0 23 12ZM10 15.5v-7l6 3.5-6 3.5Z" />
            </svg>
          </a>
        </div>
      </section>

      <section className="home-block odr-block">
        <h2>{tr.odrTitle}</h2>
        <span className="section-line" />
        <p>{tr.odrSub}</p>
        <div className="odr-links">
          <a href={ODR_URL} target="_blank" rel="noreferrer" className="odr-link">
            <strong>{tr.odrPortal}</strong>
            <span>smartodr.in</span>
          </a>
          <a href={SCORES_URL} target="_blank" rel="noreferrer" className="odr-link">
            <strong>{tr.scoresPortal}</strong>
            <span>scores.sebi.gov.in</span>
          </a>
        </div>
      </section>

      <section className="newsletter-banner">
        <div className="newsletter-overlay" />
        <div className="newsletter-content">
          <h2>{tr.newsletter}</h2>
          <span className="section-line" />
          <p>{tr.comingSoon}</p>
        </div>
      </section>
    </main>
  )
}

function ComingSoonPage() {
  const { lang } = useLang()
  const tr = t[lang]
  return (
    <main className="page coming-soon-page">
      <div className="coming-soon-container">
        <h1>{tr.comingSoonTitle}</h1>
        <span className="section-line" />
        <p>{tr.comingSoonSub}</p>
        <div className="coming-soon-info">
          <p>{tr.sebiDesc.replace('(INH000010399)', '')}<span className="sebi-number">(INH000010399)</span>.</p>
          <p>{tr.moreInfoSoon}</p>
        </div>
      </div>
    </main>
  )
}

function ContactPage() {
  const { lang } = useLang()
  const tr = t[lang]
  return (
    <main className="page contact-page">
      <section className="contact-section">
        <h1>{tr.weAreHere}</h1>
        <span className="section-line" />

        <div className="contact-officer">
          <h2>{tr.primaryContact}</h2>
          <p className="officer-name">Nitin Jain</p>
        </div>

        <div className="contact-registrations">
          <div className="registration-item">
            <h3>{tr.sebiRegistration}</h3>
            <p>INH000010399</p>
          </div>
          <div className="registration-item">
            <h3>{tr.bseEnlistment}</h3>
            <p>5637</p>
          </div>
        </div>

        <p className="contact-intro">{tr.contactIntro}</p>

        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon location">📍</span>
            <p>433, sector 5, Gurgaon, Haryana, 122017</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon phone">📞</span>
            <p>+91 98105 43689</p>
          </div>
          <div className="contact-item">
            <span className="contact-icon email">✉️</span>
            <a href="mailto:analystnitinjain@gmail.com">analystnitinjain@gmail.com</a>
          </div>
        </div>

        <div className="office-timings">
          <h3>{tr.officeTimings}</h3>
          <p>{tr.monFri} <strong>9:30 AM to 4:00 PM</strong></p>
          <p>{tr.satSun} <span className="closed">{tr.closed}</span></p>
        </div>
      </section>
    </main>
  )
}

function ContentPage({ page, path }) {
  if (path === '/') {
    return <HomePage />
  }

  if (path === '/contact') {
    return <ContactPage />
  }

  if (path === '/coming-soon') {
    return <ComingSoonPage />
  }

  if (path === '/complaints-data') {
    return <ComplaintsAndAuditPage />
  }

  if (path === '/faq') {
    return (
      <main className="page">
        <h1>{page.title}</h1>
        <FaqAccordion />
      </main>
    )
  }

  if (path === '/investor-charter') {
    return (
      <main className="page">
        <h1>{page.title}</h1>
        <LegalSections sections={buildInvestorSections(page.sections[0]?.paragraphs ?? [])} />
      </main>
    )
  }

  if (path === '/terms-conditions') {
    return (
      <main className="page">
        <h1>{page.title}</h1>
        <LegalSections sections={buildTermsSections(page.sections[0]?.paragraphs ?? [])} />
      </main>
    )
  }

  return (
    <main className="page">
      <h1>{page.title}</h1>
      {page.sections.map((section) => (
        <section key={section.heading} className="page-section">
          <h2>{section.heading}</h2>
          {section.paragraphs.map((text) => (
            text === 'Detailed Disclosures Available Here' ? (
              <p key={text}>
                <a
                  href="https://docs.google.com/document/d/1akl8osgM00YncnYbWGfHV0oVEhSFJ2b-sUFSq5KOi04/edit?tab=t.0"
                  target="_blank"
                  rel="noreferrer"
                >
                  {text}
                </a>
              </p>
            ) : (
              <p key={text}>{text}</p>
            )
          ))}
        </section>
      ))}
    </main>
  )
}

function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <Routes>
        <Route path="/legal" element={<UnifiedLegalPage />} />
        <Route path="/audit-report-fy24-25" element={<AuditReportPage />} />
        <Route path="/audit-report" element={<Navigate to="/audit-report-fy24-25" replace />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="/contact" element={<ContentPage page={{ title: 'Contact Us', sections: [] }} path="/contact" />} />
        <Route path="/about" element={<Navigate to="/coming-soon" replace />} />
        <Route path="/free-content" element={<Navigate to="/coming-soon" replace />} />
        <Route path="/subscribe" element={<Navigate to="/coming-soon" replace />} />
        {Object.entries(pagesByPath).map(([path, page]) => (
          path === '/about' || path === '/free-content' || path === '/subscribe' ? null :
          <Route key={path} path={path} element={<ContentPage page={page} path={path} />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteFooter />
    </div>
  )
}

export default App
