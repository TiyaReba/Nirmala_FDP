const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://tiyars:tiya@cluster0.l6d4x3p.mongodb.net/test?retryWrites=true&w=majority")
.then(()=>{
   console.log("db connected")

})
.catch(err=>console.log(err))

 let Schema = mongoose.Schema;

 const studentSchema = new Schema({
    sname:String,
    sgrade:Number
 })

 var studentmodel = mongoose.model("students",studentSchema);

 module.exports = {studentmodel}