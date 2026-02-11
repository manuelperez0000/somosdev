import React from 'react';

const AboutUs = () => {
  const team = [
    {
      name: "Manuel Pérez",
      role: "Full Stack Developer",
      phrase: "Mi código no tiene errores, solo características inesperadas.",
      image: "https://ui-avatars.com/api/?name=Manuel+Perez&background=0d6efd&color=fff&size=200"
    },
    {
      name: "Jason Hernández",
      role: "Full Stack Developer",
      phrase: "Si funciona, no lo toques... pero si es feo, lo refactorizo.",
      image: "https://ui-avatars.com/api/?name=Jason+Hernandez&background=0dcaf0&color=fff&size=200"
    },
    {
      name: "Jhonathan Hernández",
      role: "Agente de Marketing",
      phrase: "Si no lo vendemos, es que el botón no era lo suficientemente verde.",
      image: "https://ui-avatars.com/api/?name=Jhonathan+Hernandez&background=198754&color=fff&size=200"
    }
  ];

  return (
    <section id="about" className="section-padding bg-light">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4">Tu Visión, Nuestra Ejecución</h2>
            <p className="lead mb-4">
              En SomosDev, no solo creamos sitios web; construimos las herramientas digitales que impulsan el crecimiento de tu negocio.
            </p>
            <p className="text-muted mb-4">
              Combinamos años de experiencia en desarrollo Full Stack con una visión estratégica de marketing para asegurar que cada proyecto sea una inversión rentable y no solo un gasto.
            </p>
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <i className="bi bi-shield-check text-primary fs-4 me-2"></i>
                  <span className="fw-semibold">Seguridad Total</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <i className="bi bi-speedometer2 text-primary fs-4 me-2"></i>
                  <span className="fw-semibold">Alto Rendimiento</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <i className="bi bi-graph-up-arrow text-primary fs-4 me-2"></i>
                  <span className="fw-semibold">Escalabilidad</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <i className="bi bi-palette text-primary fs-4 me-2"></i>
                  <span className="fw-semibold">Diseño Moderno</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border-start border-primary border-5">
              <h3 className="h4 mb-3 fw-bold">Nuestra Filosofía</h3>
              <p className="text-muted lead mb-0">
                "No solo escribimos código, resolvemos problemas de negocio con elegancia tecnológica y estrategia digital."
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 mb-5 pt-4">
          <h3 className="display-6 fw-bold">El Equipo Detrás del Código</h3>
          <p className="text-muted">Conoce a las mentes creativas (y algo divertidas) de SomosDev</p>
        </div>
        
        <div className="row g-4 justify-content-center">
          {team.map((member, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card border-0 shadow-sm h-100 p-4 text-center hover-lift" style={{ borderRadius: '25px', transition: 'all 0.3s ease' }}>
                <div className="mb-4 position-relative d-inline-block mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="rounded-circle shadow border border-4 border-white team-img"
                    loading="lazy"
                    decoding="async"
                    width="150"
                    height="150"
                  />
                  <div className="position-absolute bottom-0 end-0 bg-primary rounded-circle p-2 shadow-sm border border-3 border-white">
                    <i className="bi bi-star-fill text-white small"></i>
                  </div>
                </div>
                <h4 className="fw-bold mb-1">{member.name}</h4>
                <p className="text-primary fw-semibold mb-3">{member.role}</p>
                <div className="bg-light p-4 rounded-4 position-relative mt-2">
                  <i className="bi bi-chat-quote-fill fs-2 text-primary opacity-10 position-absolute top-0 start-0 ms-2 mt-n2"></i>
                  <p className="text-muted mb-0 font-italic" style={{ fontSize: '0.95rem' }}>"{member.phrase}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
