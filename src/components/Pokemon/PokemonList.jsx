import { getPokemonImg } from "../../services/pockemonapi";
import { PokemonListItem } from "./PokemonListItem";

export const PokemonList = (
    {
        pokemonList,
        nextHandler,
        previousHandler
    }
)=>{
    return (
        <section className="pokemonList">
            { pokemonList.map(
                (item)=>{
                    return (
                        <PokemonListItem
                            key={item.name}
                            name={item.name}
                            url={item.url}
                            {...getPokemonImg(item.url)}
                        />
                    )
                }
            )}
        </section>
    );
}