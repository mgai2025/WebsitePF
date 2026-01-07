import './globals.css'

export const metadata = {
    title: 'Premium Fresh Exports | Agricultural Products from India to UK & Europe',
    description: 'Trusted agricultural exporter from India supplying premium fresh produce, grains, tea, coffee, and spices to UK and European markets. 50+ years of combined team expertise. APEDA certified.',
    keywords: 'agricultural exports India, fresh produce UK, Basmati rice export, Indian spices Europe, B2B agricultural supplier, APEDA certified exporter, fresh vegetables UK, premium tea export',
    authors: [{ name: 'Premium Fresh Exports' }],
    creator: 'Premium Fresh Exports',
    publisher: 'Premium Fresh Exports',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://premiumfresh.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Premium Fresh Exports | Agricultural Products from India',
        description: 'Trusted agricultural exporter from India supplying premium fresh produce to UK and European markets. Backed by 50+ years of combined team expertise.',
        url: '/',
        siteName: 'Premium Fresh Exports',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Premium Fresh Exports - Agricultural Products from India',
            },
        ],
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Premium Fresh Exports | Agricultural Products from India',
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
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'Premium Fresh Exports',
                            description: 'Premium agricultural exporter from India to UK and European markets',
                            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://premiumfresh.com',
                            logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://premiumfresh.com'}/images/logo.png`,
                            contactPoint: {
                                '@type': 'ContactPoint',
                                contactType: 'sales',
                                availableLanguage: ['English'],
                            },
                            sameAs: [
                                'https://www.linkedin.com/company/premiumfresh',
                            ],
                            areaServed: ['GB', 'DE', 'FR', 'NL', 'BE', 'IT', 'ES'],
                            priceRange: '$$',
                        }),
                    }}
                />
            </head>
            <body className="min-h-screen flex flex-col">
                {children}
            </body>
        </html>
    )
}
