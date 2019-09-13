import React, { Component } from 'react';
import LowKegs from './LowKegs.js';

var masterKegList = [
  {
    name: 'White Monkey IPA',
    brand: 'Snow Tire Brewery',
    price: 7,
    alcoholContent: 10,
    fill: 9,
  },
  {
    name: 'IPA',
    brand: 'Snow Tire Brewery',
    price: 6,
    alcoholContent: 9,
    fill: 124,
  },
  {
    name: 'IPA',
    brand: 'Snow Tire Brewery',
    price: 6,
    alcoholContent: 9,
    fill: 124,
  },
  {
    name: 'IPA',
    brand: 'Snow Tire Brewery',
    price: 6,
    alcoholContent: 9,
    fill: 124,
  },
  {
    name: 'IPA',
    brand: 'Snow Tire Brewery',
    price: 6,
    alcoholContent: 9,
    fill: 124,
  },
  {
    name: 'IPA',
    brand: 'Snow Tire Brewery',
    price: 6,
    alcoholContent: 9,
    fill: 124,
  },
  {
    name: 'IPA',
    brand: 'Snow Tire Brewery',
    price: 6,
    alcoholContent: 9,
    fill: 124,
  },
  {
    name: 'IPA',
    brand: 'Snow Tire Brewery',
    price: 6,
    alcoholContent: 9,
    fill: 124,
  },
];

export default function LowKegsList() {
  return (
    <div>
       {masterKegList.map((keg, index) =>
          <LowKegs name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          fill={keg.fill}
          key={index}/>
        )}
    </div>
  );
}
