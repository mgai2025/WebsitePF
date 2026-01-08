import Image from 'next/image'
import Link from 'next/link'

const products = [
    {
        id: 'fresh-fruits-vegetables',
        name: 'Fresh Fruits & Vegetables',
        description: 'Farm-fresh sourcing from certified growers across India',
        image: '/images/products/fruits-vegetables.jpg',
    },
    {
        id: 'processed-frozen-foods',
        name: 'Processed & Frozen Foods',
        description: 'Canned mushrooms, canned peas, French fries from quality-assured facilities',
        image: '/images/products/processed-foods.jpg',
    },
    {
        id: 'cereals-grains',
        name: 'Cereals & Grains',
        description: 'Premium Basmati rice and specialty grains, direct sourced',
        image: '/images/products/cereals-grains.jpg',
    },
    {
        id: 'tea-coffee',
        name: 'Tea & Coffee',
        description: 'Specialty Assam black tea and coffee blends, estate-sourced',
        image: '/images/products/tea-coffee.jpg',
    },
    {
        id: 'spices',
        name: 'Spices',
        description: 'Pure, certified spices with traceability from farm to export',
        image: '/images/products/spices.jpg',
    },
]

export default function Products() {
    return (
        <section id="products" className="section bg-accent">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                        Our Products
                    </span>
                    <h2 className="section-heading mx-auto">
                        Premium Agricultural Products
                    </h2>
                    <p className="section-subheading mx-auto">
                        Sourced directly from certified farms and processing facilities across India
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`card group ${index === products.length - 1 ? 'md:col-span-2 md:max-w-lg md:mx-auto' : ''
                                }`}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-heading-3 text-text-primary mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-text-secondary mb-6">
                                    {product.description}
                                </p>
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
                                >
                                    Enquire
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
