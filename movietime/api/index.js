const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const authRoute = require("./routes/authRoute");

const app = express()
dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
useNewUrlParser:true,
useUnifiedTopology:true,

}).then(()=>console.log("connection successful")).catch(err=>console.log(err))

app.use(express.json());
app.use("/api/auth",authRoute);

app.listen(8800,()=>{
    console.log("Backend server is running");
});


// "mongodb+srv://ameyagidh21999:Ameyagidh@1234@mymovietimecluster.xurjgqn.mongodb.net/"