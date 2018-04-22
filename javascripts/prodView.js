'use strict';

const $ = require('jquery');

module.exports.displayProducts = (products) => {
  products.forEach( (prod) => {
    let prodKey = Object.keys(prod)[0];
    let currentProd = prod[prodKey];
    let productString = `
    <div class="prodCard container overlay">
    <img id="myImg" src=${currentProd.img}>
      <h3>Designed by ${currentProd.name}</h3>
      <h5>Social: ${currentProd.social}</h5><br>
      <h5>${currentProd.firm}</h5><br>
      <h5>${currentProd.location}</h5>
      </div>`;
    $("#products").append(productString);
  });
};

// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('products');
// var modalImg = document.getElementById("myImg");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
// };

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//     modal.style.display = "none";
// };
