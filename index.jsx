const express = require("express");
const datatablesRouter = require("./routes/datatables.jsx");
const usersRouter = require("./routes/users.jsx");
const booksRouter = require("./routes/books.jsx");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const cors = require("cors");

const databaseName = "datatables";
const username = "admin";
const password = "DogukanTaha2808";

app.use(cors({
  origin: 'http://localhost:3000',
}))
app.use(bodyParser.json());


mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.a3ou0.mongodb.net/${databaseName}?retryWrites=true&w=majority`,
(e) => {
    if (e) {
      console.log(e);
    } else {
      console.log("Database'e başarıyla bağlanıldı.");
    }
  }
);





app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/datatables", datatablesRouter);
app.use("/users", usersRouter);
app.use("/books", booksRouter);



app.listen(3001, () => {
  console.log("Server 3001 portunda çalışıyor!");
});

// const isLoggedIn = true;
// app.use((req, res, next) => {
//   if (!isLoggedIn) {
//     res.send("You must be logged in to view this page");
//   } else {
//     next();
//   }
// });


// {
//   "artist":"Elvis Presley",
//   "country":"United States", 
//   "gender":"Rock and roll, Pop",
//   "sales":1000
//   },
// {
//   "artist":"Michael Jackson", 
//   "country":"United States", 
//   "gender":"Rock, Pop,dance R&B", 
//   "sales":600
//   },
// {
//   "artist":"Madonna", 
//   "country":"United States", 
//   "gender":"Rock, Pop",
//   "sales":400
//   },
// {
//   "artist":"Elton Jhon",
//    "country":"United Kingdom",
//    "gender":"Rock, Pop",
//    "sales":350
//    }

