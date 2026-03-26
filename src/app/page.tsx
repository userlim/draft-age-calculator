import { Metadata } from 'next';
import Calculator from './calculator';

export const metadata: Metadata = {
  title: 'Draft Age Calculator – Check Military Draft Eligibility',
  description:
    'Calculate your draft age and check if you are eligible for military selective service. Includes information for US and international countries with mandatory military service.',
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
      <main>
        <Calculator />
      </main>
    </>
  );
}
