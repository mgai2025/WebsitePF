import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Vertical Integration: Why It Matters in Agricultural Trade | Perfact Foods',
    description: 'Understanding how direct farm partnerships and owned facilities create reliability in international supply chains. Insights from Perfact Foods.',
    openGraph: {
        title: 'Vertical Integration: Why It Matters in Agricultural Trade',
        description: 'Understanding how direct farm partnerships and owned facilities create reliability in international supply chains.',
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
                                Business Strategy
                            </span>

                            {/* Title */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                                Vertical Integration: Why It Matters in Agricultural Trade
                            </h1>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                    PF
                                </div>
                                <div>
                                    <p className="font-medium text-text-primary">Perfact Foods Team</p>
                                    <p className="text-text-secondary text-sm">Strategy & Operations</p>
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
                                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop"
                                alt="Vertical integration in agriculture with farms and processing"
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
                                In the complex landscape of international agricultural trade, the distance between the farm and the final buyer can often be measured in more than just miles. Layers of intermediaries, fragmented supply chains, and opaque sourcing practices have long plagued the industry. Vertical integration offers a powerful solution, bringing control, transparency, and consistency to the forefront.
                            </p>
                            <p className="text-text-secondary leading-relaxed">
                                This model is not just about ownership—it's about accountability. We explore why vertically integrated partners are becoming the preferred choice for discerning importers in the UK and Europe.
                            </p>
                        </section>

                        {/* What is Vertical Integration? */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">What is Vertical Integration?</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Vertical integration in agriculture refers to a strategy where a company controls multiple stages of the production and supply chain. Instead of simply buying from a market and selling to an importer, a vertically integrated exporter might own the farms, manage the processing facilities, and handle the logistics.
                            </p>
                            <p className="text-text-secondary leading-relaxed">
                                This direct oversight eliminates the "blind spots" that typically exist when goods change hands multiple times, ensuring that quality standards are maintained from seed to container.
                            </p>
                        </section>

                        {/* The Traditional Supply Chain Problem */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-6">The Traditional Supply Chain Problem</h2>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Multiple Intermediaries</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Traditional supply chains often involve local aggregators, regional mandis (markets), commission agents, and traders before the produce even reaches an exporter. Each layer adds cost and time, while diluting traceability.
                            </p>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Quality Inconsistency</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Without direct link to the farm, exporters rely on "grading" at the end of the chain. This reactive approach creates variability, as problems at the growing stage—like improper pesticide use or harvest timing—cannot be corrected later.
                            </p>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Cost Unpredictability</h3>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Reliance on open markets exposes buyers to volatile spot pricing. A sudden shortage in a local mandi can spike prices overnight, disrupting budget planning for importers.
                            </p>
                        </section>

                        {/* The Vertical Integration Solution */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">The Vertical Integration Solution</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                By bridging the gap between production and export, vertical integration solves these structural issues. It aligns incentives across the chain: the farmer grows for quality because they have a guaranteed buyer, the processor invests in safety because they control the brand, and the exporter delivers consistency because they manage the source.
                            </p>
                        </section>

                        {/* Our Vertical Integration Model */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Our Vertical Integration Model</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                At Perfact Foods, we control the critical value-adding steps:
                            </p>
                            <div className="bg-accent rounded-2xl p-6 mb-6">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="font-semibold text-text-primary">Direct Farmer Partnerships</span>
                                            <p className="text-text-secondary text-sm mt-1">Contractual agreements provide farmers with stability and us with quality assurance.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="font-semibold text-text-primary">Own Production Facilities</span>
                                            <p className="text-text-secondary text-sm mt-1">For key products like mushrooms and processed foods, we own the production infrastructure.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="font-semibold text-text-primary">End-to-End Compliance</span>
                                            <p className="text-text-secondary text-sm mt-1">We manage processing standards, packaging, and export documentation internally.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="font-semibold text-text-primary">Logistics Control</span>
                                            <p className="text-text-secondary text-sm mt-1">Temperature control and transport are monitored directly by our team.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Benefits for Your Business */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-6">Benefits for Your Business</h2>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Guaranteed Supply</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                With contracted acreage and production plans, we can commit to volumes in advance, insulating you from market shortages.
                            </p>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Quality Consistency</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Standardized growing and processing protocols mean the product you receive matches the specifications you approved, shipment after shipment.
                            </p>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">Price Stability</h3>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Direct partnerships allow for forward pricing, helping you manage costs and margins more effectively than relying on spot markets.
                            </p>
                        </section>

                        {/* Conclusion */}
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-text-primary mb-4">Conclusion</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                Vertical integration transforms the supplier-buyer relationship from transactional to strategic. By removing intermediaries and taking ownership of the supply chain, we deliver not just produce, but peace of mind.
                            </p>
                        </section>

                        {/* CTA Box */}
                        <div className="bg-primary rounded-2xl p-8 text-center text-white">
                            <h3 className="text-xl font-bold mb-3">Want to improve your sourcing strategy?</h3>
                            <p className="text-white/80 mb-6">
                                Contact us to understand how our vertical integration model can benefit your business.
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
