import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PokemonCard from './components/PokemonCard'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen overflow-x-hidden bg-[#2e2b2b]'>
        <Header /> 
      <PokemonCard />
      < Toaster />
    </div>
  )
}

export default App
