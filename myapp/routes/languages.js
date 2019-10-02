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
    connection.query('SELECT * FROM countrylanguage', (error, results, fields) => {
        if(error) throw error;
        res.json(results);
    })
});