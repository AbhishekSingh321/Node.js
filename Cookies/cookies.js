const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(cookieParser())

app.post('/',(req,res)=>{
  const {username} = req.body
  res.cookie('username', username, {maxAge: 60000 });
  res.status(200).json({'msg':'cookie set'})
})

app.get('/',(req,res)=>{
  const username = req.cookies.username
  res.send(`<h1>hello knock knock! ${username} 🧑🏿‍💻</h1>`)
})

app.listen(3000,()=>{
  console.log(`Server started at http://localhost:${3000}`)
})