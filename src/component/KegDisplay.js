import React, { Component } from 'react';
import PropTypes from 'prop-types';
import keg from '../assets/keg.jpg';



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
      display: 'inline-flex',
      height: 'auto',
      width: 'auto',
      paddingTop: '15px',

    }
    if (alcoholContent < 10) {
      return (
        <div style={cardStyles} className="col-sm-3">
          <div className={"card " + priceColor} style={{ width: '18rem' }}>
          <img class="card-img-top" style={{marginTop: '10px'}} src={keg} alt="keg image"/>
            <div className="card-body">
              <div className='card-title'><h6>{name}</h6></div>
              <div className='card-text'><p>{brand}<br/>
              {price + "$"}<br/>
              {"Pints: " + fill}</p>
              </div>
              <button onClick={this.soldPint}>Sold Pint!</button>
            </div>
          </div>
        </div>
      );
    }else {
      return (
        <div style={cardStyles} className="col-sm-3">
        <div className={"card " + priceColor} style={{ width: '18rem' }}>
        <img class="card-img-top" style={{marginTop: '10px'}} src={keg} alt="keg image"/>
        <div className="card-body">
        <div className='card-title'><h6>{name}</h6></div>
        <div className='card-text'><p>{brand}<br/>
        {price + "$"}<br/>
        {"Pints: " + fill}</p>
        </div>
        <div className='card-footer'>HARD</div>
        <button onClick={this.soldPint}>Sold Pint!</button>
        </div>
        </div>
        </div>
      );
    }
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
