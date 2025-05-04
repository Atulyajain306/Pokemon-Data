import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import { useState } from 'react';
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import toast from 'react-hot-toast';
import "../App.css"
const Searchbar = () => {
  const [Title, setTitle] = useState("");
  const {setPokemonAll}=useAuthContext();
  const { pokemonList} = useFetchPokemon();
  const HandleTitle=(e)=>{
    const t=e.target.value
    setTitle(t);
      if(t.trim()==="" || t.trim()===" "){
        setPokemonAll(pokemonList);
        return ;
      }
      const title=pokemonList.filter((c)=> c.name && c.name.toLowerCase().includes(Title.toLowerCase()));
      if(title.length===0){ 
        toast.error("No Relevant names Found");
         return; 
      }
      console.log(pokemonList);
      setPokemonAll(title);

  }
  return (
    <div id='search'>   
<input type="search" className=' relative rounded-lg placeholder:text-xl md:w-72 w-40 pl-10  border border-slate-600  bg-zinc-200 placeholder:bottom-1  placeholder:relative border-spacing-2 text-gray-500 placeholder:font-medium font-normal md:px-8 px-4' value={Title} onChange={HandleTitle} placeholder='Search' />  
    </div>
  )
}

export default Searchbar