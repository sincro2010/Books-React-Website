const { query } = require('express');
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "GLUKA198san",
  database: "CRUDDataBase"
});



const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json({ type:'*/*' }));

/* app.get("/", (req, res) => {
  const sqlSelect = "SELECT * from user";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
  }); 
 }); */

/* 
 app.get("/api/login", (req, res) => {
  const sqlInsert = "INSERT into user (username, email, password) VALUES ('3', 'gluka@gmail.com', '56790')";
  db.query(sqlInsert, (err, res) => {
  
  }); 
 }); */

 /* app.get("/", (req, res) => {
  const sqlSelect = "SELECT * from user";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  }); 
 });  */

 app.get("/books/get/", (req, res) => {
  const sqlSelect = "SELECT * from books";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  }); 
 });

 app.get("/favorites/get/", (req, res) => {
  const sqlSelect = "SELECT * from books WHERE isFavorite=1";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  }); 
 });



 app.get("/books/get/:id", (req, res) => {
  const id = req.params.id;
  const sqlSelect = "SELECT * from books WHERE id=?";
  db.query(sqlSelect, id, (err, result) => {
    res.send(result[0]);
  }); 
 });

 app.get("/login/get", (req, res) => {
  const sqlSelect = "select * from user where id=(SELECT LAST_INSERT_ID())";
  db.query(sqlSelect, (err, result) => {
    res.send(result[0]);
  }); 
 });

 app.post("/login/post", (req, res) => {
   const username = req.body.username;
   const email = req.body.email;
   const password = req.body.password;
   const isPro = req.body.isPro;
   const avatarUrl = req.body.avatarUrl;
   const sqlInsert = "INSERT into user (username, email, password, isPro, avatarUrl) VALUES (?, ?, ?, ?, ?)";
   db.query(sqlInsert, [username, email, password, isPro, avatarUrl], (err, result) => {
     console.log(result);
  }); 
 });

/*  app.put("/login/update", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const sqlUpdate = "UPDATE user SET email=? password=? WHERE username=?";
  db.query(sqlUpdate, [username, email, password], (err, result) => {
    if (err) console.log(err);
  }); 
}); */
app.get("/comments/get/:id", (req, res) => {
  const id = req.params.id;
  const sqlSelect = "SELECT * from comments WHERE id=?";
  db.query(sqlSelect, id, (err, result) => {
    res.send(result);
  }); 
 });

app.post("/comments/post/:id", (req, res) => {
  const id = req.params.id;
  const comment = req.body.comment;
  const rating = req.body.rating;
  const username = req.body.username;
  const isPro = req.body.isPro;
  const avatarUrl = req.body.avatarUrl;
  const sqlInsert = "INSERT into comments (id, comment, rating, username, isPro, avatarUrl) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sqlInsert, [id, comment, rating, username, isPro, avatarUrl], (err, result) => {
    console.log(result);
 }); 
});

app.get("/reader/get/:id", (req, res) => {
  const bookId = req.params.id;
  const sqlSelect = "SELECT * from readers WHERE bookId=?";
  db.query(sqlSelect, bookId, (err, result) => {
    res.send(result);
  }); 
 });

 app.put("/favorites/update", (req, res) => {
  const id = req.body.id;
  const isFavorite = req.body.isFavorite;
  const sqlUpdate = "UPDATE books SET isFavorite=? WHERE id=?";
  db.query(sqlUpdate, [isFavorite, id], (err, result) => {
    if (err) console.log(err);
  }); 
});


app.listen(3002, () =>  {
  console.log('running on 3002');
});



