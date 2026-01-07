import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import WhyUs from '@/components/sections/WhyUs'
import Certifications from '@/components/sections/Certifications'
import Insights from '@/components/sections/Insights'
import Innovation from '@/components/sections/Innovation'
import Contact from '@/components/sections/Contact'

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex-1">
                <Hero />
                <Products />
                <WhyUs />
                <Certifications />
                <Insights />
                <Innovation />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
