"use strict";

console.log("Acme Explosives");

const $ = require("jquery");
const factory = require("./factory");
const formatter = require('./formatter');
const prodView = require('./prodView');

const acmeData = [];

let promArr = [
  factory.getCategories(),
  factory.getTypes(),
  factory.getProducts()
];
Promise.all(promArr)
.then( (dataArr) => {
  let revisedProds = formatter.formatData(dataArr);
  prodView.displayProducts(revisedProds);
})
.catch( (err) => {
  console.log(err);
});