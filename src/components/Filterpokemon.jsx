import React from 'react';
import { useState } from 'react';
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import { useAuthContext } from '../context/AuthContext';
const Filterpokemon = () => {
    const [filter, setfilter] = useState("");
    const {pokemonList}=useFetchPokemon();
    const {setPokemonAll}=useAuthContext();
    const HandleFilter=()=>{
        if(filter.trim()===""){
            setPokemonAll(pokemonList);
            return ;
        }
        const r=pokemonList.filter((c)=> c.types && c.types.includes(filter));
        setPokemonAll(r); 
        
    }
  return (
    <div id='filter'>
 <select className=' rounded-lg bg-zinc-200 py-1 md:text-lg text-base md:bottom-0 bottom-[2px] md:pl-2 relative overflow-y-auto  text-black ' value={filter} onChange={(e)=>setfilter(e.target.value)} onClick={HandleFilter} >
        <option value="">Filter</option> 
        <option value="fire">Fire</option>
        <option value="grass">Grass</option>
        <option value="poison">Poison</option>
        <option value="water">Water</option>
        <option value="flying">Flying</option>
        <option value="electric">Electric</option>
        <option value="ground">Ground</option>
        <option value="fairy">Fairy</option>
        <option value="normal">Normal</option>
        <option value="bug">Bug</option>
        <option value="rock">Rock</option>
        <option value="ice">Ice</option>
        <option value="steel">Steel</option>
        <option value="psychic">Psychic</option>
        <option value="fighting">Fighting</option>
        <option value="ghost">Ghost</option>
        <option value="dragon">Dragon</option>
      </select>
    </div>
  );
};

export default Filterpokemon;
