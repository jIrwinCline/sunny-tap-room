import React, { Component } from 'react';
import PropTypes from 'prop-types';



export default class KegDisplay extends Component {
  constructor(props){
    super(props)
  }

  soldPint = () => {
    this.props.soldPint(this.props.index)
  }

  render() {
    const { name, brand, price, alcoholContent, fill, priceColor, id } = this.props.keg;

    var cardStyles = {
      margin: '25px',
      display: 'inline-flex',
      height: '400px',
      width: '20%',
    }
    return (
      <div style={cardStyles}>
      <div className='card' style={{ width: '18rem' }}>
      <div className="card-body">
      <div className='card-title'><h3>{name}</h3></div>
      <div className='card-text'><h4>{brand}</h4></div>
      <div className='card-text'><h4>{price}</h4></div>
      <div className='card-text'>
      <h4>{priceColor}</h4>
      <h4>{fill}</h4>
      </div>
      <button onClick={this.soldPint}>Sold Pint!</button>
      </div>
      </div>
      </div>
    );
  }
}


KegDisplay.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  fill: PropTypes.number,
  priceColor: PropTypes.string,
  id: PropTypes.string,
};
