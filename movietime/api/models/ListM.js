const mongoose = require("mongoose")

const ListModelM = mongoose.UseSchema(
{
    title:{type:String,required:true,unique:true},
    type:{type:String},
    content:{type:String},
    genre:{type:Array},
},{timestamps:true}
)

module.exports = mongoose.Schema("ListModel",ListModelM); 