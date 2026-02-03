import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4">Un Equipo de Expertos a tu Servicio</h2>
            <p className="lead mb-4">
              Somos un equipo de 2 desarrolladores Full Stack apasionados por crear soluciones seguras, 
              eficientes y escalables.
            </p>
            <p className="text-muted">
              Nuestra experiencia en React.js y Node.js nos permite construir aplicaciones robustas 
              desde el frontend hasta el backend, garantizando la mejor experiencia de usuario 
              y un rendimiento excepcional.
            </p>
            <div className="mt-4">
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                <span>Desarrollo Full Stack (React & Node.js)</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                <span>Soluciones Seguras y Escalables</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                <span>Enfoque en UI/UX Moderno</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="bg-white p-5 rounded-4 shadow-sm">
              <h3 className="h4 mb-3">Nuestra Filosofía</h3>
              <p className="text-muted italic">
                "No solo escribimos código, resolvemos problemas de negocio con elegancia tecnológica."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
