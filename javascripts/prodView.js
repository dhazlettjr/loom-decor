'use strict';

const $ = require('jquery');
let prodFactory = require("./factory");
let formatter = require("./formatter");


module.exports.displayProducts = (products) => {
  products.forEach( (prod) => {
    let prodKey = Object.keys(prod)[0];
    let currentProd = prod[prodKey];
    let productString = `
    <div class="prodCard container overlay">
    <img id="myImg" src=${currentProd.img}>
      <h3>${currentProd.aesthetic}</h3>
      <h4>${currentProd.type}</h4>
      </div>`;
    $("#products").append(productString);
  });
};

$(document).ready(function(){
  $('#input').on('keyup', function() {
    let searchTerm = $(this).val().toLowerCase();
    $('.prodCard').filter(function (){
      let lineStr = $(this).text().toLowerCase();
      if(lineStr.indexOf(searchTerm)=== -1){
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });
});
