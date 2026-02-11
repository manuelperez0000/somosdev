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
            <h1 className="hero-title">
              Convertimos tus Desafíos de Negocio en <span style={{color: 'var(--primary-color)'}}>Soluciones Digitales</span> Rentables
            </h1>
            <p className="lead text-muted mb-5">
              En SomosDev, no solo escribimos código; construimos el motor tecnológico que impulsa tu crecimiento. 
              Soluciones a medida diseñadas para generar confianza, eficiencia y resultados reales.
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
