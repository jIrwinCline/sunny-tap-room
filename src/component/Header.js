import React, { Component } from 'react'
import HeaderNavbar from './HeaderNavbar.js'
import headerPic from '../public/pic.jpg'



export default function Header() {

  return (
    <div className='header-container' >
      <img src='https://www.timberlinelodge.com/images/home_page/HOME_HEADER_PURPLE-5d51dd351a128-2268-1565646158.jpg' alt='Header Picture' />
      <h1 className="header-text-top"><em>Sunny's</em></h1>
      <h1 className="header-text"><strong>Tap  Room</strong></h1>
    </div>
  );
}
