import React from 'react';
import { CloudCog, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-grid">

                    <div className="footer-info">
                        <a href="#home" className="logo footer-logo">
                            <CloudCog className="logo-icon text-aws-blue" size={32} />
                            <span className="logo-text">Cloud<span className="text-aws-blue">Infra</span></span>
                        </a>
                        <p className="footer-desc">
                            Acelerando negocios con infraestructura AWS segura y automatización inteligente.
                        </p>
                        <div className="footer-contact-items">
                            <div className="contact-item">
                                <MapPin size={18} className="text-aws-blue" />
                                <span>Ciudad de México, México</span>
                            </div>
                            <div className="contact-item">
                                <Mail size={18} className="text-aws-blue" />
                                <span>contacto@cloudinfra.mx</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-form-wrapper">
                        <h3 className="form-title">Hablemos de tu proyecto</h3>
                        <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <input type="text" placeholder="Nombre completo" required />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Empresa" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Correo electrónico" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="¿Cómo podemos ayudarte?" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary form-submit">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} CloudInfra. Todos los derechos reservados.</p>
                    <div className="footer-links">
                        <a href="#">Política de Privacidad</a>
                        <a href="#">Términos de Seguridad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
