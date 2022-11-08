import axios from 'axios'
import { PokemonDetail } from '../types/PokemonDetail';

export async function getPokemonDetails(name: string | undefined): Promise<PokemonDetail>{
   const endpoint = `${import.meta.env.VITE_POKEAPI}/pokemon/${name}`;

   const response = await axios.get<PokemonDetail>(endpoint);

   return response.data;
}