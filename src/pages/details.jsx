import { useParams } from "react-router";

import { Loading } from "../components/Loading";
import {usePokemonDetail} from '../services/pockemonapi';
import { PokemonAddCollection } from "../components/Pokemon/PokemonAddCollection";

export const Details = () => {
    const { pokeid } = useParams();
    const pokemonData = usePokemonDetail(pokeid);
    if(!pokemonData) {
        return (
            <Loading />
        )
    }
    return (
        <section>
            <h1>{pokemonData.name}</h1>
            <section>
                <img src={pokemonData.sprites.front_default} />
                <img src={pokemonData.sprites.back_default} />
            </section>
            <section>
                <PokemonAddCollection Pokecod={pokeid} />
            </section>
            <pre>
                {JSON.stringify(pokemonData, null, 2)}
            </pre>
        </section>
    );
};
