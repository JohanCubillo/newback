import { useState } from "react";

function Contador() {
  const [coldplayCont, setColdplayCont] = useState(0);
  const [blick182Cont, setBlick182Cont] = useState(0);
  const [rammsteinCont, setRammsteinCont] = useState(0);
  const [respuestaRegistrada, setRespuestaRegistrada] = useState(false);

  const incrementarContador = (opcion) => {
    switch (opcion) {
      case "coldplay":
        setColdplayCont(coldplayCont + 1);
        break;
      case "blick182":
        setBlick182Cont(blick182Cont + 1);
        break;
      case "rammstein":
        setRammsteinCont(rammsteinCont + 1);
        break;
      default:
        break;
    }

    // Marcar la respuesta como registrada
    setRespuestaRegistrada(true);
  };

  return (
    <div>
      <h3>Cuentanos Cual te gustaria en Costa Rica proximamente?</h3>
      <p>{coldplayCont}</p>
      {respuestaRegistrada ? (
        <p>¡Gracias por tu respuesta!</p>
        
        
      ) : (
        <div>
          <p>
            Coldplay: {coldplayCont} | blink-182: {blick182Cont} | Rammstein:{" "}
            {rammsteinCont}
          </p>
          <button onClick={() => incrementarContador("coldplay")}>Coldplay</button>
          <button onClick={() => incrementarContador("blick182")}>Blink-182</button>
          <button onClick={() => incrementarContador("rammstein")}>Rammstein</button>
        </div>
        
      )}
    </div>
  );
}

export default Contador;