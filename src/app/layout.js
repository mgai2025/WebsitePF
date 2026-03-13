import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

export const metadata = {
    title: 'Perfact Food | Global Trade Orchestration & Execution Platform',
    description: 'The global execution system for agricultural trade. Built by IIT/IIM alumni and MNC veterans, providing institutional-grade supply chains from India to the UK and Europe.',
    keywords: 'global trade orchestration, trade execution platform, agricultural exports India, fresh produce UK, supply chain system, institutional ag-trade, APEDA certified exporter, Perfact Food',
    authors: [{ name: 'Perfact Food' }],
    creator: 'Perfact Food',
    publisher: 'Perfact Food',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://perfactfood.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Perfact Food | Global Trade Orchestration & Execution Platform',
        description: 'The global execution system for agricultural trade. Institutional-grade supply chains built by institutional veterans.',
        url: '/',
        siteName: 'Perfact Food',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Perfact Food - Global Trade Orchestration',
            },
        ],
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Perfact Food | Global Trade Orchestration & Execution Platform',
        description: 'The global execution system for agricultural trade. Institutional-grade supply chains built by institutional veterans.',
        images: ['/images/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Favicon is automatically handled by the icon.svg file in app directory */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'Perfact Food',
                            description: 'Global orchestration of international trade execution platform',
                            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://perfactfood.com',
                            logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://perfactfood.com'}/images/logo.png`,
                            contactPoint: {
                                '@type': 'ContactPoint',
                                contactType: 'sales',
                                availableLanguage: ['English'],
                            },
                            sameAs: [
                                'https://www.linkedin.com/company/perfactfoods',
                            ],
                            areaServed: ['GB', 'DE', 'FR', 'NL', 'BE', 'IT', 'ES'],
                            priceRange: '$$',
                        }),
                    }}
                />
            </head>
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WZ5VN6RV');`}
            </Script>
            <body className="min-h-screen flex flex-col">
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WZ5VN6RV"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {children}
                <GoogleAnalytics gaId="G-7C0YGV18NZ" />
            </body>
        </html>
    )
}
