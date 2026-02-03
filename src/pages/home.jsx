import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import TechStack from "../components/TechStack"
import AboutUs from "../components/AboutUs"
import Portfolio from "../components/Portfolio"
import Pricing from "../components/Pricing"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"

const Home = () => {
    return (
        <div className="main-wrapper">
            <Navbar />
            <Hero />
            <TechStack />
            <AboutUs />
            <Portfolio />
            <Pricing />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default Home