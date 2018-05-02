"use strict";

const $ = require("jquery");
//pull in data from the factory
const factory = require("./factory");
//pull in formatted data
const formatter = require('./formatter');
//pull in display products
const prodView = require('./prodView');


//array of factory gets put into a prmose
//I did this so I wouldnt have to keep chaining .then

let promArr = [
  factory.getCategories(),
  factory.getTypes(),
  factory.getProducts()
];

//run a promise all to gather all GETs at the same time

Promise.all(promArr)
.then( (dataArr) => {
  let revisedProds = formatter.formatData(dataArr);
  //pull in displayProducts from prodView
  prodView.displayProducts(revisedProds);
})
.catch( (err) => {
  console.log(err);
});
