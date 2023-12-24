import React from 'react'
import "./App.css"
import App from './App'



const Movie = ({data}) => {
  return (
    <>
    <div className='fullblackBG'>
        <div className='card'>
    {data.map((curElem)=>{
        return(
            <>
            <div className='column1'>
        <img className='image'  src={'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'} aria-placeholder='Image of Guardians of the Galaxy'/>
       </div>
        <div className='column2'>
        <span className='title'>MOVIE NAME : {curElem.Title} </span>
            <span className='year'>RELEASE DATE ⏲️ : {curElem.Released}</span>
            <span className='runTime'>RUN TIME ⏲️: {curElem.Runtime}</span>
            <span className='Genre'>CATEGORY : {curElem.Genre} </span>
            <span className='Actors'>ACTORS 🔄: {curElem.Actors}</span>
            <p className='plot'>PLOT 🎙️ : {curElem.Plot} </p>
        </div>    
            </>
        )
    })}
        </div>
      </div>
    </>
  )
}

export default Movie
