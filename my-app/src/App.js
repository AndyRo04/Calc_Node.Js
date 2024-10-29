import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [history, setHistory] = useState([]); // Estado para el historial de operaciones

  const handleClick = (value) => {
    if (value === 'C') {
      setDisplay(''); // Limpia el estado (resetea la calculadora)
    } else if (value === '=') {
      try {
        const result = eval(display); /* Eval: se usa para interpretar una cadena que contiene una operacion matematica 
                                        y obtener el resultado.*/
        if (result === Infinity || result === -Infinity) { 
          setDisplay('No se puede dividir por cero');
        } else {
          setDisplay(result.toString()); // Actualiza la pantalla con el resultado
          setHistory([...history, `${display} = ${result}`]); // Agregamos la operacion al historial
        }
      } catch (error) {
        setDisplay('Error');
      }
    } else {
      setDisplay(display + value); // Agregamos el valor del boton al display
    }
  };

  const clearHistory = () => {
    setHistory([]); // Limpiamos el historial
  };

  return (
    <div className="calculator">
      <div className="display">{display || '0'}</div>
      
      {/* Seccion del historial*/}
      <div className="history">
        <strong>Historial:</strong>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>

      <div className="buttons">
        {['7', '8', '9', '/'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {['4', '5', '6', '*'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {['1', '2', '3', '-'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {['0', '.', 'C', '+'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        <button className="equals" onClick={() => handleClick('=')}>=</button>
        <button className="clear-history" onClick={clearHistory}>Borrar Historial</button>
      </div>
    </div>
  );
}

export default App;
