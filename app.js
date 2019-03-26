var express = require('express'),
    app =express(),
    bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req,res,next){
    if(req.url.substr(-1)==='/'){
        res.send("Started")
    }
    next()
})
app.use('/v1',require('./routes'));
app.listen('9000',function(){
    console.log("Started");
})
module.exports =app;