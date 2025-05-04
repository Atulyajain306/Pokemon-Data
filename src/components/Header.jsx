import React from 'react'
import { SiPokemon } from "react-icons/si";
import { CgPokemon } from "react-icons/cg";
import Searchbar from './Searchbar';
import "../App.css"
import Filterpokemon from './Filterpokemon';
const Header = () => {
  return (
    <div className=' text-2xl h-12 fixed font-medium flex bg-[#615c5c] text-white items-center justify-center md:w-[99vw] w-full  z-20 md:gap-x-9 gap-x-3' id='background'>
     <SiPokemon size={100} className='relative' id='icon' />
       <div className='relative px-[50vh] font-mono md:block hidden' id='title'>Pokemon List</div>
      <CgPokemon sixe={250} className='relative font-light md:left-16 md:size-6 size-8 left-11 text-black z-10' id='PokemonBall' />
      <Searchbar />
      <Filterpokemon />
      </div>
  )
}

export default Header