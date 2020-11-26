const express = require('express')
const app=express()

const PORT=process.env.PORT||4444

app.get('/',(req,res)=>{
    res.send('hello world. how are you?')
})

app.listen(PORT,(req,res)=>{
    console.log(`started at http://localhost:${PORT}`)
})