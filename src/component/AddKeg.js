import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

let _name = null;
let _brand = null;
let _price = null;
let _alcoholContent = null;

export default class AddKeg extends Component {
  constructor(props){
    super(props)
    this.state = {
      stateChange: false
    }
  }


  handleNewKegSubmission = (e) => {
    e.preventDefault()
    this.props.callback({
      name: _name.value,
      brand: _brand.value,
      price: _price.value,
      alcoholContent: _alcoholContent.value,
      fill: 124,
    })
    this.setState({ stateChange: true })
    console.log(this.stateChange)
  }

  render(){
    const stateChange = this.state.stateChange;
    if(stateChange === true) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <form onSubmit={this.handleNewKegSubmission}>
          <input type='text' id='name' placeholder='Name of Brew' ref={(input) => {_name = input;}} />
          <input type='text' id='brand' placeholder='Brewery' ref={(input) => {_brand = input;}} />
          <input type='number' id='price' placeholder='Priceper Pint' ref={(input) => {_price = input;}} />
          <input type='number' id='alcoholContent' placeholder='Alcohol Content' ref={(input) => {_alcoholContent = input;}} />
          <button className='form-btn' type='submit'>Add Keg</button>
        </form>
      </div>
    );
  }
}
