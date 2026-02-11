import React, { useState } from 'react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handlePlanClick = (planName) => {
    setSelectedPlan(planName);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "584141220527";
    const message = `Hola! Mi nombre es ${formData.name}. Mi número de contacto es ${formData.phone}. Estoy interesado en el ${selectedPlan}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Cerrar modal usando data attributes o JS si es necesario
    const modalElement = document.getElementById('pricingModal');
    if (window.bootstrap) {
      const modal = window.bootstrap.Modal.getInstance(modalElement) || new window.bootstrap.Modal(modalElement);
      modal.hide();
    }
    setFormData({ name: '', phone: '' });
  };

  return (
    <section id="pricing" className="section-padding" style={{ backgroundColor: '#f9fafb' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Planes y Precios</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>Inversiones transparentes diseñadas para escalar tu presencia digital</p>
        </div>
        <div className="row g-4 justify-content-center align-items-stretch">
          {/* Plan Básico */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="pricing-card h-100 shadow-sm">
              <div className="mb-4">
                <h3 className="h4 fw-bold text-dark">Plan Básico</h3>
                <p className="text-muted small">Ideal para marcas personales o nuevos negocios</p>
              </div>
              <div className="mb-4">
                <span className="price-currency text-primary">$</span>
                <span className="price-value">70</span>
                <span className="text-muted">/proyecto</span>
              </div>
              <ul className="list-unstyled mb-5 pricing-features">
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>Landing Page Profesional</li>
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>Máximo de 3 páginas</li>
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>Diseño Responsive (Móvil)</li>
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>Dominio gratis (1 año)</li>
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>Hosting incluido (1 año)</li>
                <li className="text-muted opacity-50"><i className="bi bi-x-circle me-3"></i>Sin Base de Datos</li>
              </ul>
              <button 
                className="btn btn-outline-primary w-100 py-3 fw-bold mt-auto" 
                style={{ borderRadius: '12px' }}
                data-bs-toggle="modal"
                data-bs-target="#pricingModal"
                onClick={() => handlePlanClick('Plan Básico')}
              >
                Elegir Plan
              </button>
            </div>
          </div>
          
          {/* Plan Emprendedor */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="pricing-card featured h-100">
              <div className="popular-badge">Más Popular</div>
              <div className="mb-4">
                <h3 className="h4 fw-bold text-dark">Plan Emprendedor</h3>
                <p className="text-muted small">Potencia tu negocio con funcionalidades avanzadas</p>
              </div>
              <div className="mb-4">
                <span className="price-currency text-primary">$</span>
                <span className="price-value">230</span>
                <span className="text-muted">/proyecto</span>
              </div>
              <ul className="list-unstyled mb-5 pricing-features">
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>Todo el Plan Básico</li>
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>Máximo de 10 páginas</li>
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>Base de Datos Integrada</li>
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>5 Correos Corporativos</li>
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>Panel de Administración</li>
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>Soporte Prioritario</li>
              </ul>
              <button 
                className="btn btn-primary w-100 py-3 fw-bold mt-auto shadow-sm"
                style={{ borderRadius: '12px' }}
                data-bs-toggle="modal"
                data-bs-target="#pricingModal"
                onClick={() => handlePlanClick('Plan Emprendedor')}
              >
                Empezar Ahora
              </button>
            </div>
          </div>

          {/* Plan Empresarial */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="pricing-card h-100 shadow-sm">
              <div className="mb-4">
                <h3 className="h4 fw-bold text-dark">Plan Empresarial</h3>
                <p className="text-muted small">Sistemas a medida para grandes requerimientos</p>
              </div>
              <div className="mb-4">
                <div className="h3 fw-bold text-primary mb-1">Personalizado</div>
                <p className="text-muted small">Bajo requerimientos</p>
              </div>
              <ul className="list-unstyled mb-5 pricing-features">
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>Aplicaciones Web Completas</li>
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>Páginas Ilimitadas</li>
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>Infraestructura Escalable</li>
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>Seguridad de Grado Bancario</li>
                <li><i className="bi bi-check-circle-fill text-primary me-3"></i>Mantenimiento Mensual</li>
              </ul>
              <button 
                className="btn btn-outline-primary w-100 py-3 fw-bold mt-auto" 
                style={{ borderRadius: '12px' }}
                data-bs-toggle="modal"
                data-bs-target="#pricingModal"
                onClick={() => handlePlanClick('Plan Empresarial')}
              >
                Contactar Ventas
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Contacto */}
      <div className="modal fade" id="pricingModal" tabIndex="-1" aria-labelledby="pricingModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '20px', overflow: 'hidden' }}>
            <div className="modal-header bg-white border-0 pt-4 px-4 pb-2">
              <div className="d-flex align-items-center">
                <div className="bg-primary bg-opacity-10 p-2 rounded-3 me-3">
                  <i className="bi bi-rocket-takeoff text-primary fs-4"></i>
                </div>
                <div>
                  <h5 className="modal-title fw-bold mb-0" id="pricingModalLabel">Solicitar {selectedPlan}</h5>
                  <p className="text-muted small mb-0">Estás a un paso de potenciar tu negocio</p>
                </div>
              </div>
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body p-4">
                <div className="mb-4">
                  <label htmlFor="modalName" className="form-label small fw-bold text-uppercase tracking-wider">
                    <i className="bi bi-person me-2 text-primary"></i>Nombre Completo
                  </label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control form-control-lg bg-light border-0" 
                      id="modalName" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Juan Pérez" 
                      style={{ fontSize: '1rem', borderRadius: '12px' }}
                      required 
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="modalPhone" className="form-label small fw-bold text-uppercase tracking-wider">
                    <i className="bi bi-whatsapp me-2 text-primary"></i>Tu número de WhatsApp
                  </label>
                  <div className="input-group">
                    <input 
                      type="tel" 
                      className="form-control form-control-lg bg-light border-0" 
                      id="modalPhone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+58 414 1234567" 
                      style={{ fontSize: '1rem', borderRadius: '12px' }}
                      required 
                    />
                  </div>
                </div>
                <div className="bg-light p-3 rounded-4 mb-2">
                  <div className="d-flex align-items-center text-muted small">
                    <i className="bi bi-shield-check me-2 fs-5 text-success"></i>
                    <span>Tus datos están seguros y serán usados únicamente para contactarte.</span>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0 p-4 pt-0">
                <button type="submit" className="btn btn-success w-100 py-3 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2" style={{ borderRadius: '12px', backgroundColor: '#25D366', border: 'none' }}>
                  <i className="bi bi-whatsapp fs-5"></i>
                  <span>Continuar a WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
