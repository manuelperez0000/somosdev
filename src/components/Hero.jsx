import React from 'react';

const Hero = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="hero-title">
              Automatizamos y Mejoramos tus <span style={{color: 'var(--primary-color)'}}>Procesos Empresariales</span> con Tecnología de Punta
            </h1>
            <p className="lead text-muted mb-5">
              Transformamos la visión de tu negocio en soluciones digitales de alto impacto. 
              Desarrollamos software a medida que escala con tus ambiciones.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a href="#contact" className="btn btn-primary-custom btn-lg">Empezar ahora</a>
              <a href="#portfolio" className="btn btn-outline-dark btn-lg px-4" style={{borderRadius: '8px', fontWeight: '600'}}>Ver proyectos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
