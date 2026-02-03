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
    <section id="pricing" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Planes y Precios</h2>
          <p className="text-muted lead">Inversiones adaptadas a cada etapa de tu negocio</p>
        </div>
        <div className="row g-4 justify-content-center">
          {/* Plan Básico */}
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card h-100 bg-white">
              <h3 className="h5 fw-bold mb-3">Plan Básico</h3>
              <div className="display-4 fw-bold mb-3">$70</div>
              <ul className="list-unstyled mb-4 text-muted">
                <li className="mb-2"><i className="bi bi-check text-primary me-2"></i>Landing Page Profesional</li>
                <li className="mb-2"><i className="bi bi-check text-primary me-2"></i>Máximo de 3 páginas</li>
                <li className="mb-2"><i className="bi bi-x text-danger me-2"></i>Sin base de datos</li>
                <li className="mb-2"><i className="bi bi-check text-primary me-2"></i>Dominio incluido (1 año)</li>
                <li className="mb-2"><i className="bi bi-check text-primary me-2"></i>Servidor incluido (1 año)</li>
              </ul>
              <button 
                className="btn btn-outline-primary w-100 py-3 fw-bold" 
                style={{borderRadius: '10px'}}
                data-bs-toggle="modal"
                data-bs-target="#pricingModal"
                onClick={() => handlePlanClick('Plan Básico')}
              >
                Elegir Plan
              </button>
            </div>
          </div>
          
          {/* Plan Emprendedor */}
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card featured h-100 bg-white shadow-sm">
              <div className="badge bg-primary mb-3">Más Popular</div>
              <h3 className="h5 fw-bold mb-3">Plan Emprendedor</h3>
              <div className="display-4 fw-bold mb-3">$230</div>
              <ul className="list-unstyled mb-4 text-muted">
                <li className="mb-2"><i className="bi bi-check text-primary me-2"></i>Todo el Plan Básico</li>
                <li className="mb-2"><i className="bi bi-check text-primary me-2"></i>Máximo de 10 páginas</li>
                <li className="mb-2"><i className="bi bi-check text-primary me-2"></i>Incluye Base de Datos</li>
                <li className="mb-2"><i className="bi bi-check text-primary me-2"></i>5 Correos Personalizados</li>
                <li className="mb-2"><i className="bi bi-check text-primary me-2"></i>Soporte prioritario</li>
              </ul>
              <button 
                className="btn btn-primary w-100 py-3 fw-bold shadow-sm"
                style={{ borderRadius: '10px' }}
                data-bs-toggle="modal"
                data-bs-target="#pricingModal"
                onClick={() => handlePlanClick('Plan Emprendedor')}
              >
                Elegir Plan
              </button>
            </div>
          </div>

          {/* Plan Empresarial */}
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card h-100 bg-white">
              <h3 className="h5 fw-bold mb-3">Plan Empresarial</h3>
              <div className="h4 fw-bold mb-4">Bajo Requerimientos</div>
              <ul className="list-unstyled mb-4 text-muted">
                <li className="mb-2"><i className="bi bi-check text-primary me-2"></i>Aplicaciones Completas</li>
                <li className="mb-2"><i className="bi bi-check text-primary me-2"></i>Más de 10 páginas</li>
                <li className="mb-2"><i className="bi bi-check text-primary me-2"></i>Panel Administrativo</li>
                <li className="mb-2"><i className="bi bi-check text-primary me-2"></i>Base de Datos Avanzada</li>
              </ul>
              <button 
                className="btn btn-outline-primary w-100 py-3 fw-bold" 
                style={{borderRadius: '10px'}}
                data-bs-toggle="modal"
                data-bs-target="#pricingModal"
                onClick={() => handlePlanClick('Plan Empresarial')}
              >
                Contactar
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
