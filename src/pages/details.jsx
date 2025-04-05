import { useParams } from "react-router";

import { Loading } from "../components/Loading";
import { usePokemonDetail } from '../services/pockemonapi';
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
        <section className="flex flex-col items-center justify-center text-center my-5">

            <div className="flex flex-col outline outline-red-500 outline-20  items-center justify-center text-center   rounded-4xl my-5 w-xs">

                <h1 className="font-extrabold bg-red-500 text-3xl text-white  py-2 items-center  w-full">        {pokemonData.nombre}</h1>
                <section className="my-4">
                    <img src={pokemonData.sprites.frontal} alt={`Vista frontal de ${pokemonData.nombre}`} />
                    <img src={pokemonData.sprites.trasera} alt={`Vista trasera de ${pokemonData.nombre}`} />
                </section>
                
            </div>
            <section className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-white hover:text-black active:scale-95 transition duration-300 my-4"> 
                <PokemonAddCollection 
                    Pokecod={pokeid}
                    imgSprite={pokemonData.sprites.frontal}
                    name={pokemonData.nombre}
                    url=''
                />

            </section>
            <section className="mt-6 w-full max-w-md bg-gray-100 rounded-lg p-4 text-left shadow-xl  shadow-gray-400 my-5">
                <h2 className="text-xl font-bold mb-4 text-center">Información del Pokémon</h2>
                
                <div className="mb-3">
                    <p className="font-semibold">ID:</p>
                    <p className="ml-4">{pokemonData.id}</p>
                </div>
                
                <div className="mb-3">
                    <p className="font-semibold">Nombre:</p>
                    <p className="ml-4 capitalize">{pokemonData.nombre}</p>
                </div>
                
                <div className="mb-3">
                    <p className="font-semibold">Peso:</p>
                    <p className="ml-4">{pokemonData.peso/10} kg</p>
                </div>
                
                <div className="mb-3">
                    <p className="font-semibold">Habilidades:</p>
                    <ul className="ml-4 list-disc list-inside">
                        {pokemonData.habilidades.map((hab, index) => (
                            <li key={index} className="capitalize">
                                {hab.ability.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </section>
    );
};