import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../src/components/NavBar/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../src/components/ItemListConteiner/ItemListContariner';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from '../src/components/NotFound/NotFoundPage';


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <NavBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<ItemListContainer searchTerm={searchTerm} />} />
        <Route path="/category/:category" element={<ItemListContainer searchTerm={searchTerm} />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<PageNotFound />} /> {/* Ruta para la página 404 */}
      </Routes>
    </Router>
  );
}

export default App;