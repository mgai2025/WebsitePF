import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
    title: 'Executive Summary | Perfact Food',
    description: 'A message from our CEO on orchestrating the future of global trade execution.',
}

export default function ExecutiveSummary() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1 pt-32 pb-20">
                <div className="container-custom max-w-4xl">
                    {/* Breadcrumb / Top Label */}
                    <div className="mb-12 text-center animate-fade-in">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                            Strategic Outlook 2024
                        </span>
                        <h1 className="text-display-2 md:text-display-1 text-text-primary mb-6">
                            Beyond Commodities
                        </h1>
                        <p className="text-xl text-text-secondary italic">
                            "The world does not need more exporters; it needs more orchestrators."
                        </p>
                    </div>

                    {/* Letter Content */}
                    <div className="card p-8 md:p-16 shadow-2xl shadow-primary/5 border-none bg-accent/30 animate-slide-up">
                        <div className="prose prose-lg max-w-none text-text-primary">
                            <div className="flex justify-between items-center mb-10 border-b border-gray-200 pb-6 uppercase tracking-widest text-xs font-bold text-text-light">
                                <span>From the Office of the CEO</span>
                                <span>Perfact Food Global</span>
                            </div>

                            <p className="text-lg leading-relaxed mb-6 font-medium">
                                Dear Partners and Stakeholders,
                            </p>

                            <p className="text-lg leading-relaxed mb-6">
                                For decades, international trade has been viewed as a series of disconnected, linear transactions. In the traditional model, an exporter moves a product, a middleman adds a margin, and a buyer hopes for consistency. At <strong>Perfact Food</strong>, we have spent the last decade proving that this model is obsolete.
                            </p>

                            <p className="text-lg leading-relaxed mb-10">
                                Our DNA is not rooted in traditional commodity trading. We were built by institutional veterans—alumni of <strong>IIT and IIM</strong> who refined their operational rigor at global entities like <strong>Microsoft, JP Morgan, and Deloitte</strong>. We have taken the precision of technology and high finance and applied it to the most fundamental sector of human existence: Global Agricultural Supply Chains.
                            </p>

                            <h2 className="text-heading-2 text-primary mb-6">The Shift from Platform to System</h2>

                            <p className="text-lg leading-relaxed mb-6">
                                When you partner with Perfact Food, you are not just accessing a platform; you are integrating into a <strong>Global Trade Execution System</strong>. We operate on three core institutional principles:
                            </p>

                            <div className="space-y-8 mb-10">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                                    <div>
                                        <h3 className="text-heading-3 mb-2">Systemic Execution, Not Individual Transactions</h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            We don't just find products; we engineer supply chains. Our vertical integration means we don't buy from the market; we <i>are</i> the market. By controlling the touchpoints from cultivation to final delivery, we eliminate the volatility that plagues traditional exporters.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                                    <div>
                                        <h3 className="text-heading-3 mb-2">Institutional Integrity</h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            In an industry often characterized by opacity, we bring the transparency of a public corporation. Our track record of 200+ incident-free annual shipments to the UK and Europe isn't a statistic; it's a testament to a system that defaults to excellence.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                                    <div>
                                        <h3 className="text-heading-3 mb-2">Strategic Orchestration</h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            We view ourselves as the operating system for your agricultural procurement. Whether it is seasonal planning or cold-chain optimization, we manage the complexity so you can focus on growth and scale.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg leading-relaxed mb-10">
                                We invite you to experience international trade as it was meant to be: a seamless, professional, and predictable extension of your own business.
                            </p>

                            <div className="border-t border-gray-200 pt-10 mt-10">
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden grayscale">
                                        <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold text-2xl italic">MG</div>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-text-primary mb-1">Mohit Gupta</p>
                                        <p className="text-text-secondary uppercase tracking-widest text-xs font-semibold">Founder & CEO, Perfact Food</p>
                                        <p className="text-text-light text-sm italic">Alumnus, IIT & IIM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center animate-fade-in animation-delay-300">
                        <h3 className="text-heading-3 mb-6">Ready to Orchestrate Your Future?</h3>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#contact" className="btn-primary">
                                Schedule Strategic Consultation
                            </Link>
                            <Link href="/products" className="btn-secondary">
                                Explore Our Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
