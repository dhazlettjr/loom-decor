"use strict";

const $ = require("jquery");
const factory = require("./factory");
const formatter = require('./formatter');
const prodView = require('./prodView');

const loom = [];

//array of factory gets put into a prmose
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