var User = require('../utils/mongo-connection');

function model() {

}

model.prototype.post = function (req, callback) {
   console.log("req.body", req.body);
    if (req.body) {
        User.create(req.body, function (err, data) {
            if (err) {
               // console.log('err', err);
                callback(err, null);
            }else {
                 callback(null, {"msg": "signUp Successfully please Enjoy the Service"})
            }
        });
    }
};

model.prototype.get = function (req, callback) {
    console.log("req.body", req.body);
     if (req.body) {
         User.find({}, function (err, data) {
             if (err) {
                // console.log('err', err);
                 callback(err, null);
             }else {
                  callback(null, data)
             }
         });
     }
 };

 model.prototype.get1 = function (req, callback) {
     console.log(req.query.name)
     if (req.params) {
         User.find({"name":req.params.name}, function (err, data) {
             if (err) {
                // console.log('err', err);
                 callback(err, null);
             }else {
                  callback(null, data)
             }
         });
     }
 };

 model.prototype.get2 = function (req, callback) {
    console.log(req)
    if (req.params) {
        User.find({"course":req.params.course}, function (err, data) {
            if (err) {
               // console.log('err', err);
                callback(err, null);
            }else {
                 callback(null, {"count":data.length})
            }
        });
    }
};
module.exports = model;