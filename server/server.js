const express = require('express')
const app = express()
const PORT = 8080
const dotenv = require('dotenv')
dotenv.config()

app.use(express.json())



app.get('/',(req,res)=>{ 
    res.send('HELO WORLD')
})


app.listen(PORT, ()=>{
    console.log(`server listening on port: ${PORT}`);
})