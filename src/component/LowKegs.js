import React from 'react';
import PropTypes from 'prop-types';

function lessPint(props) {
  props.fill = props.fill - 1;
}

function LowKegs(props) {
  var fill = props.fill;
  var cardStyles = {
  margin: '25px',
  display: 'inline-flex',
  height: '400px',
  width: '20%',
}
if ( props.fill > 10 ) {
  return null;
}
  return (
    <div style={cardStyles}>
      <div className='card' style={{ width: '18rem' }}>
        <div className="card-body">
          <div className='card-title'><h3>{props.name}</h3></div>
          <div className='card-text'><h4>{props.brand}</h4></div>
          <div className='card-text'><h4>{props.price}</h4></div>
          <div className='card-text'><h4>{props.alcoholContent}</h4></div>
          <div className='card-text'><h4>{props.fill}</h4></div>
        </div>
        <button>Sold Pint</button>
      </div>
    </div>
  );
}

LowKegs.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  fill: PropTypes.number
};

export default LowKegs;
