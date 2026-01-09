import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'The Future of Fresh Produce Supply Chains in Europe | Perfact Foods',
    description: 'How evolving consumer preferences and regulatory changes are reshaping agricultural imports across European markets. Insights from Perfact Foods.',
    openGraph: {
        title: 'The Future of Fresh Produce Supply Chains in Europe',
        description: 'How evolving consumer preferences and regulatory changes are reshaping agricultural imports across European markets.',
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
                                Industry Trends
                            </span>

                            {/* Title */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                                The Future of Fresh Produce Supply Chains in Europe
                            </h1>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                    PF
                                </div>
                                <div>
                                    <p className="font-medium text-text-primary">Perfact Foods Team</p>
                                    <p className="text-text-secondary text-sm">Industry Insights</p>
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
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop"
                                alt="Fresh produce supply chain in Europe"
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
                                The European fresh produce market is undergoing a fundamental transformation. Driven by shifting consumer expectations, tightening regulatory frameworks, and the imperative for supply chain resilience, importers and retailers are rethinking how they source agricultural products.
                            </p>
                            <p className="text-text-secondary leading-relaxed">
                                For B2B buyers in the UK and Europe, understanding these changes is no longer optional—it's essential for maintaining competitive advantage and meeting stakeholder demands.
                            </p>
                        </section>

                        {/* Current Market Landscape */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Current Market Landscape</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Europe remains one of the world's largest importers of fresh fruits, vegetables, and specialty agricultural products. The UK, Germany, France, and the Netherlands together account for a significant share of global produce imports, with demand continuing to grow for year-round availability of diverse products.
                            </p>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                However, traditional supply chains are facing unprecedented pressures:
                            </p>
                            <ul className="space-y-3 text-text-secondary mb-4">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Rising logistics costs and container shortages</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Increasing compliance requirements for food safety and sustainability</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Climate-related production variability in traditional sourcing regions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Consumer demand for traceability and ethical sourcing</span>
                                </li>
                            </ul>
                        </section>

                        {/* Emerging Trends */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-6">Emerging Trends</h2>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Regulatory Evolution</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                The EU's Farm to Fork Strategy and related regulations are setting new standards for food imports. Phytosanitary requirements, residue limits, and sustainability reporting are becoming more stringent. Importers must work with suppliers who can demonstrate compliance at every stage of the supply chain—from farm-level practices to cold chain management.
                            </p>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Consumer Preference Shifts</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                European consumers increasingly prioritize product origin, organic certification, and environmental impact. This is reshaping procurement strategies, with buyers seeking suppliers who can provide detailed provenance information and demonstrate responsible agricultural practices.
                            </p>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Technology Integration</h3>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Digital transformation is no longer a future concept—it's a present-day requirement. Leading supply chains are adopting:
                            </p>
                            <ul className="space-y-3 text-text-secondary mb-4">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Real-time temperature and condition monitoring</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Blockchain-based traceability systems</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Predictive analytics for demand planning</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Automated compliance documentation</span>
                                </li>
                            </ul>
                        </section>

                        {/* What This Means for Importers */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">What This Means for Importers</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                For B2B buyers, these trends translate into clear priorities:
                            </p>
                            <div className="bg-accent rounded-2xl p-6 mb-6">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="font-bold text-primary text-lg">1.</span>
                                        <div>
                                            <span className="font-semibold text-text-primary">Partner Selection Matters More Than Ever</span>
                                            <p className="text-text-secondary text-sm mt-1">Working with suppliers who have vertically integrated operations reduces risk and ensures consistency.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="font-bold text-primary text-lg">2.</span>
                                        <div>
                                            <span className="font-semibold text-text-primary">Compliance is Non-Negotiable</span>
                                            <p className="text-text-secondary text-sm mt-1">Suppliers must demonstrate certifications (APEDA, GAP, phytosanitary) without delays or gaps.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="font-bold text-primary text-lg">3.</span>
                                        <div>
                                            <span className="font-semibold text-text-primary">Technology Enables Trust</span>
                                            <p className="text-text-secondary text-sm mt-1">Real-time visibility and data-driven reporting are becoming table stakes for serious partnerships.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Our Perspective */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Our Perspective</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                At Perfact Foods, we believe successful supply chains are built on three pillars:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                <div className="bg-primary/5 rounded-xl p-4 text-center">
                                    <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-text-primary text-sm">Direct Sourcing</h4>
                                    <p className="text-text-secondary text-xs mt-1">Removing intermediaries</p>
                                </div>
                                <div className="bg-primary/5 rounded-xl p-4 text-center">
                                    <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-text-primary text-sm">Transparency</h4>
                                    <p className="text-text-secondary text-xs mt-1">Real-time visibility</p>
                                </div>
                                <div className="bg-primary/5 rounded-xl p-4 text-center">
                                    <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-text-primary text-sm">Reliability</h4>
                                    <p className="text-text-secondary text-xs mt-1">Consistent execution</p>
                                </div>
                            </div>
                            <p className="text-text-secondary leading-relaxed">
                                Our approach—combining contractual farming partnerships, owned production facilities, and technology-enabled operations—is designed precisely for this evolving landscape. With 15-20 monthly shipments to UK and European markets, we've built the systems and relationships necessary to deliver on these principles consistently.
                            </p>
                        </section>

                        {/* Conclusion */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Conclusion</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                The future of fresh produce supply chains in Europe belongs to operations that combine agricultural expertise with institutional-grade execution. As regulatory requirements tighten and consumer expectations rise, the gap between reliable suppliers and everyone else will only widen.
                            </p>
                            <p className="text-text-secondary leading-relaxed">
                                For importers, the message is clear: invest in partnerships built on transparency, compliance, and proven reliability. The supply chain decisions you make today will define your competitive position for years to come.
                            </p>
                        </section>

                        {/* CTA Box */}
                        <div className="bg-primary rounded-2xl p-8 text-center text-white">
                            <h3 className="text-xl font-bold mb-3">Have questions about your supply chain strategy?</h3>
                            <p className="text-white/80 mb-6">
                                Get in touch with our team to discuss how we can support your agricultural sourcing needs.
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
