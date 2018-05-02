"use strict";

module.exports.formatData = data => {

//products array
  const products = data[2];
//types array
  const types = data[1];
//categories array
  const cats = data[0];
  
  //im going to create a new array to match the category and type ids to the product itself

  let revisedProds = products.map(prod => {
    //prod is a full list of products
    let currentProd = Object.keys(prod);
    //currentProd is each individual prod
    let prodType = types.find(type => type.id === prod[currentProd].type );
    let prodCat = cats.find( category => category.id === prodType.category);
    
  //this will give the type name to the current prod
    prod[currentProd].type = prodType.name;
    prod[currentProd].category = prodCat.name;

    return prod;
  });
  return revisedProds;
};
