import React from 'react';
import { CloudCog, Code, Zap } from 'lucide-react';
import './Services.css';

const Services = () => {
    return (
        <main className="services-page">
            <section className="services-hero section-padding">
                <div className="container text-center">
                    <h1 className="hero-title fade-in-section is-visible">
                        Nuestros <span className="text-gradient">Servicios y Soluciones</span>
                    </h1>
                    <p className="hero-subtitle fade-in-section is-visible" style={{ transitionDelay: '0.1s' }}>
                        Impulsamos tu transformación digital con infraestructura robusta, automatización inteligente y desarrollo a la medida.
                    </p>
                </div>
            </section>

            <section className="services-list section-padding">
                <div className="container">

                    {/* Cloud & Migracion */}
                    <div className="service-detail-card" id="cloud">
                        <div className="service-icon-large">
                            <CloudCog size={48} className="text-aws-blue" />
                        </div>
                        <div className="service-content">
                            <h2>Cloud & Migración</h2>
                            <p>
                                Llevamos tu infraestructura tradicional hacia la nube de AWS con arquitecturas modernas, escalables y seguras. Nos especializamos en sectores regulados (Fintech, Salud, Gobierno) asegurando el cumplimiento de leyes de residencia de datos (CNBV, NOMs).
                            </p>
                            <ul>
                                <li>Auditorías y Well-Architected Reviews</li>
                                <li>Diseño de Landing Zones</li>
                                <li>Migración sin tiempo de inactividad</li>
                                <li>Optimización de costos (FinOps)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Fabrica de Software */}
                    <div className="service-detail-card" id="software">
                        <div className="service-icon-large">
                            <Code size={48} className="text-electric-blue" />
                        </div>
                        <div className="service-content">
                            <h2>Fábrica de Software</h2>
                            <p>
                                Desarrollamos soluciones a medida que resuelven problemas específicos de negocio. Desde plataformas SaaS hasta aplicaciones corporativas complejas, usamos las últimas tecnologías del mercado (React, Node, Python) para asegurar mantenibilidad y rendimiento óptimo.
                            </p>
                            <ul>
                                <li>Desarrollo Full-Stack Moderno</li>
                                <li>Modernización de Aplicaciones Legadas</li>
                                <li>Integración de APIs y Microservicios</li>
                                <li>Staff Augmentation y equipos dedicados</li>
                            </ul>
                        </div>
                    </div>

                    {/* Automatizacion */}
                    <div className="service-detail-card" id="automatizacion">
                        <div className="service-icon-large">
                            <Zap size={48} className="text-orange" />
                        </div>
                        <div className="service-content">
                            <h2>Automatización</h2>
                            <p>
                                Eliminamos tareas repetitivas conectando tus sistemas actuales. Transformamos procesos manuales en flujos de trabajo eficientes utilizando herramientas como n8n, Zapier y scripts personalizados para liberar el verdadero potencial de tu equipo.
                            </p>
                            <ul>
                                <li>Integración de CRMs (Salesforce, HubSpot) y ERPs</li>
                                <li>Automatización de facturación local</li>
                                <li>Workflows con IA integrada</li>
                                <li>Sincronización de datos en tiempo real</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Services;
