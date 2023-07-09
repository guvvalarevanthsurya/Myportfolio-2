const express = require("express");
const bodyParser=require("body-parser");
const app = express();
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("images"));
app.use(express.static("public"));
app.use("/js", express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
  
});
app.post("/",function(req,res){
  var name=req.body.Name;
  var age=req.body.age;
  fs.appendFile("name.txt", (fs.existsSync("name.txt") ? "\n" : "") + (name,age), function(err) {
    if (err) {
      console.error(err);
    }
    else{
      res.sendFile(__dirname+"/app.html");
    }
  });
 
})

app.listen(4999, function() {
  console.log("Server started on port 4999");
});
