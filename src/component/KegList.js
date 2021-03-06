import React, { Component } from 'react';
import KegDisplay from './KegDisplay.js';
import { v4 } from 'uuid';


export default class KegList extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className="row">
        {this.props.kegs.map((keg, index) =>
           <KegDisplay keg={keg} index={index}
           soldPint={this.props.soldPint} 
           refillKeg={this.props.refillKeg}
           key={v4()}/>
         )}
      </div>
    );
  }
}
