import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section position-relative overflow-hidden">
      {/* Video Background */}
      <div className="video-background">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="video-content"
        >
          <source src="/programing.mp4" type="video/mp4" />
       
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="container position-relative z-1 section-padding">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="hero-title text-white">
              Convertimos tus Desafíos de Negocio en <span style={{color: '#60a5fa'}}>Soluciones Digitales Rentables</span>
            </h1>
            <p className="lead text-white mb-5">
              Transformamos la visión de tu negocio en soluciones digitales de alto impacto. 
              Desarrollamos software a medida que escala con tus ambiciones.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <a href="#contact" className="btn btn-primary-custom btn-lg w-100 w-sm-auto text-white border">Empezar ahora</a>
              <a href="#portfolio" className="btn btn-outline-light btn-lg px-4 w-100 w-sm-auto" style={{borderRadius: '8px', fontWeight: '600'}}>Ver proyectos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
