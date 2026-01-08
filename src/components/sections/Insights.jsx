import Image from 'next/image'
import Link from 'next/link'

const articles = [
    {
        title: 'The Future of Fresh Produce Supply Chains in Europe',
        excerpt: 'How evolving consumer preferences and regulatory changes are reshaping agricultural imports across European markets.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
        category: 'Industry Trends',
        path: '/insights/future-supply-chains-europe',
    },
    {
        title: 'Cold Chain Excellence: What Importers Should Know',
        excerpt: 'Best practices for maintaining product quality through temperature-controlled logistics from origin to destination.',
        image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=500&fit=crop',
        category: 'Logistics',
        path: '/blog/cold-chain-excellence',
    },
    {
        title: 'Vertical Integration: Why It Matters in Agricultural Trade',
        excerpt: 'Understanding how direct farm partnerships and owned facilities create reliability in international supply chains.',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop',
        category: 'Business Strategy',
        path: '/blog/vertical-integration-agriculture',
    },
    {
        title: 'Seasonal Planning for Consistent Year-Round Supply',
        excerpt: 'Strategic approaches to ensuring product availability regardless of seasonal production cycles.',
        image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=500&fit=crop',
        category: 'Supply Chain',
        path: '/blog/seasonal-planning-year-round-supply',
    },
]

export default function Insights() {
    return (
        <section id="insights" className="section bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                            Knowledge Hub
                        </span>
                        <h2 className="section-heading">
                            Industry Insights
                        </h2>
                        <p className="text-text-secondary max-w-xl">
                            Perspectives on agricultural trade, supply chain excellence, and market trends
                        </p>
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article, index) => (
                        <article
                            key={index}
                            className="card group"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="badge-success text-xs">
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-heading-3 text-text-primary mb-3 group-hover:text-primary transition-colors duration-200">
                                    {article.title}
                                </h3>
                                <p className="text-text-secondary mb-6 line-clamp-2">
                                    {article.excerpt}
                                </p>
                                <Link
                                    href={article.path}
                                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
                                >
                                    Read article
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
