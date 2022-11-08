import { PokemonDetail } from "../../../../types/PokemonDetail";
import {Container, Card, Image, Title, Types, Text} from './style';

interface PokemonDetailProps{
  pokemon: PokemonDetail | undefined;
}

export const PokemonDetails: React.FC<PokemonDetailProps> = ({pokemon}) => {
  return (
    <>
      <Container display="flex" mt='3em'>
        <Card>
          <Container direction='column'>
            <Image src={pokemon?.sprites.versions?.["generation-v"]["black-white"].animated?.front_default}/>
              <Title>
                {pokemon?.name}
              </Title>
            <Container display='flex' direction='row' mt='.1em' gap=".1em">
              {pokemon?.types.map(type => <Types>{type.type.name}</Types>)}
            </Container>
          </Container>
          <Container display='flex' direction='column' mt='.3em' gap='.1em'>
            <Text>
              Height: {pokemon?.height}m
            </Text>
            <Text>
              Weight: {pokemon?.weight}kg
            </Text>
            <Text>
              Base Experience: {pokemon?.base_experience}xp
            </Text>
          </Container>
        </Card>
      </Container>
    </>
  )
}
