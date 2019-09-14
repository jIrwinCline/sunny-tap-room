import React, { Component } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import EmployeeATags from './EmployeeATags'
import CustomerATags from './CustomerATags'



export default class HeaderNavbar extends Component {
  constructor(props) {
    super(props)
  }

  render(){
  return (
    <div className='container'>
      <nav>
          <CustomerATags filterByLowFill={this.props.filterByLowFill}/>
      </nav>
    </div>

  );
}
}
