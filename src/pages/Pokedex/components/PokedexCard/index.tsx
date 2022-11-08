import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea } from '@mui/material';
import {Link}  from    'react-router-dom';
import { PokemonListInterface } from '../../../../services/listPokemons';
import { useEffect, useState } from 'react';
import { getPokemonDetails } from '../../../../services/getPokemonDetails';
import { PokemonDetail } from '../../../../types/PokemonDetail';

interface CardProps{
    pokemon: PokemonListInterface;
}

export const PokemonCard: React.FC<CardProps> = ({pokemon}) => {

  const [pokemonView, setPokemonView] = useState<PokemonDetail | undefined>(undefined)
  
  useEffect(() => {
    if (!pokemon) return;
    
    getPokemonDetails(pokemon.name).then((response) => setPokemonView(response));
  }, []);

  return (
    <Link to={`pokemon/${pokemon.name}`}>
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            width='300'
            image={pokemonView?.sprites.front_default}
            alt=""
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
