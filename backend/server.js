const express = require('express');
const app = express();
const port = 8000 ;


// middlewares
app.use(express.json())


// routes
app.get("/",(req,res)=>{
    res.send("i'm server - from backend ")
})

// 404 page
app.use((req,res)=>{
    res.send("404 page not found !");
})


app.listen(port,()=>{
    console.log(`server running on port -  ${port}`);
})