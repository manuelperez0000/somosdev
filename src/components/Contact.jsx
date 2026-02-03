import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold">Contáctanos</h2>
              <p className="text-muted">Estamos listos para llevar tu proyecto al siguiente nivel</p>
            </div>
            <form className="bg-light p-4 p-md-5 rounded-4 shadow-sm">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">Nombre</label>
                <input type="text" className="form-control border-0 p-3" id="name" placeholder="Tu nombre" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">Correo Electrónico</label>
                <input type="email" className="form-control border-0 p-3" id="email" placeholder="nombre@empresa.com" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label fw-bold">Mensaje</label>
                <textarea className="form-control border-0 p-3" id="message" rows="4" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary-custom w-100 py-3">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
