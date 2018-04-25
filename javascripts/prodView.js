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
      <h3>Designed by ${currentProd.name}</h3>
      <h4>Social: ${currentProd.social}</h4><br>
      <h4>${currentProd.firm}</h4><br>
      <h4>${currentProd.location}</h4>
      <h5 class="type">${currentProd.type}</h5>
      <button type="submit" class="btn btn-default">Add to WISH</button>
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
