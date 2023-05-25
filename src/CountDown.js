import React, { useState, useEffect } from 'react';
import './CountDown.css';

function CountDown({ date, image }) {
  const [timeLeft, setTimeLeft] = useState(null);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const fetchCurrentTime = async () => {
      try {
        const response = await fetch('https://timezone.abstractapi.com/v1/current_time/?api_key=230b60716c454170a8e31c621ba6d9fc&location=Oxford,%20United%20Kingdom');
        const data = await response.json();
        const apiTime = new Date(data.datetime.replace(' ', 'T'));
        const now = new Date().getTime();
        const distance = apiTime.getTime() - now; // Utiliza la hora de la API para calcular la diferencia de tiempo.
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
          setShowImage(true);
        }
      } catch (error) {
        console.error('Error al obtener la hora de la API:', error);
      }
    };

    fetchCurrentTime(); // Realiza la petición al cargar el componente

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = date.getTime() - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
      if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        setShowImage(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <div>
      {timeLeft !== null && (timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0) ? (
        <p className="countdown-text">
          {timeLeft.days} días, {timeLeft.hours} horas, {timeLeft.minutes} minutos, {timeLeft.seconds} segundos para el evento
        </p>
      ) : (
        showImage && <img src={image} alt="Evento finalizado" />
      )}
    </div>
  );
}

export default CountDown;