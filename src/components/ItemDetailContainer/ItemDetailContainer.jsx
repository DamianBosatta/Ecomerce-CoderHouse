import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetailContainer/ItemDetailContainer.css';

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };
    fetchProducto();
  }, [id]);

  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
  });

  if (!producto) return <p>Cargando...</p>;

  return (
    <animated.div style={fadeIn} className="item-detail-container">
      <div className="image-container">
        <img src={producto.image} alt={producto.title} className="product-image" />
      </div>
      <div className="details-container">
        <h2 className="product-title">{producto.title}</h2>
        <p className="product-description">{producto.description}</p>
        <p className="product-price">Precio: ${producto.price}</p>
        
        <ItemCount stock={10} initial={1} onAdd={(count) => setCantidad(count)} />
        
        <button className="add-to-cart-button" onClick={() => console.log(`Agregaste ${cantidad} unidades al carrito`)}>
          Agregar al carrito
        </button>
      </div>
    </animated.div>
  );
}

export default ItemDetailContainer;