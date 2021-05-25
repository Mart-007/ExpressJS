const express = require('express');
const session = require('express-session');

const app = express();

app.use(express.static(__dirname + "/assets"));

app.set('veiws', __dirname + '/views');
app.set("view engine", 'ejs');

