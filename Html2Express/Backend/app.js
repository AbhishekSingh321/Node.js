const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/',(req,res)=>{
  let data=['Stark','Flash','Jim Carrey','Barry Allen']
  res.send(data)
})

app.listen(3000,()=>{
  console.log(`Server started at http://localhost:${3000}`)
})