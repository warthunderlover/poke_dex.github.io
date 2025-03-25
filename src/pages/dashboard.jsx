import { useState } from 'react';

import { PokemonList } from '../components/Pokemon/PokemonList';
import { Page } from "../components/Page";

import { usePokemonList } from '../services/pockemonapi';
import { Paging } from '../components/Paging/Paging';

export const DashboardPage = ()=>{
    const [ message, setMessage] = useState('Hola Mundo');
    const pokemons = usePokemonList();
    return (
        <Page title="DashBoard Page" >
            <section>
                {message}
                <br/>
                <PokemonList
                   pokemonList={pokemons.results}
                />
                <Paging
                />
            </section>
        </Page>
    );
}

