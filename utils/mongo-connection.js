var mongoose = require("mongoose"),
    signUpSchema = new mongoose.Schema({
        name: String,
        email: String,
        course: String,
        instructorName:String,
        batchNo:String
    }),
    User = mongoose.model("CallServieData", signUpSchema);
mongoose.connect("mongodb://localhost:27017/CallServie",{useNewUrlParser:true});

module.exports =User;