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
   connection.query('SELECT * FROM city', (error, results, fields) => {
       if(error) throw error;
       res.json(results);
   });
});

// var data = [];
// results.forEach((item) => {
//    data.push(item.Name);
// });
// console.log(data);

router.get('/:code', (req,res) => {
    connection.query('SELECT * FROM city WHERE ID=?', req.params.code, (error, results, fields) => {
       if(error) throw error;
       console.log(results[0]);
       res.send(results[0]);
    });
});

router.get('/:code/country', (req,res) => {
    connection.query('SELECT * FROM country WHERE Code IN (SELECT CountryCode FROM city WHERE ID=?)', req.params.code, (error, results, fields) => {
        if(error) throw error;
        console.log(results);
        res.send(results[0]);
    });
});