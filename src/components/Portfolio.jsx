import React from 'react';
import cryptocans from '../images/cryptocans.webp';
import ewforex from '../images/ewforex.webp';
import repuestospicha from '../images/repuestospicha.webp';
import sanocars from '../images/sanocars.webp';

const projects = [
  {
    title: "CryptoCans",
    tag: "NFT Game",
    description: "Juego Blockchain NFT basado en la cadena de bloques Ethereum. USA",
    image: cryptocans,
    github: "https://github.com/manuelperez0000",
    website: "http://cryptocans.vercel.app/"
  },
  {
    title: "EW Forex",
    tag: "Fintech",
    description: "Plataforma web para una casa de cambios online en Perú, ofreciendo seguridad y rapidez en el cambio de divisas.",
    image: ewforex,
    github: "https://github.com/manuelperez0000",
    website: "https://ewforex.net/"
  },
  {
    title: "Repuestos Picha",
    tag: "E-commerce",
    description: "E-commerce especializado en autopartes con gestión de inventario inteligente. VENEZUELA",
    image: repuestospicha,
    github: "https://github.com/manuelperez0000",
    website: "https://repuestospicha.com/"
  },
  {
    title: "SanoCars",
    tag: "Automotive",
    description: "Aplicación de servicios automotrices con enfoque en mantenimiento preventivo. JAPON",
    image: sanocars,
    github: "https://github.com/manuelperez0000",
    website: "https://www.sanocars.com/"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding" style={{backgroundColor: 'var(--bg-alt)'}}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-white mb-3">Nuestro Portafolio</h2>
          <p className="lead text-light opacity-75">Soluciones digitales que transforman negocios</p>
        </div>
        <div className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <div className="col-12" key={index}>
              <div className="card card-custom bg-white">
                <div className="row g-0 align-items-stretch">
                  <div className="col-lg-7 portfolio-img-container">
                    <img 
                      src={project.image} 
                      className="img-fluid w-100 portfolio-img" 
                      alt={project.title} 
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="400"
                    />
                  </div>
                  <div className="col-lg-5 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5">
                      <span className="project-tag">{project.tag}</span>
                      <h3 className="fw-bold mb-3 h2">{project.title}</h3>
                      <p className="card-text text-muted mb-4" style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
                        {project.description}
                      </p>
                      <div className="d-flex flex-wrap align-items-center gap-3">
                        <a 
                          href={project.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-primary-custom btn-view-project px-4"
                        >
                          Ver Proyecto en Vivo <i className="bi bi-box-arrow-up-right ms-2"></i>
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
