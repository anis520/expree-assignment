const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const path = require('path')
const pagesrouter = require('./routes/pagesRoute')
const prouductrouter = require('./routes/productRoute')

// environment varibles


dotenv.config()
const port = process.env.PORT || 4000;


// express init


const app = express()


// data manage


app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/public',express.static('public'))



//router init


app.use('/page',pagesrouter)
app.use('/prouduct',prouductrouter)



// server listen 
 
app.listen(port,() =>{ 
     
console.log(`server was running on port ${port}`.bgYellow.red);

})   