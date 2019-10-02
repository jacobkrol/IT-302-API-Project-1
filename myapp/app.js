const express = require('express');
const app = express();
const router = express.Router();
const port = 9500;

//set the routes
const routes = require('./routes/index');
const countries = require('./routes/countries');
const cities = require('./routes/cities');
const languages = require('./routes/languages');
const comments = require('./routes/comments');

//allow external calls
app.use((req,res,next) => {
   res.header('Access-Control-Allow-Origin', '*');
   next();
});

//load body parser
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//define route paths
app.use('/', routes);
app.use('/countries', countries);
app.use('/cities', cities);
app.use('/languages', languages);
app.use('/comments', comments);

//report live port
app.listen(port, () => {
   console.log(`Example listening on port ${port}!`); 
});

module.exports = router;