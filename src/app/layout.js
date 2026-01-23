import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

export const metadata = {
    title: 'Perfact Food | Agricultural Products from India to UK & Europe',
    description: 'Trusted agricultural exporter from India supplying premium fresh produce, grains, tea, coffee, and spices to UK and European markets. 50+ years of combined team expertise. APEDA certified.',
    keywords: 'agricultural exports India, fresh produce UK, Basmati rice export, Indian spices Europe, B2B agricultural supplier, APEDA certified exporter, fresh vegetables UK, premium tea export, Perfact Food',
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
        title: 'Perfact Food | Agricultural Products from India',
        description: 'Trusted agricultural exporter from India supplying premium fresh produce to UK and European markets. Backed by 50+ years of combined team expertise.',
        url: '/',
        siteName: 'Perfact Food',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Perfact Foods - Agricultural Products from India',
            },
        ],
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Perfact Food | Agricultural Products from India',
        description: 'Trusted agricultural exporter from India supplying premium fresh produce to UK and European markets.',
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
                            name: 'Perfact Foods',
                            description: 'Premium agricultural exporter from India to UK and European markets',
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
