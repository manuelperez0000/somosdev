import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "584141220527";
  const message = "Hola! Me gustaría obtener más información sobre sus servicios de desarrollo web.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
