import React from 'react';

const Hero = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="hero-title">
              Convertimos tus Desafíos de Negocio en <span style={{color: 'var(--primary-color)'}}>Soluciones Digitales</span> Rentables
            </h1>
            <p className="lead text-muted mb-5">
              En SomosDev, no solo escribimos código; construimos el motor tecnológico que impulsa tu crecimiento. 
              Soluciones a medida diseñadas para generar confianza, eficiencia y resultados reales.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <a href="#contact" className="btn btn-primary-custom btn-lg w-100 w-sm-auto">Empezar ahora</a>
              <a href="#portfolio" className="btn btn-outline-dark btn-lg px-4 w-100 w-sm-auto" style={{borderRadius: '8px', fontWeight: '600'}}>Ver proyectos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
