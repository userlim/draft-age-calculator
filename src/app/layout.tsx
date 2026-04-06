import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Draft Age Calculator ??Am I Eligible for Military Draft?',
  description: 'Calculate your draft age and eligibility for selective service. Check military draft requirements and registration deadlines across different countries.',
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
    title: 'Draft Age Calculator ??Am I Eligible for Military Draft?',
    description: 'Calculate your draft age and eligibility for selective service. Check military draft requirements and registration deadlines.',
    url: 'https://military-draft-calculator.vercel.app',
    siteName: 'Draft Age Calculator',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Draft Age Calculator ??Am I Eligible for Military Draft?',
    description: 'Calculate your draft age and eligibility for selective service.',
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous"></script>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Draft Age Calculator" />
        <meta name="theme-color" content="#a855f7" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P04TH8XJJ9"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P04TH8XJJ9');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <footer className="border-t border-gray-200 py-4 text-center text-sm text-gray-400">
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 text-xs">Privacy Policy</a>
            <a href="/terms" className="text-blue-600 hover:text-blue-800 text-xs">Terms of Service</a>
          </div>
          &copy; 2026 Military Draft Calculator. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
