import React, { useState } from 'react';

const EmailSubscriptionForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://us21.api.mailchimp.com/3.0/lists/databoy/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'ea1548564a2711da1c7b46e99af7cbfa-us21'
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed'
        })
      });

      if (response.ok) {
        console.log('Email subscription successful!');
        // Aquí puedes realizar alguna acción adicional después de una suscripción exitosa
      } else {
        console.log('Email subscription failed.');
        // Manejo de errores
      }
    } catch (error) {
      console.log('An error occurred:', error);
      // Manejo de errores
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Ingresa tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Suscribirse</button>
    </form>
  );
};

export default EmailSubscriptionForm;