const express = require('express')
const app = express()

app.get('/',(req,res)=>{
  res.send('<h1>hello knock knock! 🧑🏿‍💻</h1>')
})

app.listen(3000,()=>{
  console.log(`Server started at http://localhost:${3000}`)
})