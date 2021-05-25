const { request } = require('express');
const express = require('express');
const session = require('express-session');

const app = express();
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + "/assets"));

app.set('veiws', __dirname + '/views');
app.set("view engine", 'ejs');

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge : 60000}
}));


app.get('/', (req, res) => {
    let randNum = Math.floor(Math.random() * 100 + 1);
    if(!req.session.number){
        req.session.number = randNum;
    }
    if(!req.session.status){
        req.session.status = ' ';
    }
    res.render('index', { guess: req.session.status });
})

app.post('/number', (req, res) => {
    if(req.body.guess < req.session.number){
        req.session.status = "low";
    }
    else if(req.body.guess > req.session.number){
        req.session.status = "high";
    }
    else{
        request.session.status = "correct";
    }
    res.redirect('/');
})

app.get('/reset', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})



app.listen(7000, () => {
    console.log('Server running on port 7000');
})