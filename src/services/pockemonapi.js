import { useState, useEffect } from "react";

export const usePokemonList = (page = 0, limit = 20) => {
    const [data, setData] = useState({ count: 0, results: [], next: null, previous: null })
    useEffect(
        () => {
            const urlToFetch = `https://pokeapi.co/api/v2/pokemon/?offset=${page * limit}&limit=${limit}`;
            fetch(urlToFetch).then(
                (response) => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        return new Promise(() => null)
                    }
                }
            ).then(
                (data) => {
                    setData(data);
                }
            ).catch(
                (error) => {
                    console.error("Error al Carga PokedexAPI", error);
                }
            );
        }
        , [page, limit, setData]);
    return data;
}

export const usePokemonDetail = (code) => {
    const [pokemonData, setPokemonData] = useState(null);
    useEffect(
        () => {
            const urlToFetch = `https://pokeapi.co/api/v2/pokemon/${code}`;
            fetch(urlToFetch)
                .then(
                    (response) => {
                        if (response.status === 200) {
                            return response.json()
                        } else {
                            return new Promise(() => null);
                        }
                    })
                .then(
                    (data) => {
                        if (data) {
                            // Solo guardar la información esencial
                            const esencialData = {
                                id: data.id,
                                nombre: data.name,
                                peso: data.weight,
                                habilidades: data.abilities,
                                sprites: {
                                    frontal: data.sprites.front_default,
                                    trasera: data.sprites.back_default
                                }
                            };
                            setPokemonData(esencialData);
                        }
                    }
                )
                .catch(
                    (error) => {
                        console.error("Error al cargar pokemon " + code, error);
                    }
                );
        }
        , [code, setPokemonData]);
    return pokemonData;
}

export const getPokemonImg = (pokemonUrl) => {
    const pokemonCode = pokemonUrl.split('/')[6] || '';
    return {
        code: pokemonCode,
        imgSprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonCode}.png`
    }
}