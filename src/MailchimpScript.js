import React, { useEffect } from 'react';

const MailchimpScript = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.id = 'mcjs';
      script.async = true;
      script.src = 'https://chimpstatic.com/mcjs-connected/js/users/165b14b71b6cbbfe9fefd20f6/4e848287b2bed09fdc15edc89.js';
      document.body.appendChild(script);
  
      return () => {
        // Elimina el script cuando el componente se desmonta
        document.body.removeChild(script);
      };
    }, []);
  
    return null;
  };

  export default MailchimpScript;