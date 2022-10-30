import { Container } from '@mui/material';
import { Box } from '@mui/system';

import React, {useState, useEffect} from 'react'
import { getPokemonDetails } from '../Pokemon/services/getPokemonDetails';
import {listPokemons, PokemonListInterface} from '../Pokemon/services/listPokemons'
import { PokemonDetail } from '../Pokemon/types/PokemonDetail';

import ButtonAppBar from './components/ButtonAppBar';

export const Pokedex: React.FC = () => {

   const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
   const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
   const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail| undefined>(undefined);

   useEffect(() => {
      listPokemons().then((response) => setPokemons(response.results));
   }, []);

   useEffect(() => {
      if (!selectedPokemon) return;

      getPokemonDetails(selectedPokemon.name).then((response) => setSelectedPokemonDetails(response))

   }, [selectedPokemon]);

   return (
      <>
      
      <ButtonAppBar />

      <Container maxWidth='lg'>
         <Box sx={{mt: 2}}>
            Pokemons: 
            {pokemons.map(pokemon => {
               return(
                  <>
                     <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>
                  </>
               )
            })}  
                           
            <h2>Pokemon selecionado: {selectedPokemon?.name || 'Nenhum pokemon selecionado!'}</h2>
         </Box>
      </Container>
      </>
   );
};
