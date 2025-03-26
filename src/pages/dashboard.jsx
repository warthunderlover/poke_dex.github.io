import { useState } from 'react';

import { PokemonList } from '../components/Pokemon/PokemonList';
import { Page } from "../components/Page";

import { usePokemonList } from '../services/pockemonapi';
import { Paging } from '../components/Paging/Paging';

export const DashboardPage = ()=>{
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const pokemons = usePokemonList(page-1, limit);
    return (
        <Page title="DashBoard Page" >
            <section>
                <PokemonList
                   pokemonList={pokemons.results}
                />
                <Paging
                    totalElements={pokemons.count}
                    limit={limit}
                    page={page}
                    onPageChange={setPage}
                    onLimitChange={setLimit}
                />
            </section>
        </Page>
    );
}

