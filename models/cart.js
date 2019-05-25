const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir,'data','cart.json');


module.exports = class Cart {
    static addProduct (id, productPrice){
     //Fetching previous cart
        fs.readFile(p,(err,fileContent)=>{
            let cart = {products:[],totalPrice:0};
            if(!err){
                cart = JSON.parse(fileContent);
            }
     //Find existing product Index
       const existingProductIndex = cart.products.findIndex( prod => prod.id === id);
       const existingProduct = cart.products[existingProductIndex];
       let updatedProduct;
    // increase quantity
       if(existingProduct){
    //spreed operator
        updatedProduct = { ...existingProduct };
    // qty => quantity
        updatedProduct.qty = updatedProduct.qty +1 ;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct ;
       } else   
       {
        updatedProduct = { id : id , qty : 1 };
        cart.products = [...cart.products,updatedProduct];
       }
        cart.totalPrice = cart.totalPrice + + productPrice ; 

        fs.writeFile(p, JSON.stringify(cart), err =>{
            console.log(err);
        });
        });
    }
    
};
