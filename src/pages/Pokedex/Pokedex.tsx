import { Container, Grid } from '@mui/material';
import React, {useState, useEffect} from 'react';

import { PokemonCard } from './components/PokedexCard';
import {listPokemons, PokemonListInterface} from '../../services/listPokemons'


export const Pokedex: React.FC = () => {

   const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);

   useEffect(() => {
      listPokemons().then((response) => setPokemons(response.results));
   }, []);

   return (
      <Container maxWidth='lg' sx={{mt: 2}}>
         <Container maxWidth='xl'>
            <Grid container spacing={2}>  
               {pokemons.map(pokemon => {
                  return(
                     <Grid key={pokemon.name} item xs={6}  md={3} lg={3}>
                        <PokemonCard pokemon={pokemon}/>
                     </Grid> 
                  )
               })}  
            </Grid>
         </Container>
      </Container>
   );
};
