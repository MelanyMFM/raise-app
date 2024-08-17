import { useState, useEffect } from 'react';
import './emprendimiento.css';
import CosoMorado from '../../components/CosoMorado/CosoMorado';
import { useLocation } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Contactanos from '../../components/Contactanos/Contactanos';
import Footer from '../../components/Footer/Footer';
import PropTypes from 'prop-types';

const Emprendimiento = () => {
  const location = useLocation();
  const { props } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [currentIndex, setCurrentIndex] = useState(0);
  const maxImagesToShow = 4;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, props.images.length - maxImagesToShow));
  };

  const hasImages = props.images && props.images.length > 0;

  return (
    <>
      <div className='emprendimiento-container-2'>
        <Nav />
        <h2>WELCOME</h2>
        <CosoMorado props={props} />

        <div className="gallery-container">
          <div className="gallery-item">
            {hasImages ? (
              <div className="gallery-images">
                <button onClick={handlePrevClick} disabled={currentIndex === 0}>&#60;</button>
                {props.images.slice(currentIndex, currentIndex + maxImagesToShow).map((image, index) => (
                  <img key={index} src={image} alt={`${props.nombre} ${index}`} />
                ))}
                <button onClick={handleNextClick} disabled={currentIndex >= props.images.length - maxImagesToShow}>&#62;</button>
              </div>
            ) : (
              <p>No hay imágenes disponibles.</p>
            )}
          </div>
        </div>
        <Contactanos props={props}/>
        
      </div>
      <Footer/>
    </>
  );
};


export default Emprendimiento;
