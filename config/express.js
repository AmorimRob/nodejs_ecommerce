module.exports= function(){
    var express = require('express');
    var app = express().set('view engine', 'ejs');

    return app;
}

