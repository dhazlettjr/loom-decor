"use strict";

const $ = require("jquery");

// Make XHR (ajax) request(s) for data
module.exports.getCategories = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://dhazlettjr.github.io/loom-decor/categories.json"
    })
      .done(cats => {
        resolve(cats.categories);
      })
      .fail(error => {
        reject(error);
      });
  });
};

module.exports.getProducts = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://dhazlettjr.github.io/loom-decor/products.json"
    })
      .done(prods => {
        resolve(prods.products);
      })
      .fail(error => {
        reject(error);
      });
  });
};

module.exports.getTypes = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://dhazlettjr.github.io/loom-decor/types.json"
    })
      .done(types => {
        resolve(types.types);
      })
      .fail(error => {
        reject(error);
      });
  });
};