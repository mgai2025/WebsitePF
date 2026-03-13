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
                                For decades, international trade has been viewed as a series of disconnected, linear transactions. In the traditional model, an exporter moves a product, a middleman adds a margin, and a buyer hopes for consistency. At <strong>Perfact Food</strong>, we represent a paradigm shift, proving that this antiquated model is transitionally obsolete in a data-driven world.
                            </p>

                            <p className="text-lg leading-relaxed mb-10">
                                Our DNA is not rooted in traditional commodity trading. We were built by institutional veterans—alumni of <strong>IIT and IIM</strong> who refined their operational rigor at global entities like <strong>Microsoft, JP Morgan, and Deloitte</strong>. We have taken the precision of technology and high finance and applied it to the most fundamental sector of human existence: Global Agricultural Supply Chains.
                            </p>

                            <h2 className="text-heading-2 text-primary mb-6">The Shift from Platform to System</h2>

                            <p className="text-lg leading-relaxed mb-6">
                                When you partner with Perfact Food, you are not just accessing a platform; you are integrating into a <strong>Global Trade Execution System</strong>. We operate on three core institutional principles:
                            </p>

                            <div className="space-y-12 mb-12">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">01</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-text-primary">Network Integrity & Market Stability</h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            We mitigate the inherent price volatility of the agricultural sector through full-stack vertical integration. By controlling the touchpoints from cultivation to final terminal delivery, we ensure <strong>consistent fulfillment</strong> and precision in timelines. Our system is engineered to absorb market shocks, providing your supply chain with the stability required for institutional scale.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">02</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-text-primary">Institutional Governance & 360° Visibility</h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            International trade execution is often plagued by opacity. We solve this through <strong>360° visibility</strong> systems that offer data-driven insights at every segment of the lifecycle. Our institutional processes and digital infrastructure transform fragmented information into a single, auditable "source of truth," giving you total control over your procurement operations.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">03</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-text-primary">Automated Verification & Technical Excellence</h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            Quality management is a technical discipline, not a manual one. We are integrating <strong>proprietary AI and computer vision</strong> protocols to automate product and process verification. From real-time condition monitoring to cognitive visual analysis at the source, we replace traditional guesswork with technical certainty.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary/5 rounded-2xl p-8 mb-12 border-l-4 border-primary">
                                <h2 className="text-heading-3 text-text-primary mb-4">The Institutional Mandate</h2>
                                <p className="text-lg leading-relaxed text-text-secondary italic">
                                    "Our objective is not simply to facilitate trade, but to redefine its execution. We are building the infrastructure that allows global commerce to move with the speed of data and the reliability of engineering. When the system works, the transaction becomes invisible, leaving only the value."
                                </p>
                            </div>

                            <p className="text-lg leading-relaxed mb-10">
                                We invite you to experience international trade as it was meant to be: a seamless, professional, and predictable extension of your own business.
                            </p>

                            <div className="border-t border-gray-200 pt-10 mt-10">
                                <div className="flex flex-col md:flex-row md:items-start gap-8">
                                    <div className="flex-shrink-0">
                                        <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-3xl italic">MG</div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-lg font-bold text-text-primary flex items-center gap-3">
                                                Mohit Gupta, CFA
                                                <a href="https://www.linkedin.com/in/mohitgupta16/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors">
                                                    <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                                </a>
                                            </p>
                                            <p className="text-text-secondary font-medium">Founder & CEO, Perfact Food</p>
                                            <p className="text-text-light text-sm">(A Flowbotics Technologies Company)</p>
                                        </div>
                                        <div className="text-sm text-text-secondary border-l-2 border-primary/20 pl-4 space-y-1">
                                            <p>IIT Delhi | IIM Calcutta</p>
                                            <p>Ex-Microsoft | Ex-Paytm | Ex-Deloitte | Global Consulting (G-SIBs)</p>
                                            <p className="font-mono pt-1">M: +91 886 063 5702</p>
                                        </div>
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
