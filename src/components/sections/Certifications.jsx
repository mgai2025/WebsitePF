const certifications = [
    {
        name: 'APEDA Certified',
        description: 'Agricultural & Processed Food Products Export Development Authority',
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        name: 'GAP Certified',
        description: 'Good Agricultural Practice',
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        name: 'Phytosanitary Compliant',
        description: 'Plant health and disease-free status certification',
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
        ),
    },
    {
        name: 'Residue-Free Testing',
        description: 'Comprehensive testing protocols for product purity',
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 15.5m14.8-.2a2.25 2.25 0 01.6 1.5v.113a2.25 2.25 0 01-2.25 2.25H5.85a2.25 2.25 0 01-2.25-2.25v-.113a2.25 2.25 0 01.6-1.5" />
            </svg>
        ),
    },
    {
        name: 'Temperature-Controlled Logistics',
        description: 'End-to-end cold chain management',
        icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
        ),
    },
]

export default function Certifications() {
    return (
        <section id="certifications" className="section bg-primary text-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">
                        Compliance & Standards
                    </span>
                    <h2 className="text-display-2 font-bold text-white mb-4">
                        Quality Assurance & Compliance
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Every shipment meets international standards with complete documentation and traceability
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-xl mb-4 group-hover:bg-white group-hover:text-primary transition-all duration-300">
                                {cert.icon}
                            </div>

                            {/* Badge Name */}
                            <h3 className="font-semibold text-white mb-2">
                                {cert.name}
                            </h3>

                            {/* Description - Hidden by default, shown on hover on larger screens */}
                            <p className="text-white/60 text-sm lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Assurance */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 text-white/70">
                        <svg className="w-5 h-5 text-primary-light" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                        <span>Complete documentation and certificates provided with every shipment</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
