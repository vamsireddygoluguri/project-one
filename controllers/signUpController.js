var model = require('../models/signUpModel'),
    ccb =new model();
function controller() {

}
controller.prototype.post = function (req,res,next) {
    ccb.post(req,function(err,data){
        if(err)
            res.send(err);
        res.send(data);
    });
};
controller.prototype.get = function (req,res,next) {
    ccb.get(req,function(err,data){
        if(err)
            res.send(err);
        res.send(data);
    });
};
controller.prototype.getby = function (req,res,next) {
    ccb.get1(req,function(err,data){
        if(err)
            res.send(err);
        res.send(data);
    });
};
controller.prototype.getbycount = function (req,res,next) {
    ccb.get2(req,function(err,data){
        if(err)
            res.send(err);
        res.send(data);
    });
};
module.exports = controller;