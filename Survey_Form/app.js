const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/assets'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({
    secret: 'setCounter',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.get('/', (req, res) => {
    req.session.viewCount =+ 1;
    res.render('form');
})

app.post('/result', (req, res) => {
    res.render('results', {
        Name: req.body.name,
        Location: req.body.location,
        Language: req.body.langauge,
        Comments: req.body.comments
    });
});

app.listen(7000, () => {
    console.log("Server running on port 7000");
})