const pillars = [
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        headline: 'Direct Relationships, Not Intermediaries',
        description: 'Direct relationships with certified farmers, millers, and processors. Own production facilities. Transparent sourcing end-to-end.',
    },
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        ),
        headline: 'Established Track Record in UK & European Markets',
        description: '200+ annual shipments to UK and Europe with zero-incident track record. Consistent, reliable execution across every supply chain step.',
    },
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
        headline: 'Proven Leadership Experience with Top Global Organizations',
        description: '50+ years of professional experience across international business, operations and technology, led by IIT & IIM alumni. Experience with Microsoft, Deloitte, Paytm, Apollo, JP Morgan and Citi across India, Africa, USA, and Singapore.',
    },
]

export default function WhyUs() {
    return (
        <section id="why-us" className="section bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="section-heading mx-auto">
                        Built on Vertical Integration. Backed by Expertise.
                    </h2>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group text-center lg:text-left p-6 rounded-2xl bg-accent/50 hover:bg-accent transition-colors duration-300"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {pillar.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-heading-3 text-text-primary mb-4">
                                {pillar.headline}
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 bg-primary/5 rounded-full px-6 py-3">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-text-secondary">
                            Own production facilities with continuous capacity optimization. Our vertical integration ensures quality control at every stage of the supply chain.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
