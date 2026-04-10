import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Draft Age Calculator (Free, 2026) – Check Military Service Eligibility',
  description: 'Check your military draft eligibility in seconds. Free 2026 draft age calculator with US Selective Service info and international conscription data.',
  keywords:
    'draft age calculator, military draft age, selective service age, am i eligible for the draft, military draft 2026, draft age limit, selective service registration, us military draft calculator, draft lottery calculator, will there be a draft, automatic draft registration, draft age requirements, selective service status check, military conscription age, draft eligibility checker',
  keywords: [
    'draft age calculator',
    'selective service age',
    'military draft age',
    'am I draft eligible',
    'draft eligibility',
    'selective service registration',
    'military draft requirements',
  ],
  metadataBase: new URL('https://military-draft-calculator.vercel.app'),
  openGraph: {
    title: 'Draft Age Calculator (Free, 2026) – Check Military Service Eligibility',
    description: 'Check your military draft eligibility in seconds. Free 2026 draft age calculator with US Selective Service info and international conscription data.',
  keywords:
    'draft age calculator, military draft age, selective service age, am i eligible for the draft, military draft 2026, draft age limit, selective service registration, us military draft calculator, draft lottery calculator, will there be a draft, automatic draft registration, draft age requirements, selective service status check, military conscription age, draft eligibility checker',
    url: 'https://military-draft-calculator.vercel.app',
    siteName: 'Draft Age Calculator',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Draft Age Calculator ??Am I Eligible for Military Draft?',
    description: 'Calculate your draft age and eligibility for selective service.',
  keywords:
    'draft age calculator, military draft age, selective service age, am i eligible for the draft, military draft 2026, draft age limit, selective service registration, us military draft calculator, draft lottery calculator, will there be a draft, automatic draft registration, draft age requirements, selective service status check, military conscription age, draft eligibility checker',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  alternates: {
    canonical: 'https://military-draft-calculator.vercel.app',
    languages: {
      'en': 'https://military-draft-calculator.vercel.app',
      'x-default': 'https://military-draft-calculator.vercel.app',
    },
  },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="hsjncRi9cl3tz3Otd6SJKurSt_V1bZ0AKO-bdWIGeHM" />
        <meta name="google-site-verification" content="ETO59LUETFhBHTx7GMun0GscvJgzLq2iGWdeAmh3e10" />
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous" strategy="afterInteractive" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Draft Age Calculator" />
        <meta name="theme-color" content="#a855f7" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P04TH8XJJ9" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P04TH8XJJ9');
            `,
          }}
        />
              {/* BreadcrumbList Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://military-draft-calculator.vercel.app"}, {"@type": "ListItem", "position": 2, "name": "Draft Age Calculator", "item": "https://military-draft-calculator.vercel.app"}]})
        }} />
        {/* Organization & WebSite Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "name": "Draft Age Calculator", "url": "https://military-draft-calculator.vercel.app", "publisher": {"@type": "Organization", "name": "UtiliCalc Tools", "url": "https://utilicalc.vercel.app", "logo": {"@type": "ImageObject", "url": "https://military-draft-calculator.vercel.app/favicon.svg"}}, "potentialAction": {"@type": "SearchAction", "target": "https://military-draft-calculator.vercel.app/?q={search_term_string}", "query-input": "required name=search_term_string"}})
        }} />
        {/* Preconnect & DNS-Prefetch Hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        {/* Speakable Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["h1", ".keyword-seo-section p"]}})
        }} />
</head>
      <body>
        {children}
        <footer className="border-t border-white/5 py-6 text-center text-sm text-gray-500 bg-black/20 backdrop-blur-sm">
          
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Related Free Tools:</span>
                <a href="https://bmi-calculator-free.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs">Free BMI Calculator</a>
                <a href="https://take-home-pay-calculator-sandy.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs">Take-Home Pay Calculator</a>
                <a href="https://timezone-converter-ashy.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs">World Timezone Converter</a>
                <a href="https://meettime-tawny.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs">Meeting Time Zone Scheduler</a>
                <a href="https://utilicalc.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs">UtiliCalc All-in-One Tools</a>
            </div>
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-xs">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-xs">Terms of Service</a>
          </div>
          &copy; 2026 Military Draft Calculator. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
