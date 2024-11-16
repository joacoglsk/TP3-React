import React, { useState } from 'react';
import styles from '../styles/Adivinanza.module.css';

const Adivinanza = ({ numero, pregunta, respuesta }) => {
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  return (
    <div className={styles.adivinanza}>
      <h2>Adivinanza {numero}</h2>
      <p>{pregunta}</p>
      <button onClick={() => setMostrarRespuesta(!mostrarRespuesta)}>
        👁️ 
      </button>
      {mostrarRespuesta && <p className={styles.respuesta}>{respuesta}</p>}
    </div>
  );
};

export default Adivinanza;
