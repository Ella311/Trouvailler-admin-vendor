const express=require('express')
const router=express.Router()
const Offers=require('../models/offerModel')
const { createOffer,
    getOffer,
    getOffers,
    deleteOffer,updateOffer
}=require('../controllers/offerController')
const {verifyAdmin}=require('../utils/verifyToken')

//from server,/api/workout/users will be path

//get request ,get all request
router.get('/',getOffers)
//to get single workout
router.get('/:id',getOffer)
//post a new request
router.post('/',verifyAdmin,createOffer)
//delete a new request
// router.delete('/:id',(req,res)=>{
//     res.json({mssg:'delete a workouts'})
// })

router.delete('/:id',verifyAdmin,deleteOffer)
//update a workout
// router.patch('/:id',(req,res)=>{
//     res.json({mssg:'update a workouts'})
// })
router.patch('/:id',verifyAdmin,updateOffer)
module.exports=router