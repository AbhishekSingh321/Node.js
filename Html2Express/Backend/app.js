const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

let data=['Stark','Flash','Jim Carrey','Barry Allen']

app.get('/',(req,res)=>{
  res.send(data)
})

app.post('/',(req,res)=>{
  console.log("Received:", req.body); 
  data.push(req.body) 
  res.status(201).json({ message: "Data added", data: req.body })
})

app.listen(3000,()=>{
  console.log(`Server started at http://localhost:${3000}`)
})