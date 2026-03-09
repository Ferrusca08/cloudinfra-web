import React from 'react';
import { Shield, Zap, Workflow } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const [refTitle, isVisibleTitle] = useIntersectionObserver();
    const [refCards, isVisibleCards] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section className="why-section section-padding">
            <div className="container">
                <div ref={refTitle} className={`why-header fade-in-section ${isVisibleTitle ? 'is-visible' : ''}`}>
                    <h2>¿Por qué elegir <span className="text-aws-blue">CloudInfra</span>?</h2>
                    <p>Autoridad y experiencia combinadas con tecnología de vanguardia.</p>
                </div>

                <div ref={refCards} className={`why-grid fade-in-section ${isVisibleCards ? 'is-visible' : ''}`}>

                    <div className="why-card" style={{ transitionDelay: '0.1s' }}>
                        <div className="why-icon default-icon">
                            <Shield size={32} />
                        </div>
                        <h3>Cumplimiento de Leyes Mexicanas</h3>
                        <p>Aseguramos que tu infraestructura cumpla con regulaciones como la CNBV, NOMs aplicables y leyes de residencia de datos.</p>
                    </div>

                    <div className="why-card" style={{ transitionDelay: '0.2s' }}>
                        <div className="why-icon aws-icon">
                            <Zap size={32} />
                        </div>
                        <h3>Latencia Ultrabaja con AWS</h3>
                        <p>Aprovechamos la región de AWS en México para ofrecer tiempos de respuesta inigualables para tus usuarios locales.</p>
                    </div>

                    <div className="why-card" style={{ transitionDelay: '0.3s' }}>
                        <div className="why-icon electric-icon">
                            <Workflow size={32} />
                        </div>
                        <h3>Integraciones API Fluidas</h3>
                        <p>Conectamos n8n, Zapier y APIs personalizadas para construir flujos de trabajo sin fricción entre todas tus herramientas.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
