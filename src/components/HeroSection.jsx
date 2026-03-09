import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="hero-section">
            <div className="hero-parallax-bg" style={{ transform: `translateY(${offsetY * 0.3}px)` }}>
                <div className="hero-abstract-shape shape-1" />
                <div className="hero-abstract-shape shape-2" />
                <div className="hero-grid-overlay" />
            </div>

            <div className="container hero-content">
                <div className="hero-badge fade-in-section is-visible">
                    <ShieldCheck size={18} className="text-aws-blue" />
                    <span>Infraestructura Segura AWS</span>
                </div>

                <h1 className="hero-title fade-in-section is-visible" style={{ transitionDelay: '0.1s' }}>
                    Acelera tu negocio:<br />
                    <span className="text-aws-blue text-gradient">Infraestructura AWS</span> y automatización a medida.
                </h1>

                <p className="hero-subtitle fade-in-section is-visible" style={{ transitionDelay: '0.2s' }}>
                    Desde cumplimiento normativo para sectores regulados hasta eficiencia operativa para PyMEs.
                    Aprovecha el poder de la nueva región de AWS en México.
                </p>

                <div className="hero-cta-group fade-in-section is-visible" style={{ transitionDelay: '0.3s' }}>
                    <a href="#consulting" className="btn btn-primary btn-hero">
                        Migración Segura <ArrowRight size={20} />
                    </a>
                    <a href="#automation" className="btn btn-secondary btn-hero bg-blur">
                        Automatiza tu PyME <Zap size={20} className="text-orange" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
