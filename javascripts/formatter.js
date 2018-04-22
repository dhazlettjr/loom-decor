"use strict";

module.exports.formatData = data => {
  console.log("our data", data);

  const products = data[2];
  const types = data[1];
  const cats = data[0];

  let revisedProds = products.map(prod => {
    let currentProd = Object.keys(prod);
    console.log(currentProd);
    let prodType = types.find(type => type.id === prod[currentProd].type );
    console.log('prodType', prodType);
    let prodCat = cats.find( category => category.id === prodType.category);

    prod[currentProd].type = prodType.name;
    prod[currentProd].category = prodCat.name;

    return prod;
  });
  console.log("revised", revisedProds);
  return revisedProds;
};