import React, { Component } from 'react'
import KegList from './KegList.js'
import AddKeg from './AddKeg.js'
import LowKegsList from './LowKegsList.js'
import { v4 } from 'uuid';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

var masterKegList = [
  {
    name: 'White Monkey IPA',
    brand: 'Snow Tire Brewery',
    price: 7,
    alcoholContent: 10,
    fill: 9,
    priceColor: null,
    id: null,
  },
  {
    name: 'IPA',
    brand: 'Snow Tire Brewery',
    price: 6,
    alcoholContent: 9,
    fill: 124,
    priceColor: null,
    id: null,
  },  {
    name: 'IPA',
    brand: 'Snow Tire Brewery',
    price: 6,
    alcoholContent: 9,
    fill: 124,
    priceColor: null,
    id: null,
  },  {
    name: 'IPA',
    brand: 'Snow Tire Brewery',
    price: 6,
    alcoholContent: 9,
    fill: 124,
    priceColor: null,
    id: null,
  },  {
    name: 'IPA',
    brand: 'Snow Tire Brewery',
    price: 6,
    alcoholContent: 9,
    fill: 124,
    priceColor: null,
    id: null,
  },
  {
    name: 'IPA',
    brand: 'Snow Tire Brewery',
    price: 6,
    alcoholContent: 9,
    fill: 124,
    priceColor: null,
    id: null,
  },
];

masterKegList.forEach(function(keg, index){
  switch(keg.price){
    case 5:
    keg.priceColor = "green";
    break;
    case 6:
    keg.priceColor = "yellow";
    break;
    case 7:
    keg.priceColor = "orange";
    break;
  }
  keg.id = v4()
  console.log(keg.id)
})


export default class Body extends Component {
  constructor(props){
    super(props)
    this.state = {
      kegs: masterKegList,
    }
  }

  addKegToList = (keg) => {
    let temp = this.state.kegs.slice();
    temp.push(keg);
    this.setState({ kegs: temp })
  }

  soldPint = (id) => {
    let temp = this.state.kegs.slice();
    temp[id].fill--;
    this.setState({ kegs: temp })
  }




  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={()=><KegList kegs={this.state.kegs} soldPint={this.soldPint}/>} />
            <Route path="/add_keg" render={()=><AddKeg addKegToList={this.addKegToList}/>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
