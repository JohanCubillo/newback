import React, { useEffect } from 'react';

const Scriptjs = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'mcjs';
    script.async = true;
    script.src = 'https://chimpstatic.com/mcjs-connected/js/users/165b14b71b6cbbfe9fefd20f6/4e848287b2bed09fdc15edc89.js';
    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
      // Limpiar el script al desmontar el componente (opcional)
      const mcjsScript = document.getElementById('mcjs');
      mcjsScript.parentNode.removeChild(mcjsScript);
    };
  }, []);

  return (
    <div>
      {/* Contenido de tu componente */}
    </div>
  );
};

export default Scriptjs;