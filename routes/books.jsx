const express = require("express");
const Book = require("../models/Book.jsx");

const router = express.Router();

router.get("/", (req, res) => {
    Book.find()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      res.json(book);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  const book = new Book({
    _id: req.body._id,
    name: req.body.name,
    author: req.body.author,
    year: req.body.year,
    language: req.body.language,

  });
  book.save();
  res.json(book);
});

router.put("/:id", (req, res) => {
  Book.findByIdAndUpdate(req.params.id, {
    _id: req.body._id,
    name: req.body.name,
    author: req.body.author,
    year: req.body.year,
    language: req.body.language,
  })
    .then((book) => {
      res.json(book);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.delete("/:id", (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then((book) => {
      res.json(book);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
