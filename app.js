var express = require('express');
var app = express();
app.set('view engine','ejs');

app.use('/public', express.static('public'));


// Page Structure and Links //

app.get('/', function (req, res){
res.render("home");
});

app.get('/work', function (req, res){
res.render("work");
});

app.get('/about', function (req, res){
    res.render("about");
});

app.get('/contact', function (req, res){
    res.render("contact");
});

app.get('/sign-in', function (req, res){
    res.render("signin");
});

// Server




app.listen(3000);
console.log('Node app is running on port 3000');