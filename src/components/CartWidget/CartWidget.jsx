import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'; // Importar los estilos para la burbuja

function CartWidget() {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} style={{ color: 'blue' }} />
      <span className="cart-count">3</span> {/* Burbuja de notificación */}
    </div>
  );
}

export default CartWidget;
