import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Enviando...");
    
    const formData = new FormData(event.target);

    // Nota: El usuario debe reemplazar 'YOUR_ACCESS_KEY_HERE' con su clave de Web3Forms
    // Se puede obtener gratis en https://web3forms.com/
    formData.append("access_key", "709d7d2f-8e51-4fa3-b648-9bf880c84fdb"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setStatus("error");
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setStatus("error");
      setResult("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold">Contáctanos</h2>
              <p className="text-muted">Estamos listos para llevar tu proyecto al siguiente nivel</p>
            </div>
            
            <form onSubmit={onSubmit} className="bg-light p-4 p-md-5 rounded-4 shadow-sm">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">Nombre</label>
                <input 
                  type="text" 
                  name="name"
                  className="form-control border-0 p-3" 
                  id="name" 
                  placeholder="Tu nombre" 
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">Correo Electrónico</label>
                <input 
                  type="email" 
                  name="email"
                  className="form-control border-0 p-3" 
                  id="email" 
                  placeholder="nombre@empresa.com" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label fw-bold">Mensaje</label>
                <textarea 
                  name="message"
                  className="form-control border-0 p-3" 
                  id="message" 
                  rows="4" 
                  placeholder="Cuéntanos sobre tu proyecto..." 
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === "loading"}
                className={`btn btn-primary-custom w-100 py-3 ${status === "loading" ? 'opacity-50' : ''}`}
              >
                {status === "loading" ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Enviando...
                  </>
                ) : "Enviar Mensaje"}
              </button>

              {result && (
                <div className={`mt-4 alert ${status === "success" ? "alert-success" : "alert-danger"} border-0 shadow-sm`} role="alert">
                  {status === "success" && <i className="bi bi-check-circle-fill me-2"></i>}
                  {status === "error" && <i className="bi bi-exclamation-triangle-fill me-2"></i>}
                  {result}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
