import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactForm.css'; // Importa el archivo CSS con los estilos personalizados
import logoImage from './contact.png'; // Ruta de la imagen del logo

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a la base de datos o hacer cualquier otra acción necesaria
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Mensaje:', message);
    // Restablecer el formulario
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="row">
      
      <div className="col-12">
      
        <form onSubmit={handleSubmit} className="contact-form">
        <h2 className="title">Contactanos para mas información sobre publicidad, etc.</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre:</label>
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
            <label htmlFor="email" className="form-label">Email:</label>
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
            <label htmlFor="message" className="form-label">Mensaje:</label>
            <textarea
              className="form-control"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
      

    </div>
  );
};

export default ContactForm;