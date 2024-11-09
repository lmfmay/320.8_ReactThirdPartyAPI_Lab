import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import './style.css'
import StarshipCard from './components/StarshipCard'
import StarshipInfo from './pages/StarshipInfo'

function App() {
  return (
    <>
    <div className='app'>
      <h1 className='header'>StarShips</h1>
      <Routes>
            <Route path='/' element={<StarshipCard/>}/>
            <Route path='/starships/:id' element={<StarshipInfo/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App

//Components: card
//What is communicating with the api? card, with {name} in div
// 