import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import beerPic from '../public/beer.jpg'


export default function Header() {
  var logoStyle = {
  width: '60px',
  height: '60px',
  position: 'relative',
  margin: '0 auto 0 auto',
  }
var navStyles = {
  backgroundColor: '#F7F7F7',
  fontSize: '24px',
  border: "1px solid lightgrey",
}
var aStyles = {
  fontStyle: 'Sans-Serif',
  textDecoration: 'none',
  paddingLeft: '25px',
  position: 'relative',
  margin: '0 auto 0 auto',
}
var signStyles = {
  padding: '20px',
  fontStyle: 'Sans-Serif',
  textDecoration: 'none',
  position: 'relative',
  margin: '0 auto 0 auto',
  float: 'right',
}

  return (
    <div>
      <a style={logoStyle} href='/'><img style={logoStyle}  src={beerPic} /></a>
      <Link to='/add_keg' style={aStyles} >Add a keg</Link>
      <a style={aStyles} href='/'>Our Vision</a>

      <a style={signStyles} href='/'>Sign Up/In</a>
    </div>
  );
}
