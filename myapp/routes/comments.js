const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'codio',
  database : 'world'
});

module.exports = router;

router.get('/', (req,res) => {
//     res.send("<fieldset>" +
//       "<legend>Add Record</legend>" +
//       "<form " +
//       "method='post' action='https://diagram-between-9500.codio.io/comments/add'>" +
//       "  <input type='text' name='comment' />" +
//       "  <input type='submit' />" +
//       "</form>" +
//     "</fieldset>");
    res.render('../views/comment');
});

router.post('/add', (req,res) => {
    console.log(req.body);
    connection.query('INSERT INTO comment (Comment) VALUES (?)', req.body.comment, (error, results, fields) => {
        if(error) throw error;
        res.json(results);
    });
});