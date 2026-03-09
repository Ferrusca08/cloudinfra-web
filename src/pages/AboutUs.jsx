import React from 'react';
import { Target, Users, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './AboutUs.css';

const AboutUs = () => {
    const [refValues, isVisibleValues] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <main className="about-page">
            {/* Hero About */}
            <section className="about-hero section-padding">
                <div className="container text-center">
                    <h1 className="hero-title fade-in-section is-visible">
                        Sobre <span className="text-aws-blue">Nosotros</span>
                    </h1>
                    <p className="hero-subtitle fade-in-section is-visible" style={{ transitionDelay: '0.1s' }}>
                        Construyendo el futuro de la infraestructura y automatización para empresas líderes y PyMEs emergentes en México.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="about-story section-padding">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content fade-in-section is-visible">
                            <h2>Nuestra <span className="text-electric-blue">Historia</span></h2>
                            <p>
                                CloudInfra nació de la necesidad de modernizar y asegurar la estructura tecnológica de las empresas en una era dominada por el cambio constante. Vimos cómo los sectores regulados luchaban por mantener el cumplimiento, y cómo las PyMEs perdían miles de horas en tareas manuales.
                            </p>
                            <p>
                                Hoy, somos un equipo multidisciplinario de ingenieros en la nube, desarrolladores de software y expertos en procesos dedicados a cerrar la brecha entre la tecnología empresarial y la agilidad de los negocios. Creemos firmemente que la adopción de la nube y la automatización no debería ser compleja, sino un catalizador directo para el crecimiento.
                            </p>
                        </div>

                        <div className="story-image-placeholder fade-in-section is-visible" style={{ transitionDelay: '0.2s' }}>
                            <div className="image-overlay">
                                <h3>Transformación Digital Confiable</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values section-padding bg-light-gray" ref={refValues}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2>Nuestros <span className="text-aws-blue">Valores</span></h2>
                        <p className="text-light">Los pilares que sostienen cada línea de código e infraestructura que construimos.</p>
                    </div>

                    <div className={`values-grid fade-in-section ${isVisibleValues ? 'is-visible' : ''}`}>
                        <div className="value-card">
                            <div className="value-icon">
                                <Target size={32} />
                            </div>
                            <h3>Excelencia Técnica</h3>
                            <p>No tomamos atajos. Diseñamos sistemas con las mejores prácticas de la industria, asegurando alta disponibilidad y rendimiento desde el día cero.</p>
                        </div>

                        <div className="value-card" style={{ transitionDelay: '0.2s' }}>
                            <div className="value-icon">
                                <Award size={32} />
                            </div>
                            <h3>Seguridad First</h3>
                            <p>En sectores regulados, la confianza lo es todo. Nuestro enfoque central siempre es la seguridad, la confidencialidad y el cumplimiento normativo riguroso.</p>
                        </div>

                        <div className="value-card" style={{ transitionDelay: '0.4s' }}>
                            <div className="value-icon">
                                <Users size={32} />
                            </div>
                            <h3>Empatía Empresarial</h3>
                            <p>No solo vemos servidores y APIs; entendemos tu negocio, los cuellos de botella de tu equipo y cómo nuestra tecnología resolverá problemas reales de inmediato.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;
