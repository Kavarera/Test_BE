const express = require('express')
const router = express.Router();

const { 
    getAllFood, getFoodById, postFood
  } = require('../controllers/foodController');

  router.get("/foods/",getAllFood);
  router.get("/foods/:foodId",getFoodById);
  router.post("/foods",postFood);



module.exports=router;