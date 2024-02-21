
const express = require('express');
const app = express();
const port = 8000 ;



app.get("/",(req,res)=>{
    res.send("i'm server - from backend ")
})



app.use((req,res)=>{
    res.send("404 page not found !");
})


app.listen(port,()=>{
    console.log(`server running on port -  ${port}`);
})