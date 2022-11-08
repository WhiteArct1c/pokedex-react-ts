import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "../../services/getPokemonDetails";
import { PokemonDetail } from "../../types/PokemonDetail";
import { PokemonDetails } from "./components/PokemonDetails";

export const Pokemon: React.FC = () => {

    const {name} = useParams();
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetail | undefined>(undefined);
    
    useEffect(() => {
        if (!name) return;
        
        getPokemonDetails(name).then((response) => setSelectedPokemon(response));
    }, [selectedPokemon]);
    
    return (
        <>
            <PokemonDetails pokemon={selectedPokemon}/>
        </>
    );
}
