const productsController = require('../../controller/products.controller');

module.exports = (app) => {
    app.get('/api/products', productsController.findAll)
    app.get('/api/products/:limit&:brand', productsController.findLimit)
    app.get('/api/products/get-all-brand', productsController.getAllBrand)
}