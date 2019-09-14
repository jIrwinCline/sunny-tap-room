import React, { Component } from 'react'
import KegList from './KegList.js'
import AddKeg from './AddKeg.js'
import LowKegsList from './LowKegsList.js'
import { v4 } from 'uuid';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import HeaderNavbar from './HeaderNavbar'

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
    name: 'Red Snow Amber Ale',
    brand: 'Snow Tire Brewery',
    price: 6,
    alcoholContent: 9,
    fill: 124,
    priceColor: null,
    id: null,
  },  {
    name: 'Slushy Pale Ale',
    brand: 'Snow Tire Brewery',
    price: 5,
    alcoholContent: 8,
    fill: 124,
    priceColor: null,
    id: null,
  },  {
    name: 'Super Necessary Stout',
    brand: 'Gamebred Brewery',
    price: 7,
    alcoholContent:11,
    fill: 9,
    priceColor: null,
    id: null,
  },  {
    name: 'Ski-Bum IPA',
    brand: 'Lift Ticket Brewerey',
    price: 5,
    alcoholContent: 8,
    fill: 11,
    priceColor: null,
    id: null,
  },
  {
    name: 'The Iceman Stout',
    brand: 'Snow Tire Brewery',
    price: 7,
    alcoholContent: 12,
    fill: 124,
    priceColor: null,
    id: null,
  },
  {
    name: 'Articuno Bruno Sour',
    brand: 'Sled Dog Brewerey',
    price: 6,
    alcoholContent: 12,
    fill: 124,
    priceColor: null,
    id: null,
  },
  {
    name: 'Yettagain IPA',
    brand: 'Sled Dog Brewery',
    price: 6,
    alcoholContent: 12,
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

  filterByLowFill = () => {
    let temp = this.state.kegs.slice();
    let lessThan10 = function(kegs){
      return kegs.fill < 10;
    }
    let filteredTemp = temp.filter(lessThan10)
    console.log(filteredTemp)
    this.setState({ kegs: filteredTemp })
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
          <HeaderNavbar filterByLowFill={this.filterByLowFill}/>
            <Switch>
              <Route exact path="/" render={()=><KegList kegs={this.state.kegs} soldPint={this.soldPint} />} />
              <Route path="/employee/add_keg" render={()=><AddKeg callback={this.addKegToList}/>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
