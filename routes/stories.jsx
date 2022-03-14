const express = require("express");
const Store = require("../models/Store.jsx");

const router = express.Router();

router.get("/", (req, res) => {
    Store.find()
    .then((stories) => {
      res.json(stories);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:id", (req, res) => {
  Store.findById(req.params.id)
    .then((store) => {
      res.json(store);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  const store = new Store({
    _id: req.body._id,
    name: req.body.name,
    sales: req.body.sales,
    completion: req.body.completion,

  });
  store.save();
  res.json(store);
});

router.put("/:id", (req, res) => {
    Store.findByIdAndUpdate(req.params.id, {
    _id: req.body._id,
    name: req.body.name,
    sales: req.body.sales,
    completion: req.body.completion,
  })
    .then((store) => {
      res.json(store);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.delete("/:id", (req, res) => {
    Store.findByIdAndDelete(req.params.id)
    .then((store) => {
      res.json(store);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;