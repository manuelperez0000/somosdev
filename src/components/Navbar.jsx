import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top py-3 border-bottom">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">
          Somos<span className="text-primary">Dev</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <a className="nav-link fw-semibold px-3" href="#about">Sobre Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold px-3" href="#portfolio">Portafolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold px-3" href="#pricing">Precios</a>
            </li>
            <li className="nav-item ms-lg-2">
              <a className="btn btn-primary-custom" href="#contact">Contactar</a>
            </li>
            <li className="nav-item d-flex align-items-center gap-3 ms-lg-3 me-lg-2">
              <a href="#" className="text-muted fs-5 grayscale-hover"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-muted fs-5 grayscale-hover"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-muted fs-5 grayscale-hover"><i className="bi bi-linkedin"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
