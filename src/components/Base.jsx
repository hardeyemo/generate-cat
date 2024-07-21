import React from 'react'
import '../components/Base.css'
import {useState, useEffect} from 'react'
const Base = () => {

  const [data, setData] = useState('')

  const handleMe = () =>{
    fetch('https://catfact.ninja/fact')
    .then((res)=> res.json())
    .then((data) => {
     setData(data.fact)
    })
        
  }

  useEffect(()=>{
   fetch('https://catfact.ninja/fact')
   .then((res)=> res.json())
   .then((data) => {
    setData(data.fact)
   })
    
  },[])






  return (
    <div className='back'>
      <div className='cat'>
      <button onClick={handleMe}>Generate Cat Fact</button>
      <p>"{data}"</p>
    </div>
    </div>
  )
}

export default Base
