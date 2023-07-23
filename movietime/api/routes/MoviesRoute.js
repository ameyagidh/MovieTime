const Router = require("express").Router();
const verify = require("../verifeToken");
const Movie = require("../models/MovieM");

//CREATE

Router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

// Update
Router.put("/:id",verify,async(req,res)=>{
    if(req.user.isAdmin){
        try{
            const updatedMovie = await await Movie.findByIdAndUpdate(
                req.params.id,
                {$set:req.body},
                {new:true}
            );
            res.status(201).json(updatedMovie);
    
        }catch(err){
            res.json(500).json(err);
        }
    }else{
        res.status(403).json("You need to be an Admin");
    }
});

// Delete
Router.delete("/",verify,async(req,res)=>{
    if(req.user.isAdmin){
        try{
            await await Movie.findByIdAndDelete(
                req.params.id,
            );
            res.status(201).json("Movie Deleted");
    
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("You need to be an Admin");
    }
});

//Get movie
Router.get("/find/:id",async(req,res)=>{
    try{
        const requiredMovie = await Movie.findById(req.params.id);
        res.status(200).json(requiredMovie);
    }
    catch(err){
        res.status(500).json("Movie not found");
    }
});


//Get random movie
Router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
      if (type === "series") {
        movie = await Movie.aggregate([
          { $match: { isSeries: true } },
          { $sample: { size: 1 } },
        ]);
      } else {
        movie = await Movie.aggregate([
          { $match: { isSeries: false } },
          { $sample: { size: 1 } },
        ]);
      }
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Get all
Router.get("/all", verify, async (req, res) => {
    const query_ = req.query.new;
    if(req.user.isAdmin){
        try {
          const AllMovies = query_ ? await Movie.find().sort({_id:-1}).limit(5) :await Movie.find().sort({_id:-1});
          res.status(200).json(AllMovies);
        } catch (err) {
          res.status(500).json(err);
        }
    }   
    else{
        res.status(500).json("You are not authenticated");
    }

  });



module.exports = Router;