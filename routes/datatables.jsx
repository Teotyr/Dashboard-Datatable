const express = require("express");
const Datatable = require("../models/Datatable.jsx");

const router = express.Router();

router.get("/", (req, res) => {
  Datatable.find()
    .then((datatables) => {
      res.json(datatables);
    })
    .catch((err) => {
      res.json(err);
    });
});


router.get("/:id", (req, res) => {
  Datatable.findById(req.params.id)
    .then((datatable) => {
      res.json(datatable);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  const datatable = new Datatable({
    _id: req.body._id,
    artist: req.body.artist,
    country: req.body.country,
    gender: req.body.gender,
    sales: req.body.sales,
    // name: req.body.name,
    // position: req.body.position,
    // office: req.body.office,
    // age: req.body.age,
    // date: req.body.date,
    // salary: req.body.salary,
  });
  datatable.save();
  res.json(datatable);
});

router.put("/:id", (req, res) => {
  Datatable.findByIdAndUpdate(req.params.id, {
    _id: req.body._id,
    artist: req.body.artist,
    country: req.body.country,
    gender: req.body.gender,
    sales: req.body.sales,
    // name: req.body.name,
    // position: req.body.position,
    // office: req.body.office,
    // age: req.body.age,
    // date: req.body.date,
    // salary: req.body.salary,
  })
    .then((datatable) => {
      res.json(datatable);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.delete("/:id", (req, res) => {
  Datatable.findByIdAndDelete(req.params.id)
    .then((datatable) => {
      res.json(datatable);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
