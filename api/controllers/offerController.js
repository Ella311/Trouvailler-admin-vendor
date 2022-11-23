const Offer = require('../models/offerModel')
const mongoose=require('mongoose')

//get all workout
//inside 'find' you can pass params ifi you need filtered result
const getOffers=async(req,res)=>{
    const offer=await Offer.find({}).sort({createdAt:-1})
res.status(200).json(offer)
}
//get a single workout
const getOffer=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such hotel exists'})
    }
    const offer = await Offer.findById(id)
    if(!offer){
        return res.status(404).json({error:'No such hotel found'})
    }

  res.status(200).json(offer)
}

//create a single workout--changes with params
const createOffer=async (req,res)=>{
    const {title,
        description,
/* type, */
location,
/* address, */
/* rooms,
images, */

/* rating,
 */cheapestPrice
/* featured */}=req.body
    //add to db
    try{
    
    const offer = await Offer.create({title,
        /* type, */
        location,
        /* address, */
        /* rooms,
        images, */
        description,
        /* rating,
         */cheapestPrice
        /* featured */})
    res.status(200).json({offer})}
    //res.json({mssg:'post a new workouts'})
    catch(error){
        res.status(500).json({error:error.message})
    }
}

//delete a workout
const deleteOffer=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such hotel to delete'})
    }
    const offer = await Offer.findOneAndDelete({_id:id})
    if(!offer){
        return res.status(400).json({error:'No such hotel found'})  
    }
    res.status(200).json(offer)
}

//update a workout
const updateOffer=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such hotel to delete'})
    }
    const offer = await Offer.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!offer){
        return res.status(400).json({error:'No such hotel found'})  
    }
    res.status(200).json(offer)
}
//exports
module.exports={
    createOffer,
    getOffers,
    getOffer,
    deleteOffer,
    updateOffer
}