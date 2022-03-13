const express = require("express");
const User = require("../models/Users.jsx");

const router = express.Router();

router.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  const user = new User({
    _id: req.body._id,
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
  });
  user.save();
  res.json(user);
});

router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    _id: req.body._id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
