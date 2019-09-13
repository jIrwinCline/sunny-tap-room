import React, { Component } from 'react'
import HeaderNavbar from './HeaderNavbar.js'
import headerPic from '../public/pic.jpg'



export default function Header() {
  var picStyle = {
    width: "100%",
    height: "auto",
  }
  return (
    <div>
      <img src={headerPic} alt='Header Picture' style={picStyle} />
      <HeaderNavbar/>
    </div>
  );
}
