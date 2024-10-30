import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import '../NavBar/navBar.css';
import CartWidget from '../CartWidget/CartWidget';




function NavBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="https://img.icons8.com/color/48/000000/shop.png" alt="Mi Tienda" className="logo" />
          Mi Tienda
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/electronics">Electrónica</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/jewelery">Joyería</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/men's clothing">Vestimenta (Hombres)</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/women's clothing">Vestimenta (Mujeres)</Link>
            </li>
          </ul>

          <div className="search-bar">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <FaSearch className="search-icon" />
          </div>

          <Link to="/cart" className="cart-icon ms-3">
            <FaShoppingCart size={24} />
            <span className="cart-count">3</span> {/* Ejemplo de cantidad en el carrito */}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
