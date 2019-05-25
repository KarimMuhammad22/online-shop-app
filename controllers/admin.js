const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;

    const product = new Product(title,imageUrl,description,price);
    product.save();
    // products.push({ title: req.body.title });
    res.redirect('/');
  };  

  exports.getProducts = (req,res,next)=>{
    Product.fetchAll(products => {
        res.render('admin/products', {
          prods: products,
          pageTitle: 'Admin Products', 
          path: '/admin/products',
           });
    
        });
  };