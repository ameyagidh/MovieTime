const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const authRoute = require("./routes/authRoute");
const UserRoute = require("./routes/UserRoute");
const MoviesRoute = require("./routes/MoviesRoute")

const app = express()
dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
useNewUrlParser:true,
useUnifiedTopology:true,

}).then(()=>console.log("connection successful")).catch(err=>console.log(err))

app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",UserRoute);
app.use("/api/movies",MoviesRoute);

app.listen(8800,()=>{
    console.log("Backend server is running");
});


// "mongodb+srv://ameyagidh21999:Ameyagidh@1234@mymovietimecluster.xurjgqn.mongodb.net/"
