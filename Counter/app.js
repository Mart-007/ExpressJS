const express = require('express');
const session = require('express-session')
const app = express();

// app.use(express.urlencoded({extended: true}));

app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.use(session({
    secret: 'setCounter',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.use(express.static(__dirname + '/static'))

app.get('/', (req, res) => {

    req.session.viewCount += 1;
    res.render('counter', { session: req.session.viewCount });
})

app.post('/add', (req, res) => {
    req.session.viewCount += 1;
    res.redirect('/');
})

app.post('/clear', (req, res) => {
    req.session.viewCount = 0;

    res.redirect('/');
})


app.listen(7000, () => {
    console.log("Server running on port 7000");
})