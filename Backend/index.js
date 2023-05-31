// 1.importing
const express = require("express");
const {studentmodel} = require('./model/model')
const cors =require('cors')
//2. initialization
const app = new express();

// parsing body parameterts
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
// 3.Api creation
app.get('/api',(req,res)=>{
    res.json([{"name":"Tiya","grade":"2"},{"name":"maya","grade":"2"}])
})

// to post data
app.post('/create',async(req,res)=>{
  console.log("post",req.body)
    var result =  await new studentmodel(req.body)
    result.save();
    res.send("data added")
  
})

// to view data
app.get('/view',async(req,res)=>{
  var data = await studentmodel.find();
  console.log(data)
  res.json(data)
})

// to delete
app.delete('/delete/:id',async(req,res)=>{
  let id = req.params.id;
  // console.log("delete:",req.body._id)
  await studentmodel.findByIdAndDelete(id)
  res.send("data deleted")
})

// to update

app.put('/update/:id',async (req,res)=>{
  let id = req.params.id;
  console.log("update id:",id)
  try{
  console.log("update:",req.body)
  console.log("update id:",id)  
 

  var result = await studentmodel.findByIdAndUpdate(id,req.body)
  
  console.log("updateResult:"+result)
  

  res.send("data updated")
}

catch(error){
  res.status(500).send(error)
 
}
})
// app.post("/adddata", (req, res) => {
//   let sample = new studentmodel(req.body);
//     sample.save()
    
//         .then(sample => {
//             res.status(200).json({
//                 status: 200,
//                 message: 'Sample added successfully'
//             });
//         })
//         .catch(err => {
//             res.status(400).send({
//                 status: 400,
//                 message: 'adding new sample failed'
//             });
//         });
// });

// 4.setting up port

app.listen(3005, () => {
  console.log("listing to port 3005");
});
