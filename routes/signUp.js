var express = require('express'),
    router = express.Router(),
    controller =require('../controllers/signUpController'),
    cca =new controller;

router.post('/',cca.post.bind(cca));
router.get("/getData",cca.get.bind(cca));
router.get("/getbyname/:name",cca.getby.bind(cca))
router.get('/count/:course',cca.getbycount.bind(cca))

module.exports = router;