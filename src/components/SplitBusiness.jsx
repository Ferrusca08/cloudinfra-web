import React from 'react';
import { Building2, Layers } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './SplitBusiness.css';

const SplitBusiness = () => {
    const [refLeft, isVisibleLeft] = useIntersectionObserver();
    const [refRight, isVisibleRight] = useIntersectionObserver();

    return (
        <section id="consulting" className="split-section section-padding">
            <div className="container">
                <div className="split-grid">

                    {/* Left Card: Corporate Consulting */}
                    <div
                        ref={refLeft}
                        className={`split-card corporate-card fade-in-section ${isVisibleLeft ? 'is-visible' : ''}`}
                    >
                        <div className="card-icon-wrapper">
                            <Building2 size={32} className="text-aws-blue" />
                        </div>
                        <h2>Consultoría & Migración para <br />Sectores Regulados</h2>
                        <p>
                            Migramos tu infraestructura a la nube cumpliendo con las leyes de residencia de datos en México. Ideal para Salud, Fintech y Gobierno. Diseñamos Landing Zones seguras en AWS.
                        </p>
                        <ul className="card-features">
                            <li>Auditoría de Cumplimiento</li>
                            <li>Arquitectura de Alta Disponibilidad</li>
                            <li>Migración sin tiempo de inactividad</li>
                        </ul>
                    </div>

                    {/* Right Card: SaaS Automation */}
                    <div
                        ref={refRight}
                        id="automation"
                        className={`split-card automation-card fade-in-section ${isVisibleRight ? 'is-visible' : ''}`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        <div className="card-icon-wrapper">
                            <Layers size={32} className="text-electric-blue" />
                        </div>
                        <h2>Automatización SaaS para <br />PyMEs</h2>
                        <p>
                            ¿Cuántas horas pierdes en tareas manuales? Conectamos tus herramientas actuales (CRMs, ERPs, Facturación) con flujos de trabajo automatizados para que ahorres tiempo y dinero.
                        </p>
                        <ul className="card-features">
                            <li>Integración n8n y plataformas API</li>
                            <li>Sincronización en tiempo real</li>
                            <li>Reducción de costos operativos</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SplitBusiness;
