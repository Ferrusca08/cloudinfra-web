import React from 'react';
import { Search, Link as LinkIcon, Rocket } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './WorkflowTimeline.css';

const WorkflowTimeline = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="workflow" className="workflow-section section-padding">
            <div className="container">
                <div className="workflow-header text-center">
                    <h2>Así funciona la <span className="text-electric-blue">Automatización</span></h2>
                    <p>Un proceso simple y transparente para escalar tu negocio.</p>
                </div>

                <div ref={ref} className={`workflow-grid fade-in-section ${isVisible ? 'is-visible' : ''}`}>

                    <div className="workflow-step">
                        <div className="step-number">1</div>
                        <div className="step-icon">
                            <Search size={32} />
                        </div>
                        <h3>Analizamos tu proceso</h3>
                        <p>Mapeamos tus cuellos de botella y tareas manuales para identificar qué se puede automatizar.</p>
                    </div>

                    <div className="workflow-connector"></div>

                    <div className="workflow-step" style={{ transitionDelay: '0.2s' }}>
                        <div className="step-number">2</div>
                        <div className="step-icon">
                            <LinkIcon size={32} />
                        </div>
                        <h3>Conectamos tus plataformas</h3>
                        <p>Integramos ERPs, CRMs y facturación para que hablen entre sí sin intervención humana.</p>
                    </div>

                    <div className="workflow-connector"></div>

                    <div className="workflow-step" style={{ transitionDelay: '0.4s' }}>
                        <div className="step-number">3</div>
                        <div className="step-icon">
                            <Rocket size={32} />
                        </div>
                        <h3>Tu negocio en piloto automático</h3>
                        <p>Disfruta de procesos sin errores. Ahorra tiempo, reduce costos y enfócate en crecer.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WorkflowTimeline;
