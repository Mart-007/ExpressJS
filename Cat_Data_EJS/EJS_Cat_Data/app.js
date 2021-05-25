const express = require('express');
const app = express();

const cats_array = require('./data/data')

app.use(express.static(__dirname + '/assets'))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/cats', (req, res) => {
    res.render('cats', { cats: cats_array });
})

app.get('/cats/:name', (req, res) => {
    let cat;
    for(let i=0; i<cats_array.length; i++){
        if(cats_array[i].name == req.params.name){
            cat = cats_array[i];
        }
    }
    res.render('details', {cat: cat});
})
app.listen(7000, () => {
    console.log("Server running on port 7000");
})