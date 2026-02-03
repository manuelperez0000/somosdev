import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-5 border-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h4 className="fw-bold mb-0">Somos<span className="text-primary">Dev</span></h4>
            <p className="text-muted small mt-2">© 2026 SomosDev. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-4 mt-md-0">
            <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-3">
              <a href="#" className="text-muted fs-5 grayscale-hover"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-muted fs-5 grayscale-hover"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-muted fs-5 grayscale-hover"><i className="bi bi-linkedin"></i></a>
            </div>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="text-muted text-decoration-none small">Inicio</a>
              <a href="#about" className="text-muted text-decoration-none small">Sobre Nosotros</a>
              <a href="#portfolio" className="text-muted text-decoration-none small">Portafolio</a>
              <a href="#pricing" className="text-muted text-decoration-none small">Precios</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
