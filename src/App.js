import React, { useEffect, useState } from 'react'
import Movie from './Movie'

const App = () => {

  const [useData , updData] = useState([])

  const fetching = async ()=>{
    const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=bb4bb264")

    updData([await response.json()]); 
    
    
    }
  

  useEffect(()=>{

    fetching();

  },[])
  return (
    <>
      <Movie data={useData}/>
    </>
  )
}

export default App
