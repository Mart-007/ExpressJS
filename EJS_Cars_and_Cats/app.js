const express = require('express');

const app  = express();

//This is the static 
app.use(express.static(__dirname + '/public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');


app.get('/cars', (req, res) => {
    res.render('cars');
})

app.get('/cats', (req, res) => {
    res.render('cats');
})

app.get('/cars/new', (req, res) => {
    res.render('form');
})


app.listen(7000, () => {
    console.log("Server running on port 7000");
})