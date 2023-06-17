import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Modal.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configuración de EmailJS
    const serviceID = 'service_fz6zgcd'; // Reemplaza con tu Service ID de EmailJS
    const templateID = 'template_3gpvxvv'; // Reemplaza con tu Template ID de EmailJS
    const userID = 'Qmhf6O9b9eM9FGp7K'; // Reemplaza con tu User ID de EmailJS

    // Enviar el formulario mediante EmailJS
    emailjs
      .send(serviceID, templateID, {
        from_name: name,
        from_email: email,
        message: message,
      }, userID)
      .then((response) => {
        console.log('¡Formulario enviado correctamente!', response);
        // Restablecer el formulario
        setName('');
        setEmail('');
        setMessage('');
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.error('Error al enviar el formulario:', error);
      });
  };

  return (
    <div className="row street">
      <div className="col-12">
        {formSubmitted ? (
          <div className="success-container">
          <h2>¡Formulario enviado correctamente!</h2>
          <p>Gracias por contactarnos. Te responderemos a la brevedad posible.</p>
        </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <h2 className="title">Contactanos para más información sobre publicidad, etc.</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Mensaje:
              </label>
              <textarea
                className="form-control"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary masteryi">
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;