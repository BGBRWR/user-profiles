var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require("./config.json");
var user = require("./controllers/userCtrl");
var profile = require("./controllers/profileCtrl");
var corsOptions = {
    origin: 'http://localhost:config.port'
};


var app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));


app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}));
app.use(express.static(__dirname + '/public'));

app.post("/api/login", user.login);
app.get("/api/profiles",profile.friendPush);



app.listen(config.port, function() {
  console.log("Yo, it's your port, "+ config.port);
});
