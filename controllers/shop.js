const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
     Product.fetchAll((products)=>{
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All products',
        path: '/products',
         });

      });  
  }


exports.getProduct = (req,res,next)=>{
  const prodId = req.params.productId;
  Product.findById( prodId , product => {
    // console.log(Product);
    res.render('shop/product-detail',{
      product: product,
      path:'/products',
      pageTitle:product.title
    })
  });
  // res.redirect('/');
  
}  

exports.getIndex = (req,res,next)=>{
  Product.fetchAll((products)=>{
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
       });

    });
}  

exports.getCart = (req,res,next)=>{
    res.render('shop/cart',{
      path:'/cart',
      pageTitle: 'Your Cart'
    })
}

exports.postCart = (req,res,next)=>{
  const prodId = req.body.productId;
  res.redirect('/cart');
}

exports.getOrders = (req,res,next)=>{
  res.render('shop/orders',{
    path:'/orders',
    pageTitle: 'Your Orders'
  })
}

exports.getCheckout = (req,res,next)=>{
  res.render('shop/checkout',{
    path:'/checkout',
    pageTitle: 'Checkout'
  })
}