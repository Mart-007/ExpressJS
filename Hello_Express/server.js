// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require('express');
// console.log("Let's find out what express is", express);

//invoke express and store the result in the variable app
var app = express();
// console.log("Let's find out what app is", app);

//use app's get method and pass it the base route '/' and a callback
app.get('/', function(req, res){
    //just for fun, take a look at the request and response objects
    // console.log("This request object", req);
    // console.log("This response object", res);

    //use the response object's .send() method to respond with an h1
    res.send("<h1> Hello Express</h1>");
})

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
// app.use(express.static(__dirname + "/stylesheet"));

//-------------------------------------------------------//
//With ejs

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');

// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

//adding route
app.get('/users', function(req, res){
    //hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render("users", {users: users_array});
})






//tell the express app to listen on port 800, always put this at the end of your server.js file
app.listen(8000, function(){
    console.log("listening on port 8000");
})

