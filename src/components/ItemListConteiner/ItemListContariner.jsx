import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import '../ItemListConteiner/ItemListConteiner.css';

function ItemListContainer({ searchTerm }) {
  const { category } = useParams();
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        const filteredData = category ? data.filter(item => item.category === category) : data;
        setProductos(filteredData);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };
    fetchProductos();
  }, [category]);

  useEffect(() => {
    const results = productos.filter(producto =>
      producto.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProductos(results);
  }, [searchTerm, productos]);

  return (
    <div className="item-list-container">
      <h2>{category ? `Categoría: ${category}` : 'Todos los productos'}</h2>
      <div className="product-grid">
        {filteredProductos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ producto }) {
  // Animación de aparición
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
  });

  return (
    <animated.div style={fadeIn} className="product-card">
      <Link to={`/product/${producto.id}`}>
        <img src={producto.image} alt={producto.title} className="product-image" />
        <div className="product-info">
          <h3>{producto.title}</h3>
          <p className="price">${producto.price}</p>
        </div>
      </Link>
    </animated.div>
  );
}

export default ItemListContainer;
