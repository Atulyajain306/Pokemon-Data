import React from 'react';
import { ImSpinner8 } from "react-icons/im";
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import { useAuthContext } from '../context/AuthContext';

const PokemonCard = () => {
  const { pokemonList, loading, error } = useFetchPokemon();
  const {PokemonAll}=useAuthContext();
   
    
  if (loading) {
      
    return (
      <div className='flex items-center justify-center h-screen overflow-y-hidden text-[#919492] text-4xl animate-spin'>
        <ImSpinner8 size={120} />
      </div>
    );
  }

  if (error) {
    return <div className='text-red-500 items-center justify-center text-2xl p-4'>Error loading Pokémon</div>;
  }

  return (
    <div className='flex gap-x-3 gap-y-2 pt-16 relative left-3 flex-wrap overflow-hidden pb-10 bg-[#2e2b2b]' id='cards'>
      {Array.isArray(PokemonAll) && PokemonAll.map((pokemon) => (
        <div key={pokemon.id} className='w-52 h-72 bg-gray-400 relative cursor-pointer hover:bg-slate-400 m-2 rounded-lg flex flex-col items-center justify-center'>
          <img src={pokemon.image} alt={pokemon.name} className='w-44 h-44 object-contain rounded-xl border-neutral-700 border-2 mt-4'/>
          <h3 className='text-xl font-semibold capitalize'>{pokemon.name}</h3>
          <p className='text-base text-gray-900 font-semibold'>Id: {pokemon.id}</p>
          <p className='text-lg text-zinc-800 font-bold'>Type: {pokemon.types.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default PokemonCard;
