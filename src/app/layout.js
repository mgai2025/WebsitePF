import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
    title: 'Perfact Foods | Agricultural Products from India to UK & Europe',
    description: 'Trusted agricultural exporter from India supplying premium fresh produce, grains, tea, coffee, and spices to UK and European markets. 50+ years of combined team expertise. APEDA certified.',
    keywords: 'agricultural exports India, fresh produce UK, Basmati rice export, Indian spices Europe, B2B agricultural supplier, APEDA certified exporter, fresh vegetables UK, premium tea export, Perfact Foods',
    authors: [{ name: 'Perfact Foods' }],
    creator: 'Perfact Foods',
    publisher: 'Perfact Foods',
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
        title: 'Perfact Foods | Agricultural Products from India',
        description: 'Trusted agricultural exporter from India supplying premium fresh produce to UK and European markets. Backed by 50+ years of combined team expertise.',
        url: '/',
        siteName: 'Perfact Foods',
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
        title: 'Perfact Foods | Agricultural Products from India',
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
            <body className="min-h-screen flex flex-col">
                {children}
                <GoogleAnalytics gaId="G-7C0YGV18NZ" />
            </body>
        </html>
    )
}
