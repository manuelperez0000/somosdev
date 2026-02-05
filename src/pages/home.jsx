import React, { Suspense, lazy } from 'react';
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import SEO from "../components/SEO"

// Lazy load non-critical components
const TechStack = lazy(() => import("../components/TechStack"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const Portfolio = lazy(() => import("../components/Portfolio"));
const Pricing = lazy(() => import("../components/Pricing"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));
const WhatsAppButton = lazy(() => import("../components/WhatsAppButton"));

const Home = () => {
    return (
        <div className="main-wrapper">
            <SEO />
            <Navbar />
            <Hero />
            <Suspense fallback={<div className="py-5 text-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Cargando...</span></div></div>}>
                <TechStack />
                <AboutUs />
                <Portfolio />
                <Pricing />
                <Contact />
                <Footer />
                <WhatsAppButton />
            </Suspense>
        </div>
    )
}

export default Home