import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import '../NotFound/NotFoundPage.css';

function PageNotFound() {
  // Animaciones de React Spring
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
    delay: 200,
  });

  const floatAnimation = useSpring({
    loop: { reverse: true },
    from: { transform: 'translateY(0px)' },
    to: { transform: 'translateY(-10px)' },
  });

  return (
    <div className="page-not-found">
      <animated.div style={fadeIn}>
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Página no encontrada.</h2>
        <animated.div style={floatAnimation}>
          <p className="error-description">
            La página que estás buscando no existe o ha sido movida.
          </p>
        </animated.div>
      </animated.div>
      <Link to="/" className="home-button">Volver al inicio</Link>
    </div>
  );
}

export default PageNotFound;
