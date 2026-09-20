import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { siteUrl } from './siteConfig.js'

export default function UnifiedLegalPage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.hash])

  return (
    <main className="page unified-legal">
      <section id="disclosures-privacy" className="page-section">
        <h2>Disclosures & Privacy Policy</h2>
        <p>Nitin Jain offers independent equity research services to retail clients as well as corporate clients on subscription basis.</p>
        <p>Use of the information herein is at one's own risk. This is not an offer to sell or solicitation to buy any securities and Nitin Jain (owner of website, analystnitinjain.com and email: analystnitinjain@gmail.com) will not be liable for any losses incurred or investment(s) made or decisions taken/or not taken based on the information provided herein. Information contained herein does not constitute a personal recommendation or take into account the particular investment objectives, financial situations, or needs of individual investors. Before acting on any recommendation, investors should consider whether it is suitable for their particular circumstances and, if necessary, seek an independent professional advice. All content and information is provided on an "As is" basis by analystnitinjain.com. Information herein is believed to be reliable but analystnitinjain.com does not warrant its completeness or accuracy and expressly disclaims all warranties and conditions of any kind, whether express or implied. analystnitinjain.com, its proprietor may hold shares in the company/ies discussed herein.</p>
        
        <h3>Privacy Policy</h3>
        <ul>
          <li>We take KYC documents from our clients, i.e. name, email, phone number, PAN Card, State before they sign up for our services. This is taken through a third party partner.</li>
          <li>We retain records relating to the services that we provide so that we are better able to assist our clients with their needs and to comply with professional guidelines or requirements of law.</li>
          <li>We maintain physical, electronic, and procedural safeguards that comply with federal and state regulation/ act to guard our clients' non-public personal information.</li>
          <li>We protect the confidentiality of clients' Mobile Number, Name, and Address & Email Id to prohibit unlawful disclosure of our data, and limit access to our clients' data in the same manner as we do all other non-public personal information.</li>
          <li>Documents and information containing any non public personal information are safeguarded and not disclosed to anyone, unless authorized by the client or required by law.</li>
          <li>We restrict access of client data only to those employees and partners who are involved in offering and administering the products and services we offer.</li>
          <li>We train our employees in the importance of maintaining confidentiality and customer privacy.</li>
          <li>We have agreements with our partners which to safeguard client confidentiality and customer privacy.</li>
          <li>We destroy, erase or make unreadable documentation containing Clients data and/or other non-public personal information prior to its disposal.</li>
          <li>We continuously monitor and make adjustments to this Client Personal Information Protection Policy as necessary.</li>
        </ul>
        <p>Nitin Jain has a contractual arrangement with vendors whereby the vendors provide technology solutions and related back-end infrastructure along with support for back-office related operations & processes. The vendors do not provide any investment advice or recommendation nor does it make any claim of returns or performance with respect to any advice or recommendation.</p>
        <p>For any questions regarding this privacy policy, please contact: analystnitinjain@gmail.com</p>
      </section>

      <section id="terms-conditions" className="page-section">
        <h2>Terms & Conditions</h2>
        <h3>Social Media Disclaimer</h3>
        <p>I, Nitin Jain, am registered with SEBI as an Individual Research Analyst under the registration number INH000010399, effective from Oct 27, 2022.</p>
        <p>I offer paid research services to my clients based on this certification. Opinions expressed otherwise regarding specific securities are not investment advice and shall not be treated as recommendations. Neither I nor my associates/ employees shall be liable for any losses incurred based on such opinions.</p>
        <p>Any matter displayed outside a research report is purely for Illustrative, Knowledge and Informational purposes and shall not be treated as advice or opinion of any kind. The content presented should not be construed as investment advice unless explicitly stated in a client-specific research report. I or my employees/associates shall not be held liable/responsible in any manner whatsoever for any losses the readers may incur due to acting upon this content.</p>
        <p>I make no warranties or guarantees regarding the accuracy, completeness, or timeliness of the information such information, including data such as news, prices, and analysis. In no event, shall I be liable to any person for any decision made or action taken in reliance upon the information provided by me.</p>
        <p>Paid clients receive detailed research reports and detailed analysis of all my research. For stock/company-specific investment recommendations, please refer Services Page or email me at analystnitinjain@gmail.com. Any opinion expressed outside a research report by me otherwise does not constitute a recommendation to buy/ sell and is for illustrative and for general informational purposes.</p>
        <p>Investment in the securities market is subject to market risks. Read all the related documents carefully before investing.</p>
        <p>Registration granted by SEBI and certification from NISM in no way guarantee the performance of the intermediary or provide any assurance of returns to investors.</p>
        <p>The securities quoted outside a research report are for illustration only and are not recommendatory.</p>
        <p>By visiting our site you are agreeing to be bound by the following terms and conditions. We may change these terms and conditions at any time. Your continued use of www.analystnitinjain.com means that you accept any new or modified terms and conditions that we come up with. The term www.analystnitinjain.com is used through this entire Terms of Use document to refer to the website, its owners and the employees and associates of the owner.</p>

        <h3>Registration</h3>
        <p>By registering, you certify that all information you provide, now or in the future, is accurate and complete. www.analystnitinjain.com reserves the right, in its sole discretion, to deny you access to this website or any portion thereof without notice for the following reasons: (a) Immediately by www.analystnitinjain.com for any unauthorized access or use by you; (b) Immediately by www.analystnitinjain.com if you assign or transfer (or attempt the same) any rights granted to you under this Agreement; (c) Immediately, if you violate any of the other terms and conditions of this User Agreement. I agree to receive periodic research reports and to be added to the Telegram channel/s for updates and further communications.</p>

        <h3>License</h3>
        <p>www.analystnitinjain.com, hereby grants you a limited, non-exclusive, non-assignable and non-transferable license to access www.analystnitinjain.com and to join the Telegram channel/s, provided and expressly conditioned upon your agreement that all such access and use shall be governed by all of the terms and conditions set forth in this User Agreement.</p>

        <h3>Copyright & No Retransmission of Information</h3>
        <p>www.analystnitinjain.com, along with the Telegram channel/s, as well as the design and information contained in this site and channel, are the valuable and exclusive properties of www.analystnitinjain.com, and nothing in this Agreement shall be construed as transferring or assigning any such ownership rights to you or any other person or entity. All information on www.analystnitinjain.com and the Telegram channel/s is the proprietary and confidential property of www.analystnitinjain.com and cannot be repeated for any reason outside www.analystnitinjain.com and the Telegram channel/s.</p>
        <p>You agree not to repeat or rebroadcast in any way any of the recommendations made on www.analystnitinjain.com or on the Telegram channel/s for any reason whatsoever. You agree that if you do repeat or re-post any of www.analystnitinjain.com's or the Telegram channel/s recommendations by any means, you will be liable for actual and punitive damages as determined by www.analystnitinjain.com and additional damages to be determined by an Indian court of Law.</p>
        <p>You may not resell, redistribute, broadcast or transfer the information or use the information in a searchable, machine-readable database unless separately and specifically authorized in writing by www.analystnitinjain.com prior to such use. You may not rent, lease, sublicense, distribute, transfer, copy, reproduce, publicly display, publish, adapt, store or time-share www.analystnitinjain.com, the Telegram channel/s, any part thereof, or any of the information received or accessed therefrom to or through any other person or entity unless separately and specifically authorized in writing by www.analystnitinjain.com prior to such use. In addition, you may not remove, alter or obscure any copyright, legal or proprietary notices in or on any portions of www.analystnitinjain.com or the Telegram channel/s without prior written authorization except as set forth herein, any other use of the information contained in this site or channel requires the prior written consent of www.analystnitinjain.com and may require a separate fee.</p>

        <h3>Liability Disclaimer</h3>
        <p>You expressly agree that use of the website and the Telegram channel/s is at your sole risk. The contents, information, software, products, features, and services published on this website and the Telegram channel may include inaccuracies or typographical errors. Changes are periodically added to the contents herein. www.analystnitinjain.com and/or its respective suppliers may make improvements and/or changes in this website and the Telegram channel at any time.</p>
        <p>This website and the Telegram channel may be temporarily unavailable from time to time due to required maintenance, telecommunications interruptions, or other disruptions. www.analystnitinjain.com (and its owners, suppliers, consultants, advertisers, affiliates, partners, employees or any other associated entities, all collectively referred to as associated entities hereafter) shall not be liable to user or member or any third party should www.analystnitinjain.com exercise its right to modify or discontinue any or all of the contents, information, software, products, features and services published on this website and the Telegram channel.</p>
        <p>www.analystnitinjain.com/or its respective associated entities make no representations about the suitability of the contents, information, software, products, features and services contained on this website and the Telegram channel for any purpose. All such contents, information, software, products, features and services are provided "as is" without warranty of any kind. www.analystnitinjain.com and/or its associated entities hereby disclaim all warranties and conditions with regard to these contents, information, software, products, features and services, including all implied warranties and conditions of merchantability, fitness for a particular purpose, title, non-infringement, and availability.</p>
        <p>In no event shall www.analystnitinjain.com and/or its associated entities be liable for any direct, indirect, punitive, incidental, special or consequential damages arising out of or in any way connected with the use of this website or the Telegram channel, or with the delay or inability to use this website or the Telegram channel, or for any contents, information, software, products, features and services obtained through this website or the Telegram channel, or otherwise arising out of the use of this website or the Telegram channel, whether based on contract, tort, strict liability or otherwise, even if www.analystnitinjain.com or any of its associated entities has been advised of the possibility of damages.</p>

        <h3>Delay in Services</h3>
        <p>Neither www.analystnitinjain.com (including its proprietor and/or its employees, affiliates, agents, representatives or subcontractors) nor the Telegram channel/s shall be liable for any loss or liability resulting, directly or indirectly, from delays or interruptions due to electronic or mechanical equipment failures, telephone interconnect problems, defects, weather, strikes, walkouts, fire, acts of God, riots, armed conflicts, acts of war, or other like causes. www.analystnitinjain.com shall have no responsibility to provide you access to www.analystnitinjain.com or the Telegram channel/s while interruption of www.analystnitinjain.com or the Telegram channel is due to any such cause shall continue.</p>

        <h3>Information Disclaimer</h3>
        <p>You acknowledge that the information provided through www.analystnitinjain.com and the Telegram channel/s is compiled from sources, which are beyond the control of www.analystnitinjain.com and the Telegram channel/s. Though such information is recognized by the parties to be generally reliable, the parties acknowledge that inaccuracies may occur and www.analystnitinjain.com and the Telegram channel/s do not warrant the consistency or suitability of the information.</p>
        <p>For this reason, as well as the possibility of human and mechanical errors and other factors, you acknowledge that www.analystnitinjain.com and the Telegram channel/s are provided to you on an "as is, with all faults" basis. www.analystnitinjain.com expressly disclaims any and all warranties, whether express, oral, implied, statutory or otherwise, of any kind to the users and/or any third party, including any implied warranties of consistency, timeliness, completeness, merchantability and fitness for a particular purpose, as well as any warranties arising by virtue of custom of trade or course of dealing and any implied warranties of title or non-infringement.</p>
        <p>In addition, www.analystnitinjain.com, in providing the information, makes no endorsement of any particular security, market participant, or brokerage through both the website and the Telegram channel. Further, www.analystnitinjain.com does not represent or warrant that it or the Telegram channel/s will meet your requirements or is suitable for your needs.</p>
        <p>Under this User Agreement, you assume all risk of errors and/or omissions in www.analystnitinjain.com and the Telegram channel/s, including the transmission or translation of information. You assume full responsibility for implementing sufficient procedures and checks to satisfy your requirements for the consistency and suitability of www.analystnitinjain.com and the Telegram channel/s, including the information, and for maintaining any means, which you may require for the reconstruction of lost data or subsequent manipulations or analyses of the information under the User Agreement.</p>
        <p>You agree that www.analystnitinjain.com (including its and their proprietor, employees, affiliates, group companies agents, representatives or subcontractors) and the Telegram channel/s shall not in any event be liable for any special, incidental or consequential damages arising out of the use or inability to use www.analystnitinjain.com and the Telegram channel/s for any purpose whatsoever.</p>
        <p>www.analystnitinjain.com, the Telegram channel/s and its affiliates, associates, officers, proprietor, employees and agents shall have no liability in tort, contract, or otherwise to user and/or any third party.</p>

        <h3>Links to Third Party Sites</h3>
        <p>The links in this site and the Telegram channel/s will allow you to leave www.analystnitinjain.com and the Telegram channel/s respectively. The linked sites are not under the control of www.analystnitinjain.com or the Telegram channel/s. www.analystnitinjain.com has not reviewed, nor approved these sites and is not responsible for the contents or omissions of any linked site or any links contained in a linked site, whether accessed via the website or the Telegram channel. The inclusion of any linked site does not imply endorsement by www.analystnitinjain.com or the Telegram channel/s of the site. Third party links to www.analystnitinjain.com or the Telegram channel/s shall be governed by a separate agreement.</p>

        <h3>Indemnification</h3>
        <p>You shall indemnify, defend and hold harmless www.analystnitinjain.com and the Telegram channel/s (including its and their officers, proprietor, employees, affiliates, group companies, agents, representatives or subcontractors) from any and all claims and losses imposed on, incurred by or asserted as a result of or related to: (a) your access and use of www.analystnitinjain.com and the Telegram channel/s; (b) any non-compliance by user with the terms and conditions hereof; or (c) any third party actions related to users receipt and use of the information, whether authorized or unauthorized, through www.analystnitinjain.com or the Telegram channel/s. Any clause declared invalid shall be deemed severable and not affect the validity or enforceability of the remainder. These terms may only be amended in a writing signed by www.analystnitinjain.com.</p>

        <h3>Conflicting Terms</h3>
        <p>If there is any conflict between this User Agreement and other documents, this User Agreement shall govern, whether such order or other documents is prior to or subsequent to this User Agreement, or is signed or acknowledged by any director, officer, employee, representative or agent of www.analystnitinjain.com.</p>

        <h3>Attorney's Fees</h3>
        <p>If www.analystnitinjain.com takes action (by itself or through its associate companies) to enforce any of the provisions of this User Agreement, including collection of any amounts due hereunder, www.analystnitinjain.com shall be entitled to recover from you (and you agree to pay), in addition to all sums to which it is entitled or any other relief, at law or in equity, reasonable and necessary attorney's fees and any costs of any litigation.</p>

        <h3>Vendor Contracts</h3>
        <p>Analyst Nitin Jain has a contractual arrangement with vendors whereby the vendors provides technology solutions and related back-end infrastructure along with support for back-office related operations & processes. The vendors do not provide any investment advice or recommendation nor does it make any claim of returns or performance with respect to any advice or recommendation. More details in detailed disclosure at end.</p>

        <h3>Entire Agreement</h3>
        <p>This User Agreement constitutes the entire agreement between the parties, and no other agreement, written or oral, exists between you and www.analystnitinjain.com and the Telegram channel/s. By using the Information on www.analystnitinjain.com and the Telegram channel/s, you assume full responsibility for any and all gains and losses, financial, emotional or otherwise, experienced, suffered or incurred by you. www.analystnitinjain.com and the Telegram channel/s do not guarantee the consistency, completeness or timeliness of, or otherwise endorse in any way, the views, opinions or recommendations expressed in the Information, do not give investment advice, and do not advocate the purchase or sale of any security or investment by you or any other individual. The Information is not intended to provide tax, legal or investment advice, which you should obtain from your professional advisor prior to making any investment of the type discussed in the Information. The Information does not constitute a solicitation by the information providers, www.analystnitinjain.com, the Telegram channel/s or other of the purchase or sale of securities. The service is provided "as is," without warranty of any kind, either express or implied, including without limitation, any warranty for information, data, services, uninterrupted access, or products provided through or in connection with the service. Specifically, www.analystnitinjain.com and the Telegram channel/s disclaim any and all warranties, including, but not limited to: (i) Any warranties concerning the availability, consistency, usefulness, or content of information, products or services; and (ii) Any warranties of title, warranty of non-infringement and warranties of merchantability or fitness for a particular purpose. This disclaimer of liability applies to any damages or injury caused by any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction or unauthorized access to, alteration of, or use of record, whether for breach of contract, tort, negligence, or under any other cause of action. Neither www.analystnitinjain.com, the Telegram channel/s nor any of its employees, agents, successors, assignees, affiliates, group companies or content or service providers shall be liable to you or other third party for any direct, indirect, incidental, special or consequential damages arising out of use of service or inability to gain access to or use the service or out of any breach of any warranty. Because some countries do not allow the exclusion or limitation of liability for consequential or incidental damages, the above limitation may not apply to you. In such countries, the respective liability of www.analystnitinjain.com, the Telegram channel/s, its employees, agents, successors, assignees, affiliates, group companies and content or service providers respective liability is limited to the amount provided under said law. Further, you agree and understand that cancellation and refunds are governed by the Cancellation & Refunds Policy on this website, and that you should carefully consider whether our services are able to meet your needs.</p>

        <h3>Termination</h3>
        <p>This User Agreement and the license rights granted hereunder shall remain in full force and effect unless terminated or cancelled for any of the following reasons: (a) immediately by www.analystnitinjain.com or the Telegram channel/s for any unauthorized access or use by you (b) immediately by www.analystnitinjain.com or the Telegram channel/s if you assign or transfer (or attempt the same) any rights granted to you under this Agreement; (c) immediately, if you violate any of the other terms and conditions of this User Agreement. Termination or cancellation of this Agreement shall not affect any right or relief to which www.analystnitinjain.com or the Telegram channel/s may be entitled, at law or in equity. Upon termination of this User Agreement, all rights granted to you will terminate and revert to www.analystnitinjain.com and the Telegram channel/s. Except as set forth herein, regardless of the reason for cancellation or termination of this User Agreement, the fee charged if any for access to www.analystnitinjain.com and the Telegram channel/s shall be subject to the Cancellation & Refunds Policy on this website.</p>

        <h3>Dispute Settlement</h3>
        <p>All disputes, differences and questions of any nature which at any time arise between the parties to this agreement out of the construction of or concerning anything contained in or arising out of this agreement or as to the rights, duties or liabilities of the parties thereto and including any question of whether such dealings, transactions MOA, or contracts have been entered into or not, shall be referred to the sole Arbitrator under the Arbitration and conciliation Act, 1996. The sole Arbitrator shall be appointed by the proprietor of www.analystnitinjain.com. The Arbitration Proceedings shall be held at Delhi, India. The Place of Arbitration will be at Delhi, India. The laws prevailing in India shall alone apply to the Arbitration Proceedings between the parties.</p>

        <h3>Jurisdiction</h3>
        <p>Both the Parties agree that all claims, differences and disputes, including any agreements, contracts and transactions made with reference to anything incidental thereto or in pursuance thereof or relating to their validity, construction, interpretation, fulfilment or the rights, obligations and liabilities of the parties thereto and including any question of whether such dealings, transactions MOA, or contracts have been entered into or not, shall be subject to the exclusive jurisdiction of the Courts of Delhi only.</p>

        <h3>Cancellation & Refunds</h3>
        <p>
          While we are yet to start onboarding clients, whenever we do onboard the clients would be free to stop
          subscription. In such a scenario pro-rata refund would be offered within 30 days of application.
        </p>

        <h3>Standard Disclaimer</h3>
        <ul>
          <li>I, Nitin Jain (proprietor of analystnitinjain), am registered with SEBI as Individual Research Analyst, in accordance of which I provide Research Analyst services to my clients.</li>
          <li>I am not affiliated with any other intermediaries or receive any brokerage or commission from any third party.</li>
          <li>The SEBI has issued no penalties/directions under the SEBI Act or any other regulatory body.</li>
          <li>I do not recommend any stock broker or other intermediary to a client, nor do I receive any consideration by way of remuneration or compensation or in any other form whatsoever from the stock broker or another intermediary.</li>
          <li>Investment in equity shares has its own risks. Sincere efforts have been made to present the right investment perspective. The information contained herein is based on analysis and on sources that I consider reliable. I, however, do not vouch for the consistency or the completeness thereof. This material is for personal information and I am not responsible for any loss incurred due to it & take no responsibility whatsoever for any financial profits or loss which may arise from the recommendations above.</li>
          <li>I do not provide any promise or assurance of favourable view for a particular industry or sector or business group in any manner. The investor is requested to take into consideration all the risk factors.</li>
          <li>The information and views in this website & all the services I provide are believed to be reliable, but I do not accept any responsibility (or liability) for errors of fact or opinion. Users have the right to choose the product/s that suits them the most.</li>
          <li>I or any person related might be holding positions in the stocks recommended.</li>
          <li>The research recommendations are provided to all my clients who are entitled to receive the research reports. Any Client (Paid or Unpaid), Any third party or anyone else have no rights to forward or share my calls or SMS or Reports or Any Information Provided by me to/with anyone (through any medium) which is received directly or indirectly by them. If found so, then serious legal actions can be taken. For questions, contact me at analystnitinjain@gmail.com.</li>
          <li>I ensure that the individuals employed as research analyst are separate from other employees who are performing sales trading, dealing, corporate finance advisory or any other activity that may affect the independence of my research report/recommendations. However, these individuals may receive a feedback from sales or trading personnel of brokerage division to ascertain the impact of research report/recommendations.</li>
          <li>I ensure that if a client wants an opinion on a specific position, such suggestion/view under any circumstances shall be considered as an opinion (not advice). I am not liable for any losses whatsoever the client may incur in accepting this opinion.</li>
          <li>I do not have any association in any manner with any issuer of products/securities on either www.analystnitinjain.com or the Telegram channel/s; this ensures that there are no actual or potential conflicts of interest. This also ensures that objectivity or independence in the carrying on research services is not compromised.</li>
          <li>Investment in securities market are subject to market risks. Read all the related documents carefully before investing.</li>
          <li>Registration granted by SEBI and certification from NISM is no way guarantee performance of the intermediary or provide any assurance of returns to investors.</li>
          <li>By accessing www.analystnitinjain.com, joining the Telegram channel/s, or any of its associate/group sites, you have read, understood, and agree to be legally bound by the terms of the disclaimer and user agreement.</li>
          <li>I have taken due care and caution in the compilation of data for the website (www.analystnitinjain.com) and the Telegram channel/s. Users are advised to check with other certified experts before taking any investment decision. However, I do not guarantee the consistency, adequacy or completeness of any information and am not responsible for any errors or omissions or for the results obtained from the use of such information. I especially states that I have no financial liability whatsoever to any user on account of the use of information provided on my website.</li>
          <li>For any questions regarding these terms, please contact: analystnitinjain@gmail.com</li>
        </ul>
      </section>

      <section id="cancellation-refunds" className="page-section">
        <h2>Cancellation & Refunds Policy</h2>
        <p>
          While we are yet to start onboarding clients, whenever we do onboard the clients would be free to stop
          subscription. In such a scenario pro-rata refund would be offered within 30 days of application.
        </p>
        <p>
          For any questions regarding this policy, please contact:{' '}
          <a href="mailto:analystnitinjain@gmail.com">analystnitinjain@gmail.com</a>
        </p>
      </section>

      <section id="grievance-redressal" className="page-section">
        <h2>Grievance Redressal</h2>
        <p>Here are the steps a client can follow in case of grievance or feedback:</p>
        <p><strong>1.</strong> If you are not satisfied with my services or would like a discussion on the matter or pass on a feedback, please reach out on the details mentioned in contact us section through either email or phone or whatsapp. You will receive first response within 24 hours seeking further details if any. Rest assured that your complaint will be tried for best possible resolution or atleast any update within 7 working days after thoroughly revisiting all aspects of your submission.</p>
        <p><strong>2.</strong> Under the unfortunate circumstances wherein if you do not hear back as per above timelines or your complaint is not resolved to satisfaction, you may refer your complaint to the regulator through below mechanisms established by The Securities and Exchange Board of India (SEBI).</p>
        <ul>
          <li>
            SCORES -{' '}
            <a href="https://scores.sebi.gov.in" target="_blank" rel="noreferrer">
              scores.sebi.gov.in
            </a>
          </li>
          <li>
            ODR Portal -{' '}
            <a href="https://smartodr.in" target="_blank" rel="noreferrer">
              smartodr.in
            </a>
          </li>
        </ul>
      </section>

      <section id="accessibility-grievance" className="page-section">
        <h2>Grievance Redressal Mechanism for Accessibility Issues</h2>
        <p>
          In compliance with the SEBI circular, Nitin Jain (SEBI Registered Research Analyst, INH000010399) has
          established a dedicated grievance redressal mechanism to address accessibility-related complaints from
          persons with disabilities (PwDs).
        </p>

        <h3>Dedicated Channels</h3>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:analystnitinjain@gmail.com">analystnitinjain@gmail.com</a>
          </li>
          <li>
            <strong>Helpline:</strong>{' '}
            <a href="tel:+919810543689">+91 98105 43689</a> (operational Mon–Fri, 9:30 AM – 4:00 PM)
          </li>
          <li>
            <strong>Web Form / Contact:</strong>{' '}
            <a href={siteUrl('/contact')} target="_blank" rel="noreferrer">
              {siteUrl('/contact')}
            </a>
          </li>
        </ul>

        <h3>Process</h3>
        <ul>
          <li>All accessibility-related grievances will be acknowledged within 2 working days.</li>
          <li>Resolution/response will be provided within 15 working days.</li>
          <li>Complex issues requiring longer timelines will be communicated clearly to the complainant.</li>
        </ul>

        <h3>Escalation Matrix for accessibility issues</h3>
        <ul>
          <li>
            <strong>Level 1:</strong> Mr. Nitin Jain, Nodal Officer / Principal Officer, Email:{' '}
            <a href="mailto:analystnitinjain@gmail.com">analystnitinjain@gmail.com</a>, Contact:{' '}
            <a href="tel:+919810543689">+91 98105 43689</a>
          </li>
          <li>
            <strong>Level 2:</strong> Mr. Nitin Jain, Compliance Officer, Email:{' '}
            <a href="mailto:analystnitinjain@gmail.com">analystnitinjain@gmail.com</a>, Contact:{' '}
            <a href="tel:+919810543689">+91 98105 43689</a>
          </li>
        </ul>
      </section>

      <section id="code-of-conduct" className="page-section">
        <h2>Code of Conduct</h2>
        <p>Nitin Jain is a SEBI Registered Research Analyst vide Registration Number INH000010399 dated on October 27, 2022</p>
        <p>In accordance to Regulation 24 (2) of the SEBI (Research Analyst) Regulations, 2014, I shall maintain the following the Code of Conduct:</p>
        <ul>
          <li><strong>Honesty and Good Faith:</strong> I shall act honestly and in good faith.</li>
          <li><strong>Diligence:</strong> I shall act with due skill, care and diligence and shall ensure that the research report is prepared after thorough analysis.</li>
          <li><strong>Conflict of Interest:</strong> I shall effectively address conflict of interest which may affect the impartiality of research analysis and research report and shall make appropriate disclosures to address the same.</li>
          <li><strong>Insider Trading or front running:</strong> I shall not engage in insider trading or front running of my own research report.</li>
          <li><strong>Confidentiality:</strong> I shall maintain confidentiality of report till the report is made public.</li>
          <li><strong>Professional Standard:</strong> I am engaged in research analysis and shall observe high professional standard while preparing research report.</li>
          <li><strong>Compliance:</strong> I shall comply with all regulatory requirements applicable to the conduct of its business activities.</li>
          <li><strong>Responsibility of senior management:</strong> I shall bear primary responsibility of senior management for ensuring the maintenance of appropriate standards of conduct and adherence to proper procedures.</li>
        </ul>
      </section>

      <section id="investor-charter" className="page-section">
        <h2>Investor Charter</h2>
        <h3>A. Vision and Mission Statements for investors</h3>
        <p><strong>Vision:</strong> Invest with knowledge & safety.</p>
        <p><strong>Mission:</strong> Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.</p>

        <h3>B. Details of business transacted by the Research Analyst with respect to the investors</h3>
        <ul>
          <li>To publish research report based on the research activities of the RA</li>
          <li>To provide an independent unbiased view on securities.</li>
          <li>To offer unbiased recommendation, disclosing the financial interests in recommended securities.</li>
          <li>To provide research recommendation, based on analysis of publicly available information and known observations.</li>
          <li>To conduct audit annually</li>
          <li>To ensure that all advertisements/ marketing/ promotional material are in adherence to the provisions of the Advertisement Code for Research Analysts.</li>
          <li>To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place.</li>
        </ul>

        <h3>C. Details of services provided to investors (No Indicative Timelines)</h3>
        <ul>
          <li>Onboarding of Clients</li>
          <li>Sharing of terms and conditions of research services</li>
          <li>Completing KYC of clients</li>
          <li>Disclosure to Clients:
            <ul>
              <li>To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any</li>
              <li>To disclose the extent of use of Artificial Intelligence tools in providing research services</li>
              <li>To disclose, while distributing a third party research report, any material conflict of interest of such third party research provider or provide web address that directs a recipient to the relevant disclosures</li>
              <li>To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.</li>
            </ul>
          </li>
          <li>To distribute research reports and recommendations to the clients without discrimination.</li>
          <li>To maintain confidentiality w.r.t publication of the research report until made available in the public domain.</li>
          <li>To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information</li>
          <li>To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines</li>
          <li>To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services</li>
          <li>To treat all clients with honesty and integrity</li>
          <li>To ensure confidentiality of information shared by investors unless such information is required to be provided in furtherance of discharging legal obligations or investors have provided specific consent to share such information.</li>
        </ul>

        <h3>D. Details of grievance redressal mechanism and how to access it</h3>
        <p>Investor can lodge complaint/grievance against Research Analyst in the following ways:</p>
        <p>Mode of filing the complaint with research analyst: In case of any grievance/complaint, an investor should approach the concerned research analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance.</p>
        <p>Mode of filing the complaint on SCORES or with Research Analyst Administration and Supervisory Body (RAASB):</p>
        <ul>
          <li>
            SCORES 2.0 (a web based centralized grievance redressal system of SEBI for facilitating effective grievance
            redressal in time-bound manner) (
            <a href="https://scores.sebi.gov.in" target="_blank" rel="noreferrer">
              https://scores.sebi.gov.in
            </a>
            )
          </li>
          <li>Two level review for complaint/ grievance against Research Analyst:
            <ul>
              <li>First review done by designated body (RAASB)</li>
              <li>Second review done by SEBI</li>
            </ul>
          </li>
          <li>Email to designated email ID of RAASB</li>
        </ul>
        <p>
          If the Investor is not satisfied with the resolution provided by the Market Participants, then the investor has
          the option to file the complaint/ grievance on{' '}
          <a href="https://smartodr.in" target="_blank" rel="noreferrer">
            SMART ODR
          </a>{' '}
          platform for its resolution through online conciliation or arbitration.
        </p>
        <p>With regard to physical complaints, investors may send their complaints to:</p>
        <address style={{ fontStyle: 'normal', paddingLeft: '20px' }}>
          Office of Investor Assistance and Education,<br />
          Securities and Exchange Board of India,<br />
          SEBI Bhavan. Plot No. C4-A, 'G' Block,<br />
          Bandra-Kurla Complex, Bandra (E),<br />
          Mumbai – 400 051.
        </address>

        <h3>E. Rights of Investors</h3>
        <ul>
          <li>Right to Privacy and Confidentiality</li>
          <li>Right to Transparent Practices</li>
          <li>Right to fair and Equitable Treatment</li>
          <li>Right to Adequate Information</li>
          <li>Right to Initial and Continuing Disclosure
            <ul>
              <li>Right to receive information about all the statutory and regulatory disclosures</li>
            </ul>
          </li>
          <li>Right to Fair & True Advertisement</li>
          <li>Right to Awareness about Service Parameters and Turnaround Times</li>
          <li>Right to be informed of the timelines for each service</li>
          <li>Right to be Heard and Satisfactory Grievance Redressal</li>
          <li>Right to have timely redressal</li>
          <li>Right to Exit from Financial product or service</li>
          <li>Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services</li>
          <li>Additional Rights to vulnerable consumers
            <ul>
              <li>Right to get access to services in a suitable manner even if differently abled</li>
            </ul>
          </li>
          <li>Right to provide feedback on the financial products and services used</li>
          <li>Right against coercive, unfair, and one-sided clauses in financial agreements</li>
          <li>Right to enforceability and holding the Research Analyst responsible for monitoring, enforcing investor rights.</li>
        </ul>

        <h3>F. Expectations from the investors (Responsibilities of investors)</h3>
        <h4>Do's</h4>
        <ul>
          <li>Always deal with SEBI registered Research Analyst.</li>
          <li>Ensure that the Research Analyst has a valid registration certificate.</li>
          <li>Check for SEBI registration number. Please refer to the list of all SEBI registered Research Analysts, which is available on SEBI website at the following link: https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&amp;intmId=14</li>
          <li>Always pay attention towards disclosures made in the research reports before investing.</li>
          <li>Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments. You may make payment of fees through Centralized Fee Collection Mechanism (CeFCoM) of RAASB if research analyst has opted for the mechanism.</li>
          <li>Before buying securities or applying for public offers, check for the research recommendation provided by your Research Analyst.</li>
          <li>Ask all relevant questions and clear your doubts with your Research Analyst before acting on the recommendation.</li>
          <li>Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high risk financial products and services.</li>
          <li>Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst.</li>
          <li>Always be aware that you have the right to provide feedback to your Research Analyst in respect of the services received.</li>
          <li>Always be aware that you will not be bound by any clause, prescribed by the Research Analyst, which is contravening any regulatory provisions.</li>
          <li>Inform SEBI about Research Analysts offering assured or guaranteed returns.</li>
          <li>Report any fraudulent persons or social media handles.</li>
        </ul>

        <h4>Don'ts</h4>
        <ul>
          <li>Do not provide funds for investment to the Research Analyst</li>
          <li>Don't fall prey to luring advertisements or market rumors.</li>
          <li>Do not get attracted to limited-period discounts or other incentives, gifts, etc., offered by the Research Analyst.</li>
          <li>Do not share login credentials and passwords of your trading and demat accounts with the Research Analyst.</li>
        </ul>

        <h3>Beware of Frauds</h3>
        <h4>Important Notice Regarding Fraudulent Activities</h4>
        <p>Dear Investor,</p>
        <p>I am writing to inform you of a serious issue regarding several fraudulent individuals misusing my SEBI registration number, Aadhar card, PAN card to carry out illegal activities, including defrauding unsuspecting individuals. These fraudsters are use my details to create false associations and make unauthorized transactions in my name. Please be assured that these actions are not connected to me in any way, and I do not authorize anyone to act on my behalf.</p>
        <p>Please note, I am not responsible for any such fraudulent activities. These actions are being carried out without my knowledge or authorization. I do not authorize anyone to use my personal or professional details in any manner.</p>
        <p>To protect yourself and others from such fraud, I urge you to:</p>
        <ul>
          <li><strong>Verify credentials:</strong> Always ensure that you are interacting with me through my official communication channels. Be cautious of unsolicited calls, messages, or emails claiming to represent me.</li>
          <li><strong>Report suspicious activities:</strong> If you come across any suspicious activity or communications using my SEBI number or personal details, please do not hesitate to report them immediately.</li>
          <li><strong>Check SEBI's official records:</strong> You can verify my SEBI registration and other official details through the SEBI website or by contacting SEBI directly.</li>
        </ul>
        <p>If you have encountered any fraudulent activities or if you believe these scammers have targeted you, first, you can make Admin of this website aware by reaching on email on analystnitinjain@gmail.com or whatsapp or direct call on +919810543689.</p>
        <p>Further, I strongly encourage you to file a complaint with SEBI and cybercell or any such authorities to take appropriate action against the fraudster. Below are the steps to complain with SEBI:</p>
        <h4>How to File a Complaint with SEBI:</h4>
        <ol>
          <li>
            <strong>Visit the SEBI Complaint Redress System (SCORES):</strong> Go to the official SEBI website{' '}
            <a href="https://scores.sebi.gov.in" target="_blank" rel="noreferrer">
              https://scores.sebi.gov.in
            </a>
            .
          </li>
          <li><strong>Register or log in:</strong> Create an account or log in if you already have one.</li>
          <li><strong>File the Complaint:</strong> Enter all necessary details about the fraudulent activity.</li>
          <li><strong>Reference Documents:</strong> Attach any supporting documents that could help authorities to investigate the matter.</li>
        </ol>
        <p>You can also directly contact SEBI at their official helpline number: 022-26449000 or via email at sebi@sebi.gov.in.</p>
        <p>Please remain vigilant and report any such fraudulent activities to help us protect others from these scams. Thank you for your attention and cooperation.</p>
        <p>Sincerely,<br />Nitin Jain</p>
      </section>

      <section id="valid-upi" className="page-section">
        <h2>SEBI Validated @Valid UPI Handles</h2>
        <p>
          A <strong>@valid UPI handle</strong> is an exclusive, standardized, and verified UPI ID introduced by the Securities and Exchange Board of India (SEBI) for collection of payments by registered intermediaries (including Research Analysts like Nitin Jain), starting <strong>October 1st, 2025</strong>. It includes a username, a category tag (e.g., brk for brokers, mf for mutual funds, ra for Research Analysts), the mandatory @valid identifier, and the bank&apos;s name. To verify a @valid handle, check for a white &quot;thumbs-up&quot; icon inside a green triangle on the payment confirmation screen or QR code, which visually confirms authenticity.
        </p>
        <p>
          SEBI has made this initiative mandatory for all intermediaries to further enhance investor protection and provide investors with a secure, verified and transparent payment experience. Using @valid UPI handles for payments will ensure that your payments are always directed to verified SEBI-registered entities.
        </p>

        <h3>Our @Valid UPI Handle</h3>
        <p>We are pleased to inform you that we have already received a @Valid UPI handle for our bank account.</p>
        <div className="legal-upi-card">
          <h3>Research Analyst</h3>
          <img
            src={siteUrl('/assets/upi-qr-code.png')}
            alt="RA Valid UPI QR Code"
            className="legal-upi-qr-image"
          />
          <div className="legal-upi-id">nitinjain.ra@validhdfc</div>
          <p className="legal-upi-note">For UPI payment directly to our bank account</p>
        </div>

        <h3>Please Note</h3>
        <ul>
          <li>These @valid UPI IDs are only for payment towards research services, i.e. Subscription to any of our products.</li>
          <li>You do <strong>NOT</strong> need to remember or note them down. We will provide you with these whenever you need to make a payment to us.</li>
          <li>These UPI IDs may change in future if we change our payment gateway provider or bank account.</li>
          <li>While it is not mandatory to use UPI for making payments, SEBI strongly advises all individual investors to actively use the &quot;@valid&quot; UPI handles and verify payment details through SEBI Check before transferring funds.</li>
          <li>SEBI clarified that the @valid UPI handle is an additional payment option, not a replacement. Investors can still use NEFT, RTGS, IMPS, etc., but are encouraged to prefer @valid for added security.</li>
        </ul>

        <h3>What This Means for You?</h3>
        <ul>
          <li><strong>UPI Payments:</strong> Whenever you make payments for our subscriptions using UPI, you will now see the option to pay to our @Valid UPI handle.</li>
          <li><strong>Bank Transfer:</strong> Direct bank transfer mode will also remain available as before though we recommend you use UPI payments.</li>
          <li><strong>Seamless Experience:</strong> This change is purely at the backend – there is no additional step required from your side. The payment experience remains the same.</li>
        </ul>

        <h3>How to Verify @Valid UPI?</h3>
        <p>The handle follows a specific pattern:</p>
        <p><code>[Username/Business Name].[Category Tag]@valid[Bank Name]</code></p>
        <ul>
          <li><strong>Username/Business Name:</strong> The intermediary&apos;s name.</li>
          <li><strong>Category Tag:</strong> A short code for the type of intermediary, such as <code>ra</code> for Research Analysts, <code>brk</code> for brokers or <code>mf</code> for mutual funds.</li>
          <li><strong>@valid:</strong> A unique identifier that confirms the handle is officially verified.</li>
          <li><strong>Bank Name:</strong> The name of the bank associated with the handle.</li>
        </ul>
        <p>
          On the payment confirmation screen or QR code, look for a <strong>white thumbs-up icon inside a green triangle</strong>, which visually confirms authenticity.
        </p>

        <h3>SEBI Check</h3>
        <p>
          SEBI Check enables investors to verify the authenticity of UPI IDs and linked bank account details, either by scanning a QR code or manually entering the UPI ID/bank account details. This will give you an additional and simple way to confirm that your payments are always directed to a genuine SEBI-registered intermediary.
        </p>
        <p>
          <a href="https://siportal.sebi.gov.in/intermediary/sebi-check" target="_blank" rel="noreferrer">
            Visit SEBI Check Portal →
          </a>
        </p>

        <h3>Frequently Asked Questions (for Investors)</h3>
        <p><strong>Q. Is it compulsory for investors to use the new handle only?</strong></p>
        <p>
          Investors can choose their preferred mode of payment, such as UPI, IMPS, NEFT, RTGS, or Cheques. If an investor opts to use UPI for payment to registered intermediaries, then they have to do so only using the new UPI IDs allotted to registered intermediaries.
        </p>
        <p><strong>Q. What should I check while making payment using the new UPI IDs / QR Code?</strong></p>
        <p>Investors need to keep the following things into consideration:</p>
        <ul>
          <li>The UPI ID should contain the category tag such as <code>ra</code> for Research Analysts.</li>
          <li>The new and exclusive handle <code>@valid</code> should be present, followed by the bank name.</li>
          <li>On the confirmation screen, the app should show a white thumbs-up icon inside a green triangle.</li>
          <li>The QR code will have a white thumbs-up icon inside a green triangle. It will also display the UPI ID just below the QR code.</li>
        </ul>
        <p><strong>Q. Do investors also need to obtain new UPI handles to transact in the securities market?</strong></p>
        <p>No. The new UPI IDs are only for intermediaries to obtain. Investors can continue to use their existing UPI IDs.</p>
        <p><strong>Q. Whom to approach if my transaction / payment fails with the new UPI ID?</strong></p>
        <p>
          The secure validated UPI ID of intermediaries will use the same banking channel as the earlier generic UPI handles. In case of any technical difficulty, investors are requested to approach their respective bank.
        </p>

        <h3>Further Information</h3>
        <p>
          For complete details on standardised, validated and exclusive UPI IDs for payment collection by SEBI-registered intermediaries, please refer to the SEBI circular:
        </p>
        <p>
          <a href="https://www.sebi.gov.in/legal/circulars/jun-2025/adoption-of-standardised-validated-and-exclusive-upi-ids-for-payment-collection-by-sebi-registered-intermediaries-from-investors_94535.html" target="_blank" rel="noreferrer">
            SEBI Circular (Jun 11, 2025) — Adoption of Standardised, Validated and Exclusive UPI IDs →
          </a>
        </p>

        <h3>Your Security is Our Priority</h3>
        <p>
          Always verify the @valid UPI handle before making payments. Look for the green triangle with thumbs-up icon and use SEBI Check portal for additional verification.
        </p>
      </section>

      <section id="faq" className="page-section">
        <h2>Frequently Asked Questions</h2>
        <p>
          Please reach us at{' '}
          <a href="mailto:analystnitinjain@gmail.com">analystnitinjain@gmail.com</a> if you cannot find an answer to
          your question. We will get back within 24 hours.
        </p>
        <details className="faq-item" open>
          <summary>How do I verify genuine Research Analyst so as to not fall prey to impersonation fraud?</summary>
          <p>
            Please click here and refer to &quot;Important Notice Regarding Fraudulent Activities&quot;. Ensure the
            correct registered RA details including contact number on SEBI website.
          </p>
        </details>
        <details className="faq-item" open>
          <summary>What is the cancellation and refund policy?</summary>
          <p>
            While we are yet to start onboarding clients, whenever we do onboard the clients would be free to stop
            subscription. In such a scenario pro-rata refund would be offered within 30 days of application.
          </p>
        </details>
      </section>
    </main>
  )
}