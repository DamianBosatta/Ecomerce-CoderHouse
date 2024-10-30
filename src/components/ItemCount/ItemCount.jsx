import React, { useState } from 'react';
import '../ItemCount/Itemcount.css'; // Importar los estilos personalizados

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <button onClick={decrease} className="count-button">-</button>
      <span className="count-display">{count}</span>
      <button onClick={increase} className="count-button">+</button>
      {/* Llamada a onAdd desde el contenedor padre */}
    </div>
  );
}

export default ItemCount;
