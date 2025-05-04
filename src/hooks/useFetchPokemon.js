import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

export const useFetchPokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {setPokemonAll}=useAuthContext();
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const promises = [];
        for (let i = 1; i <= 150; i++) {
          promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
        }
        const results = await Promise.all(promises);
        const pokemons = results.map(res => ({
          id: res.data.id,
          name: res.data.name,
          image: res.data.sprites.front_default,
          types: res.data.types.map(t => t.type.name),
        }));
        setPokemonList(pokemons);
        setPokemonAll(pokemons);
      } catch (err) {
        setError('Failed to fetch Pokémon');
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  return { pokemonList, loading, error };
};
