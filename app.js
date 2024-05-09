require("dotenv").config();
const express = require("express");

const app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  const foodRouter = require('./routes/routes');
  app.use(express.json());
  app.use(foodRouter);

  app.use("/", (req,res,next)=>{
    res.status(404).json({
      version: "V2",
      message: "API Active"
    })
  });
  const PORT = process.env.PORT;


  app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
  });