const express = require('express');
const productController = require('../Controllers/productController');
const teacherController = require('../Controllers/teacherController');
const User = require('../Controllers/userController'); 
const userController = require('../Controllers/userController');
const route = express.Router();
const auth = require('../Middleware/auth');

//product routes
route.post('/createProduct',productController.createProduct);
route.get('/getAllProducts', productController.getAllProducts);
route.get('/viewProduct/:id', productController.getProductById);
route.put('/updateProduct/:id', productController.updateProduct);
route.delete('/deleteProduct/:id', productController.deleteProduct);


//teacher routes
route.post('/create',teacherController.create)
route.get('/getAllProducts', teacherController.getAllProducts);
route.get('/viewProduct/:id', teacherController.getProductById);
route.put('/update/:id', teacherController.update);
route.delete('/delete/:id', teacherController.delete);


// User routes
route.post('/register', userController.register);
route.post('/login', userController.login);
route.post('/logout', userController.logout);
route.get('/getProfile', auth,userController.getProfile);

module.exports = route;