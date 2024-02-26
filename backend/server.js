const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const aliceModel = require('./models/alice')
const router = require('./routes/TaskRoute')
const userRoute = require("./routes/userRoute")
require('dotenv').config()
const port = process.env.PORT
const mongodbID = process.env.MONGO_ID

// middlewares
app.use(express.json())
app.use(cors())


// routes
app.use("/api/workout",router)
app.use("/api/user",userRoute)



// app.post("/home", async (req,res)=>{
//     // res.send(`i'm server`);
//     // console.log(req.body);
//     let data = req.body ;
//     try {
//         await aliceModel.create(data);
//     } catch (error) {
//         console.log(`got error while insert data into database !`);
//     }
    
// })
// app.get("/read", async (req,res)=>{
//     try {
        
//         let data = await aliceModel.find()
//         if(data){
//             res.json(data)
//         }
//     }
//     catch(err) {
//         console.log(`error with getting data from mongodb databse`);
//     }
// })
// app.delete("/delete:id",async(req,res)=>{
//     try {
//         let id = req.params.id
//         if(id) {
//             await aliceModel.findByIdAndDelete(id)
//         }
//     } catch (error) {
//         console.log(`err with delete document by id in db !`);
//     }
// })



// 404 page
app.use((req,res)=>{
    res.send("404 page not found !");
})



// Database connection
mongoose.connect(`${mongodbID}/Database1`)
.then(()=>{
    console.log(`connected to database successfully`);
    app.listen(port,()=>{
        console.log(`server running on port -  ${port}`);
    })
})
.catch((val)=>{
    console.log(`db connection error - ${val}`);
})