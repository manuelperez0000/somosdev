import React from 'react';
import cryptocans from '../images/cryptocans.png';
import ewforex from '../images/ewforex.png';
import repuestospicha from '../images/repuestospicha.png';
import sanocars from '../images/sanocars.png';

const projects = [
  {
    title: "CryptoCans",
    description: "Juego Blockchain NFT basado en la cadena de bloques Ethereum. USA",
    image: cryptocans,
    github: "https://github.com/manuelperez0000",
    website: "http://cryptocans.vercel.app/"
  },
  {
    title: "EW Forex",
    description: "Sistema de análisis y seguimiento de mercados financieros en tiempo real. PERU",
    image: ewforex,
    github: "https://github.com/manuelperez0000",
    website: "https://ewforex.net/"
  },
  {
    title: "Repuestos Picha",
    description: "E-commerce especializado en autopartes con gestión de inventario inteligente. VENEZUELA",
    image: repuestospicha,
    github: "https://github.com/manuelperez0000",
    website: "https://repuestospicha.com/"
  },
  {
    title: "SanoCars",
    description: "Aplicación de servicios automotrices con enfoque en mantenimiento preventivo. JAPON",
    image: sanocars,
    github: "https://github.com/manuelperez0000",
    website: "https://www.sanocars.com/"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding " style={{backgroundColor: 'var(--bg-alt)'}}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-light">Nuestro Portafolio</h2>
          <p className="lead text-light">Proyectos reales que impulsan negocios</p>
        </div>
        <div className="row g-5 justify-content-center">
          {projects.map((project, index) => (
            <div className="col-12" key={index}>
              <div className="card card-custom overflow-hidden border-0 shadow-sm bg-white">
                <div className="row g-0 align-items-center">
                  <div className="col-lg-7">
                    <img 
                      src={project.image} 
                      className="img-fluid w-100 portfolio-img" 
                      alt={project.title} 
                    />
                  </div>
                  <div className="col-lg-5">
                    <div className="card-body p-4 p-lg-5 text-center text-lg-start">
                      <h3 className="fw-bold mb-3">{project.title}</h3>
                      <p className="card-text text-muted lead mb-4" style={{fontSize: '1.1rem'}}>
                        {project.description}
                      </p>
                      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3">
                        <a 
                          href={project.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-primary-custom px-4 w-100 w-sm-auto"
                        >
                          Ver Proyecto <i className="bi bi-arrow-right ms-2"></i>
                        </a>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
