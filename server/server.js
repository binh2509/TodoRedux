var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');


mongoose.connect('mongodb://localhost:27017/user', {}, function () {
    console.log('Connected Database')
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


var User = mongoose.model('User', {
    name: String,
    password: String,
    email: String,

});

app.post('/save-contact', function (req, res) {
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    user.save(function (err) {
        if(err){
            res.json({success: false, message:'Add contact failed!'});
        }else {
            res.json({success: true, message:'Add contact successfully!'});
        }
    })
});

app.listen(8000, function () {
    console.log('Example app listening on port 3000!')
});