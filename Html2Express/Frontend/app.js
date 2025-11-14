let list=document.querySelector('ul')
let para=document.querySelector('p')

fetch('http://catfact.ninja/fact')
.then(res=>res.json())
.then(data=>{
  para.innerHTML=data.fact
})
.catch(err=>console.log('Something Wrong : ',err))

async function load(){
  try{
    let res = await fetch('http://localhost:3000')
    let data = await res.json()
    list.innerHTML=data.map(name => `<li>${name}</li>`).join('')
  }
  catch(err){
    list.innerHTML='<h1>Server Down</h1>'
    console.log('Something Wrong ',err)
  }
}

load()

