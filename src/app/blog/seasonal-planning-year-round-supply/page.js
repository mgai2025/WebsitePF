import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Seasonal Planning for Consistent Year-Round Supply | Perfact Foods',
    description: 'Strategic approaches to ensuring product availability regardless of seasonal production cycles. Insights from Perfact Foods.',
    openGraph: {
        title: 'Seasonal Planning for Consistent Year-Round Supply',
        description: 'Strategic approaches to ensuring product availability regardless of seasonal production cycles.',
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
                                Supply Chain
                            </span>

                            {/* Title */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                                Seasonal Planning for Consistent Year-Round Supply
                            </h1>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                    PF
                                </div>
                                <div>
                                    <p className="font-medium text-text-primary">Perfact Foods Team</p>
                                    <p className="text-text-secondary text-sm">Procurement Strategy</p>
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
                                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=600&fit=crop"
                                alt="Seasonal harvest and year-round supply planning"
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
                                Seasonality is the most fundamental constraint in agriculture. For importers serving markets like the UK and Europe, where consumers expect availability of every product every day, bridging the gap between seasonal nature and year-round demand is a constant challenge.
                            </p>
                            <p className="text-text-secondary leading-relaxed">
                                Effective planning is not just about knowing when a harvest starts and ends; it's about building a diversified strategy that virtually eliminates "off-seasons."
                            </p>
                        </section>

                        {/* The Seasonality Challenge */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">The Seasonality Challenge in Fresh Produce</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Every crop has its window. Mangoes in summer, peas in winter, grapes in spring. While this natural rhythm dictates production, retail shelves cannot afford to be empty. Importers face the difficult task of switching origins or communicating shortages to their customers.
                            </p>
                        </section>

                        {/* Traditional Approaches & Limitations */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-6">Traditional Approaches & Their Limitations</h2>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Single-Source Dependency</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Relying on a single region leaves buyers vulnerable. If a monsoon arrives late or a heatwave strikes, the entire supply for that season can be wiped out.
                            </p>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Supply Gaps</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Transitions between seasons or varieties often create weeks of low availability, forcing buyers to pay premium spot prices to secure stock.
                            </p>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Quality Fluctuations</h3>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Pushing a region's season too early or too late often results in compromised quality—unripe fruit at the start or over-mature produce at the end.
                            </p>
                        </section>

                        {/* Strategic Seasonal Planning */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Strategic Seasonal Planning</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                The solution lies in a proactive, multi-pronged approach that anticipates natural cycles and mitigates their impact through diversification and technology.
                            </p>
                        </section>

                        {/* Our Year-Round Supply Strategy */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Our Year-Round Supply Strategy</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                At Perfact Foods, we ensure consistent availability through:
                            </p>
                            <div className="bg-accent rounded-2xl p-6 mb-6">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="font-semibold text-text-primary">Diversified Sourcing</span>
                                            <p className="text-text-secondary text-sm mt-1">We source from multiple climatic zones across India (North, West, South) to extend availability windows.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="font-semibold text-text-primary">Staggered Planting Cycles</span>
                                            <p className="text-text-secondary text-sm mt-1">Our farming partners use staggered sowing schedules to ensure continuous harvest flow.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="font-semibold text-text-primary">Non-Seasonal Production</span>
                                            <p className="text-text-secondary text-sm mt-1">Our controlled-environment facilities for mushrooms operate 365 days a year.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="font-semibold text-text-primary">Processed Alternatives</span>
                                            <p className="text-text-secondary text-sm mt-1">IQF and canned options provide high-quality alternatives during fresh off-seasons.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="font-semibold text-text-primary">Demand Forecasting</span>
                                            <p className="text-text-secondary text-sm mt-1">Collaborative planning with buyers aligns our supply pipeline with your anticipated needs.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Varieties & Availability by Season */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-6">Varieties & Availability by Season</h2>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Q1 (Jan-Mar)</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Peak season for grapes, pomegranates, and winter vegetables like peas and carrots from Northern India.
                            </p>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Q2 (Apr-Jun)</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                The onset of the mango season (Alphonso, Kesar). Summer vegetables and tropical fruits begin to arrive.
                            </p>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Q3 (Jul-Sep)</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Late mango varieties. Monsoon crops. Strong focus on processed and frozen product lines as fresh availability shifts.
                            </p>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Q4 (Oct-Dec)</h3>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Early winter harvest begins. Custard apples, citrus, and leafy greens become available.
                            </p>
                        </section>

                        {/* Planning Your Procurement Strategy */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Planning Your Procurement Strategy</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                To maximize availability, we recommend engaging in quarterly planning sessions suitable for 3-6 month look-aheads. This allows us to dedicate acreage and manage planting schedules specifically for your volume requirements.
                            </p>
                        </section>

                        {/* Conclusion */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Conclusion</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Seasonality doesn't have to mean scarcity. With the right planning and a diversified sourcing strategy, you can minimize gaps and ensure your customers always have access to premium Indian produce.
                            </p>
                        </section>

                        {/* CTA Box */}
                        <div className="bg-primary rounded-2xl p-8 text-center text-white">
                            <h3 className="text-xl font-bold mb-3">Need to secure your seasonal supply?</h3>
                            <p className="text-white/80 mb-6">
                                Reach out to discuss seasonal availability and lock in your requirements.
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
