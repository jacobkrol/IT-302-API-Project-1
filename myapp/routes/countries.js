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

router.get('/', (req, res) => {
    const orderBy = req.query.order || 'Code';
    console.log(orderBy);
    connection.query('SELECT * FROM country ORDER BY ?', orderBy, (error, results, fields) => {
        if(error) throw error;
        res.json(results);
    })
});

router.get('/:code', (req,res) => {
   console.log(req.params.code);
   connection.query('SELECT * FROM country WHERE Code=?', req.params.code, (error, results, fields) => {
       if(error) throw error;
       console.log(results);
       res.json(results);
   })
});

// router.get('/:code/cities', (req,res) => {
//     connection.query('SELECT Name FROM city WHERE CountryCode=?', req.params.code, (error, results, fields) => {
//         if (error) throw error;
//         var data = [];
//         results.forEach((item) => {
//            data.push(item.Name); 
//         });
//         console.log(data);
//         res.send(data);
//     })
// });

// router.get('/:language', (req,res) => {
//     connection.query('SELECT Name FROM country WHERE Code IN (SELECT CountryCode FROM countrylanguage WHERE Language=?)', req.params.language, (error, results, fields) => {
//        if(error) throw error;
//        var data = [];
//         results.forEach((item) => {
//            data.push(item.Name); 
//         });
//         console.log(data);
//         res.send(data);
//     });
// })