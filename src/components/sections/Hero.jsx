import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Lush Indian farmland at golden hour"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 overlay-gradient" />
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 pt-24">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Trusted by UK & European Importers
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-display-1 font-bold text-white mb-6 leading-tight animate-slide-up">
                        Premium Fresh Produce from India
                        <span className="block text-primary-light">
                            — Secured Supply. Guaranteed Quality.
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed animate-slide-up animation-delay-100">
                        Trusted by UK and European importers. 200+ annual shipments. Led by IIT and IIM alumni with Fortune 500 experience.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-200">
                        <Link href="#products" className="btn-primary text-lg px-8 py-4">
                            Explore Products
                        </Link>
                        <Link href="#contact" className="btn-white text-lg px-8 py-4">
                            Schedule a Conversation
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <Link href="#products" className="text-white/60 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </Link>
            </div>
        </section>
    )
}
