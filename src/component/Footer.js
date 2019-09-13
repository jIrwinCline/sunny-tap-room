import React, { Component } from 'react';

export default function Footer() {

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <h5>LEARN</h5>
            <a href='#'>Our Company</a><br/>
            <a href='#'>Why Sunny?</a><br/>
            <a href='#'>Cities</a><br/>
            <a href='#'>Help</a><br/>
          </div>
          <div className='col-4'>
            <h5>CUSTOMERS</h5>
            <a href='#'>Careers</a><br/>
            <a href='#'>Affiliates</a><br/>
            <a href='#'>Events</a><br/>
            <a href='#'>Breweries</a><br/>

          </div>

          <div className='col-4'>
            <div>
              <h5>DOWNLOAD</h5>
              <button> PHONE APP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
