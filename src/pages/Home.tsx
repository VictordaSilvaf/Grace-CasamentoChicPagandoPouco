import Banner from '@/components/HomeComponents/Banner'
import AchievementsSection from '@/components/HomeComponents/AchievementsSection'
import HeroSection from '@/components/HomeComponents/HeroSection'
import Menu from '@/components/HomeComponents/Menu'
import SlidderSection from '@/components/HomeComponents/SlidderSection'
import ServicesSection from '@/components/HomeComponents/ServicesSection'
import DepoinmentsSection from '@/components/HomeComponents/DepoinmentsSection'
import PartnersSection from '@/components/HomeComponents/PartnersSection'
import BlogGallery from '@/components/HomeComponents/BlogGallery'
import CTASection from '@/components/HomeComponents/CTASection'
import InfoSection from '@/components/HomeComponents/InfoSection'
import Footer from '@/components/HomeComponents/Footer'

const Home = () => {
    return (
        <div className='w-full overflow-x-hidden relative'>
            <Menu />
            <Banner />
            <HeroSection />
            <AchievementsSection />
            <SlidderSection />
            <ServicesSection />
            <DepoinmentsSection />
            <PartnersSection />
            <BlogGallery />
            <CTASection />
            <InfoSection />
            <Footer />
        </div>
    )
}

export default Home