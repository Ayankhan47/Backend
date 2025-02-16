const express = require("express");
const app = express();
app.use(express.json());
const routeModel = require("./models/route.model");
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/create",async (req, res) => {
    const  {name,distance,time} = req.body
    const route =  await routeModel.create(
        {
            name,
            distance,
            time
        }
    )
    res.send(route)
});
module.exports = app;