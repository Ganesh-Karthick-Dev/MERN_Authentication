const express = require('express');
const app = express();
const port = 8000 ;
const cors = require('cors')
const mongoose = require('mongoose')
const aliceModel = require('./models/alice')


// middlewares
app.use(express.json())
app.use(cors())


// routes
app.post("/home", async (req,res)=>{
    // res.send(`i'm server`);
    console.log(req.body);
    let data = req.body ;
    try {
        await aliceModel.create(data);
    } catch (error) {
        console.log(`got error while insert data into database !`);
    }
    
})
app.get("/read", async (req,res)=>{
    try {
        
        let data = await aliceModel.find()
        if(data){
            res.json(data)
        }
    }
    catch(err) {
        console.log(`error with getting data from mongodb databse`);
    }
})



// 404 page
app.use((req,res)=>{
    res.send("404 page not found !");
})


// Database connection
mongoose.connect('mongodb://localhost:27017/projectAlice')
.then(()=>{
    console.log(`connected to database successfully`);
    app.listen(port,()=>{
        console.log(`server running on port -  ${port}`);
    })
})
.catch((val)=>{
    console.log(`db connection error - ${val}`);
})