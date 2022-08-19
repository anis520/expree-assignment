const express = require('express')

const path = require('path')
const { home } = require('../controllers/pagecontroler')
// cosnt { home }=require('/controllers/pagecontroler')



// init router

const router = express.Router()



//routes


router.get('/home',home)
router.get('/contact',(req,res)=>{

res.status(200).sendFile(path.join(__dirname,'../public/contact.html'))



})
router.get('/about',(req,res)=>{

res.status(200).sendFile(path.join(__dirname,'../public/about.html'))



})
router.post('/post',(req,res)=>{


    res.status(200).json(req.body)



})


//router export


 module.exports = router