var express = require('express'),
    router = express.Router();
console.log("This is SignUP version one 1");
router.get('/', function (req, res, next) {
    res.send('This is CallService version one');
    next();
});
router.use('/candidatedata', require('./signUp'));
//router.use('/getData', require('./logIn'));

module.exports = router;
