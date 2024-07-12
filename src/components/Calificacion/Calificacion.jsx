import './calificacion.css'
import PropTypes from 'prop-types';



function Calificacion ({ rating }) {


  function clase(index){
    if (rating >= index + 1) {
      return 'star filled';
    } else if (rating > index && rating < index + 1) {
      return 'star half-filled';
    } else {
      return 'star';
    }
  };

  return (
    <div className="star-rating">
      {[0, 1, 2, 3, 4].map((index) => (
        <div key={index} className={clase(index)}>
          ★
        </div>
      ))}
    </div>
  );
};



Calificacion.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Calificacion;
