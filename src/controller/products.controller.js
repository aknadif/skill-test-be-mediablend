const Products = require("../models/products.model");

exports.findAll = (req, res) => {
    Products.find()
    .then((result) => {
      res.status(200).json({
        message: "Succes to get all products",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
}

exports.findLimit = (req, res) => {
  console.log(req.params.brand);
  Products.find().limit(req.params.limit)
  .then((result) => {
    res.status(200).json({
      message: "Succes to get all products",
      data: result,
    });
  })
  .catch((err) => {
    next(err);
  });
}

exports.getAllBrand = (req, res) => {
  Products.find().distinct("brand")
  .then((result) => {
    res.status(200).json({
      message: "Succes to get all brand",
      data: result,
    });
  })
  .catch((err) => {
    next(err);
  });
}