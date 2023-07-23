const List = require("../models/ListM");
const Router = require("express").Router();
const verify = require("../verifeToken");

// Create

Router.post("/",verify,async(req,res)=>{
    if(req.user.isAdmin){
        const movieList = new List(req.body);
    try{
        const savedMovieList = await movieList.save();
        res.status(200).json(savedMovieList);
        }
    catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(400).json("You are not authorized");
    }
});


// Delete 
Router.delete("/:id",verify,async(req,res)=>{
    if(req.user.isAdmin){
    try{
       await List.findByIdAndDelete(req.params.id);
       res.status(200).json("List deleted successfully");
        }
    catch(err){
            res.status(400).json(err);
        }
    }
    else{
        res.status(500).json("You are not authorized");
    }
})

//Get
Router.get("/", verify, async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try {
      if (typeQuery) {
        if (genreQuery) {
          list = await List.aggregate([
            { $sample: { size: 10 } },
            { $match: { type: typeQuery, genre: genreQuery } },
          ]);
        } else {
          list = await List.aggregate([
            { $sample: { size: 10 } },
            { $match: { type: typeQuery } },
          ]);
        }
      } else {
        list = await List.aggregate([{ $sample: { size: 10 } }]);
      }
      res.status(200).json(list);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = Router;
