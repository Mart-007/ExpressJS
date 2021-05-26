const express = require('express');
const axios = require('axios');
const session = require('express-session');

const app = express();

app.use(express.static(__dirname + '/assets'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {title: "Star Wars Wiki"});
})

//session config
const sessionConfig = {
    secret: "secret",
    resave: false,
    name: 'session',
    saveUninitialized: true,
    cookie: { maxAge: 6000 }
};

//body parser
app.use(session(sessionConfig));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//get the api url
const swapiPeopleUrl = 'https://swapi.dev/api/people';
const swapiPlanetUrl = 'https://swapi.dev/api/planets';

class SwapiUrl{
    get base(){
        return 'https://swapi.dev/api/'; 
    }
    get people(){
        return this.base + 'people';
    }
    get planet(){
        return this.base + 'planet';
    }
}

//get people api
app.get('/people/:arg', (req, res) => {
    //use axios .get() method
    let apiCall;
    if(req.params.arg == 'next'){
        apiCall = axios.get(req.session.next);
    }
    else if(executeQuery.params.arg == 'prev'){
        apiCall = axios.get(req.session.previous);
    }
    else{
        apiCall = axios.get(swapiPeopleUrl);
        console.log('default apiCall returns:', apiCall);
    }

    apiCall.then(data => {
    //log the data before moving on
    req.session.category = '/people';
    req.session.next = data.data.next;
    req.session.previous = data.data.previous;

    res.json(data.data);
    })
    .catch(err => {
    //log the error before moving on!
    console.log("There's an error", err)
    res.json(err);
    })
})

//get planet api
app.get('/planet/:arg', (req, res) => {
    let apiCall;
    if(req.params.arg == 'next'){
        apiCall = axios.get(req.session.next);
    }
    else if(executeQuery.params.arg == 'prev'){
        apiCall = axios.get(req.session.previous);
    }
    else{
        apiCall = axios.get(swapiPlanetUrl);
        console.log('default apiCall returns:', apiCall);
    }

    apiCall.then(data => {
    //log the data before moving on
    req.session.category = '/planet';
    req.session.next = data.data.next;
    req.session.previous = data.data.previous;

    res.json(data.data);
    })
    .catch(err => {
    //log the error before moving on!
    console.log("There's an error", err)
    res.json(err);
    })
});

app.get('/next', (req, res) => {
    res.redirect(req.session.category + '/next');
});
app.get('/prev', (req, res) => {
    res.redirect(req.session.category + '/prev');
});
app.get('/all', (req, res) => {
    res.redirect(req.session.category + '/0');
});


app.listen(7000, () => {
    console.log("Server running on port 7000");
});