require('dotenv').config();
const {nanoid} = require("nanoid");

let foodList = require("../model/foodModel");
const getAllFood = async(req,res,next)=>{
    try{
        res.status(200).json({
            status: "Success",
            message: "Successfully fetch all Food data",
            foods: foodList
          })
    } catch(e){
        res.status(e.statusCode || 500).json({
            status: "Error",
            message: e.message
          })
    }
}
const getFoodById = async(req,res,next)=>{
    try {
        const {foodId} = req.params
        let food = foodList.filter(item => item.id == foodId);
        if(food.length>0){
          res.status(200).json({
            status: "Success",
            message: `Successfully fetch food with id ${foodId}`,
            food: food[0]
          })
        }else{
          const error = new Error(`Food with id ${foodId} doesn't exist`);
          error.statusCode = 400;
          throw error;
        }
      } catch (error) {
        res.status(error.statusCode || 500).json({
          status: "Error",
          message: error.message
        })
      }
}

const postFood = async(req,res,next)=>{
    try{
        const {
            nama,harga
          } = req.body;
        foodList.push(
            {
                "id": nanoid(16),
                "nama": nama,
                "harga": harga
            }
        );
        res.status(201).json({
            status: "Success",
            message: "Register Successfull!"
          });

    }
    catch (error) {
        res.status(error.statusCode || 500).json({
          status: "Error",
          message: error.message
        })
      }
}

module.exports = {getAllFood, getFoodById,postFood};