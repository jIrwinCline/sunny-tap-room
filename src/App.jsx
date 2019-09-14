import React from 'react';
import Header from './component/Header.js';
import Body from './component/Body.js';
import Footer from './component/Footer.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
      <Body/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
