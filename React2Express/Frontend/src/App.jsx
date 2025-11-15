import {useState,useEffect} from 'react'

function App(){
  const [data,setData]=useState([])

  // useEffect(()=>{
  //   fetch('http://localhost:3000')
  //   .then(res=>res.json())
  //   .then(data=>{
  //     setData(data)
  //   })
  //   .catch(err=>console.log(err))
  // },[])
  
  useEffect(()=>{
    (async()=>{
      try{
        let res = await fetch('http://localhost:3000')
        let data = await res.json()
        setData(data)
      }
      catch(err){
        console.log('Something Wrong ',err)
      }
    })()
  },[])

  return(
    <>
    <ul>
      {data.map((val,index)=>(
        <li key={index}>{val}</li>
      ))}
    </ul>
    </>
  )
}

export default App