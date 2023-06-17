import React, { useState } from 'react';
import axios from 'axios';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://connect.mailerlite.com/api/v2/', {
        email,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-MailerLite-ApiKey': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMWJlZjUxNmQyZGU0NzA4ODFmZDVmZWE0MzVjNTIwMDU1M2EwN2QwZTgwNjM3ZDIyM2MzODgyNDNmMTgzZDBmMmJmNTViNjAwY2NlODQ1NmMiLCJpYXQiOjE2ODU2MDgwNDIuMTI5NjcyLCJuYmYiOjE2ODU2MDgwNDIuMTI5NjczLCJleHAiOjQ4NDEyODE2NDIuMTIxMTY1LCJzdWIiOiI0OTA0MTkiLCJzY29wZXMiOltdfQ.G6LoSdpEKS7JxpVm6KNn5tkEYbhpwJrtPdp7PqvrXIx7xn9VjschZoioOp8Z9k4Zni3DBhtjqHN3Z26TRXMoPxx0R9VI1L0lTO2HJg1fUZGby9n2ha8KzuaWpv5EMMGOdTG3Seage6q7NYzDCwXbD-zypmHFRbaEJPkJ90cMTeVU3UeDJidPmxNa5prmOSHRXSr91uz1D713ksTj80pkZLpZ8KuBY9Aapoj70Ug5wSY08Ax362nVI8vTFyAgWczixZ-YzL7nKgNhazgA0zsC_9PCHXvDouTFXErmaIo4PXakXyBEB2DhPb6reXsdn4gQT2Vk0aJYfICa26AqYYB9VHictLWW3DDojewfR1yN9oTOikJCJFcOrtH0105RNrm7bTykWCIk0wpEGP1Pfltzby2zqvAa4ykS7TTx4UZUiKYkapBVmcv4jM77Wf8Ih0Eet_f6U7IDeI8okzs4MK4zb2KK8BvqGRgb0d_nBj9ULNCjEIu8MtMpXLmstUdQbbOTX2fuNXn7AHVZIrzJ_8cn8eSxdSeqJTjdUO_oI1xCiqLiDBxxCO_vJp3jaTkdIB15EQ2joLSJ2Xuh438pRa_dIYhsb6rSrbu47YR4XAJxo-luQ3UZDc4PLdk_6s4aggHk61cAB5wSKVcY0k_-IKUu70s45XIC-CwbfpmbC46yUFI',
        },
      });

      if (response.status === 201) {
        alert('Te has suscrito correctamente.');
        setEmail('');
      } else {
        alert('Ha ocurrido un error al suscribirte. Por favor, inténtalo nuevamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ha ocurrido un error al suscribirte. Por favor, inténtalo nuevamente.');
    }
  };

  return (
    <div>
      <h2>Suscríbete para recibir noticias por correo electrónico</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Suscribirse</button>
      </form>
    </div>
  );
};

export default SubscriptionForm;