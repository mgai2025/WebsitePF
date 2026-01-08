import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Cold Chain Excellence: What Importers Should Know | Premium Fresh Exports',
    description: 'Best practices for maintaining product quality through temperature-controlled logistics from origin to destination. Insights from Premium Fresh Exports.',
    openGraph: {
        title: 'Cold Chain Excellence: What Importers Should Know',
        description: 'Best practices for maintaining product quality through temperature-controlled logistics from origin to destination.',
        type: 'article',
    },
}

export default function BlogPost() {
    return (
        <>
            <Header />
            <main className="flex-1 pt-24">
                {/* Hero Section */}
                <section className="bg-accent py-16 lg:py-24">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-2 text-sm text-text-secondary mb-8">
                                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                <span>/</span>
                                <Link href="/#insights" className="hover:text-primary transition-colors">Insights</Link>
                                <span>/</span>
                                <span className="text-text-primary">Article</span>
                            </nav>

                            {/* Category Badge */}
                            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                                Logistics
                            </span>

                            {/* Title */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                                Cold Chain Excellence: What Importers Should Know
                            </h1>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                    PF
                                </div>
                                <div>
                                    <p className="font-medium text-text-primary">Premium Fresh Exports Team</p>
                                    <p className="text-text-secondary text-sm">Logistics & Quality</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Image */}
                <section className="container-custom -mt-8 lg:-mt-12 relative z-10 mb-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&h=600&fit=crop"
                                alt="Cold chain logistics and temperature monitoring"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <article className="container-custom pb-20">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-green">
                        {/* Introduction */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Introduction</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                In the world of fresh produce exports, the journey from farm to fork is fraught with challenges. The most critical factor determining the quality, shelf life, and value of agricultural products upon arrival is the integrity of the cold chain. For importers in the UK and Europe, sourcing from India requires a partner who understands not just farming, but the science of temperature-controlled logistics.
                            </p>
                            <p className="text-text-secondary leading-relaxed">
                                Maintaining an unbroken cold chain is essential for preserving the nutritional value, texture, and flavor of fresh fruits and vegetables. This article explores the critical components of cold chain excellence and what you should expect from your export partners.
                            </p>
                        </section>

                        {/* The Cost of Cold Chain Failure */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">The Cost of Cold Chain Failure</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Temperature fluctuations during transit can lead to disastrous consequences. Even a brief deviation from the optimal temperature range can accelerate ripening, encourage microbial growth, and result in spoilage.
                            </p>
                            <ul className="space-y-3 text-text-secondary mb-4">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Reduced shelf life and increased food waste</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Financial losses due to rejected shipments</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Damage to brand reputation and buyer relationships</span>
                                </li>
                            </ul>
                        </section>

                        {/* Critical Control Points */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-6">Critical Control Points in Cold Chain Management</h2>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Pre-Shipment Preparation</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                The process begins long before the goods are loaded onto a ship. Pre-cooling is vital to remove "field heat" from freshly harvested produce. Rapidly lowering the temperature to the storage set-point slows down metabolic processes and extends shelf life.
                            </p>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Transportation & Monitoring</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                During transit, maintaining a constant temperature is non-negotiable. Modern reefer containers are equipped with advanced climate control systems, but active monitoring is key. We utilize data loggers and real-time tracking to ensure conditions remain stable throughout the voyage.
                            </p>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Port & Destination Handling</h3>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                The transition from vessel to warehouse is a vulnerable point. Efficient customs clearance and prompt transfer to cold storage facilities at the destination port are crucial to prevent temperature spikes.
                            </p>
                        </section>

                        {/* Industry Standards & Compliance */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Industry Standards & Compliance</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Adherence to international standards like HACCP (Hazard Analysis Critical Control Point) and GAP (Good Agricultural Practices) ensures that food safety risks are minimized. Certification bodies provide frameworks for hygiene, temperature control, and documentation that are essential for export-grade produce.
                            </p>
                        </section>

                        {/* How We Ensure Excellence */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">How We Ensure Excellence</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                At Premium Fresh Exports, our cold chain management protocols are rigorous and comprehensive:
                            </p>
                            <div className="bg-accent rounded-2xl p-6 mb-6">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="font-semibold text-text-primary">Proper Pre-shipment Conditioning</span>
                                            <p className="text-text-secondary text-sm mt-1">Inspection protocols ensure only produce at peak condition enters the cold chain.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="font-semibold text-text-primary">Complete Documentation</span>
                                            <p className="text-text-secondary text-sm mt-1">Full regulatory compliance and traceability records for every shipment.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="font-semibold text-text-primary">Real-time Monitoring</span>
                                            <p className="text-text-secondary text-sm mt-1">Using advanced data loggers to track temperature, humidity, and location.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Best Practices for Importers */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Best Practices for Importers</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Importers play a vital role in maintaining cold chain integrity. We recommend establishing clear communication channels with your logistics providers, ensuring your receiving facilities are pre-cooled, and conducting immediate quality inspections upon arrival.
                            </p>
                        </section>

                        {/* Conclusion */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Conclusion</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                A robust cold chain is the backbone of the fresh produce trade. By partnering with exporters who prioritize temperature management and logistics excellence, you safeguard product quality and protect your bottom line.
                            </p>
                        </section>

                        {/* CTA Box */}
                        <div className="bg-primary rounded-2xl p-8 text-center text-white">
                            <h3 className="text-xl font-bold mb-3">Have questions about your cold chain needs?</h3>
                            <p className="text-white/80 mb-6">
                                Reach out to our team to ensure your imports arrive fresh and safe.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="mailto:business@fbtradings.com" className="btn bg-white text-primary hover:bg-gray-100">
                                    business@fbtradings.com
                                </a>
                                <a href="tel:+918860635702" className="btn border-2 border-white text-white hover:bg-white/10">
                                    +91 8860635702
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Back to Insights */}
                <section className="container-custom pb-20">
                    <div className="max-w-3xl mx-auto">
                        <Link
                            href="/#insights"
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
                        >
                            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            Back to all insights
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
