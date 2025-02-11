const express = require("express");
const cors = require("cors")
var fs = require("fs");
const app = express();
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/create", (req, res) => {
  const { fileName, fileData } = req.body;
  const filePath = "./uploads/" + fileName;
  fs.writeFile(filePath, fileData, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("File saved");
    }
  });
});
app.patch("/update/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = "./uploads/" + fileName;
  const { fileData } = req.body;
  fs.writeFile(filePath, fileData, (err) => {
    if (err) {
      console.log(err);
      res.send("error in updating file");
    } else {
      res.send("File updated");
    }
  });
});
app.get("/read/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = "./uploads/" + fileName;

  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log(err);
      res.send("error in reading file");
    } else {
      res.send(data);
    }
  });
});
app.get("/get-all",(req,res)=>{
    fs.readdir("./uploads",(err,files)=>{
        if(err){
            console.log(err);
            res.send("error in reading files");
        }else{
            res.send(files)
        }
    })
})
app.delete("/delete/:fileName",(req,res)=>{
    const fileName = req.params.fileName;
    const filePath = "./uploads/" + fileName;
    fs.unlink(filePath,(err)=>{
        if(err){
            console.log(err);
            res.send("error in deleting file");
        }else{
            res.send("File deleted");
        }
    })
})

app.listen(3000,()=>{
  console.log("Server is running on port 3000");
  
});
