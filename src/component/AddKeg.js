import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'


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
  }

  render(){

    if(this.stateChange === true) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <form>

        </form>
      </div>
    );
  }
}
