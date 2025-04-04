import { getPokemonImg } from "../../services/pockemonapi";
import { PokemonListItem } from "./PokemonListItem";

export const PokemonList = ({ pokemonList, clickHandler = () => {} }) => {
    return (
        <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {pokemonList.map((item) => {
                const { code, imgSprite } = getPokemonImg(item.url); // Extraemos los datos esenciales
                return (
                    <PokemonListItem
                        key={code} // Usamos el código en vez del nombre (más seguro)
                        name={item.name}
                        code={code}
                        imgSprite={imgSprite}
                        onClickHandler={clickHandler}
                    />
                );
            })}
        </section>
    );
};
