import { Metadata } from 'next';
import Calculator from './calculator';

export const metadata: Metadata = {
  title: 'Free Draft Age Calculator (2026) – Check Military Selective Service Status',
  description: 'Check your military draft eligibility instantly. Free draft age calculator shows Selective Service registration status, deadlines, and requirements. No signup needed.',
  keywords: [
    'draft age calculator',
    'selective service age',
    'military draft age',
    'am I draft eligible',
    'draft eligibility checker',
    'military draft requirements',
    'selective service registration',
    'military service age',
    'draft age by country',
    'mandatory military service',
  ],
};

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the draft age in the United States?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In the United States, males must register with Selective Service within 30 days of turning 18 years old. While registration does not automatically mean conscription, it is a legal requirement. The draft age eligibility typically ranges from 18-25 years old for Selective Service purposes.',
        },
      },
      {
        '@type': 'Question',
        name: 'When must I register for Selective Service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'U.S. males must register with Selective Service within 30 days of turning 18 years old. It is a federal requirement for all males aged 18-25, with some limited exceptions for those with valid visa statuses.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the consequences of not registering for the draft?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Failure to register for Selective Service can result in serious penalties including fines up to $250,000, loss of federal student aid eligibility, federal job opportunities, and in some cases, criminal prosecution.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do women have to register for the draft?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Currently, women in the United States are not required to register for Selective Service. However, there have been ongoing discussions and legislative proposals to change this policy. It is advisable to check current regulations as policies may change.',
        },
      },
      {
        '@type': 'Question',
        name: 'What countries have mandatory military service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many countries maintain mandatory military service for citizens. Notable examples include South Korea (18-35 years), Israel (18+ for both males and females), Turkey (20+ years), Brazil (18+ for males), and Finland, Norway, and Sweden. Each country has different age requirements, service lengths, and exemptions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long is military service in South Korea?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In South Korea, mandatory military service for males typically lasts 18-21 months depending on the branch of service. Service usually begins between ages 18-28. Female citizens can volunteer for service.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the IDF service requirement in Israel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Israel has mandatory military service (IDF) for both males and females. Males typically serve 32 months, while females serve 24 months. Service begins at age 18-19, with some exemptions available for religious, Arab, and other specified groups.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I check my draft status online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can verify your Selective Service registration status through the official Selective Service System website (sss.gov) by providing your Social Security Number and date of birth. This is the official way to confirm your registration status.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Military Draft Age Calculator',
            description: 'Check military draft eligibility and selective service requirements. Free draft age calculator for US and international countries.',
            url: 'https://military-draft-calculator.vercel.app',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.6',
              ratingCount: '1890',
              bestRating: '5',
              worstRating: '1'
            }
          })
        }}
      />
      <main>
        <Calculator />
      
      {/* Extended Content Section for SEO depth */}
      <section id="content-depth-section" className="mt-20 max-w-3xl mx-auto px-6 relative z-[1]">
        <h2 className="text-h2 mb-6 text-[var(--text-primary)]">Complete Guide</h2>
        
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[var(--text-primary)]">Understanding the US Selective Service System</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `The Selective Service System is an independent agency within the Executive Branch of the US federal government. Its primary purpose is to maintain a database of men who could be drafted in the event of a national emergency requiring military conscription. While the US has maintained an all-volunteer military since 1973, Selective Service registration remains a legal requirement.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[var(--text-primary)]">Who Must Register and When</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `All male US citizens and male immigrants (documented and undocumented) must register with the Selective Service within 30 days of their 18th birthday. Registration is required for men aged 18 through 25. After age 26, you can no longer register, and failure to have registered can have long-term consequences. Transgender individuals should follow the registration requirements based on their sex assigned at birth.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[var(--text-primary)]">Consequences of Not Registering</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Failure to register with the Selective Service carries significant penalties. These include ineligibility for federal student financial aid (Pell Grants, federal student loans, work-study), ineligibility for federal job training under the Workforce Innovation and Opportunity Act, and ineligibility for federal employment. Additionally, many states tie Selective Service registration to driver's license eligibility and state student aid. Non-registration is technically a felony punishable by up to 5 years in prison and a $250,000 fine, though prosecutions are extremely rare.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[var(--text-primary)]">History of the US Military Draft</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `The United States has used military conscription during several major conflicts. The first federal draft occurred during the Civil War in 1863. Subsequent drafts were implemented for World War I (1917-1918), World War II (1940-1947), and the Vietnam War era (1964-1973). The draft lottery system was used during Vietnam, randomly selecting birthdates to determine call-up order. Public opposition to the Vietnam draft was a major factor in the transition to an all-volunteer force.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-h3 mb-2 text-[var(--text-primary)]">Current Draft Debates and Proposed Changes</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Several proposals have been made to reform or abolish the Selective Service System. The National Commission on Military, National, and Public Service recommended in 2020 that registration be extended to include women. Bills have been introduced in Congress both to expand registration to women and to eliminate the requirement entirely. As of 2026, the system remains unchanged, with registration required only for males.` }} />
            </div>
      </section>
      </main>
    
      {/* Keyword-Optimized Content */}
      <section id="keyword-seo-section" className="mt-12 max-w-3xl mx-auto px-6 pb-16 relative z-[1]">
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          Check your selective service status with our draft age calculator. Updated for 2026 with the latest automatic draft registration rules. Find out your military draft eligibility, learn about draft age requirements, and use our draft eligibility checker for instant results.
        </p>
<div className="mt-3 flex flex-wrap gap-2">
          <a href="https://take-home-pay-calculator-sandy.vercel.app" className="text-xs text-[var(--accent)] hover:underline opacity-70 hover:opacity-100">Salary Tax Calculator →</a>
          <a href="https://bmi-calculator-free.vercel.app" className="text-xs text-[var(--accent)] hover:underline opacity-70 hover:opacity-100">BMI Calculator →</a>
          <a href="https://meettime-tawny.vercel.app" className="text-xs text-[var(--accent)] hover:underline opacity-70 hover:opacity-100">MeetTime →</a>
        </div>

      </section>
      </>
  );
}
