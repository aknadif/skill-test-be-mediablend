const bcrypt = require("bcrypt");
const Users = require("../models/users.model");

exports.findAll = (req, res) => {
    Users.find()
    .then((result) => {
      res.status(200).json({
        message: "Succes to get all users",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
}

exports.create = (req, res) => {
  const { email } = req.body;
  Users.findOne({ email }).then(async (result) => {
    if (result) {
      res.status(400).json({ message: "Email already signed" });
    } else {
      try {
        res.status(201).json(await Users({ ...req.body, password: await bcrypt.hash(req.body.password, 10) }).save());
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
  });
};

exports.update = async (req, res) => {
  Users.findByIdAndUpdate(req.params.id, { ...req.body, password: await bcrypt.hash(req.body.password, 10) }, { new: true })
    .then((result) => {
      try {
        res.status(200).json({
          message: "Data Users Updated",
          data: result,
        });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

exports.delete = async (req, res) => {
  Users.findByIdAndDelete(req.params.id)
    .then(() => {
      try {
        res.status(200).json({ message: "Data Users Deleted" });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};