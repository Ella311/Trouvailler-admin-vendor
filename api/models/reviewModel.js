const mongoose=require('mongoose')
const Schema=mongoose.Schema


const reviewSchema=new Schema({
    reviewnote:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    }
    
   
    
    
   
   

},{timestamps:true})
//giving a name workout to schema  model
module.exports=mongoose.model('Review',reviewSchema)
