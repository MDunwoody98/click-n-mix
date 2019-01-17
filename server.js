var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 8080;//What port to listen on?

var app = express();

//view engine
app.set('views', path.join(__dirname, 'views'));//our views will be in the views folder
app.set('view engine', 'ejs');//Our viewEngine will be ejs
app.engine('html', require('ejs').renderFile);//render .html files

//Set static folder
app.use(express.static(path.join(__dirname, 'client')));//All our angular2 stuff will go in here

//Body parser middleware
app.use(bodyParser.json());//we want to parse json
app.use(bodyParser.urlencoded({extended: false}));

//Create route
app.use('/', index) //'/' should be associated with index route file
app.use('/api', tasks)//URL for tasks is /api - /api is what we'll use when we want to interact with the API

app.listen(port, function(){
    console.log('Server started on port '+port);
})