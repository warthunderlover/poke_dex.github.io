import { useState } from 'react';

import { PokemonList } from '../components/Pokemon/PokemonList';

import { usePokemonList } from '../services/pockemonapi';
import { Paging } from '../components/Paging/Paging';

export const DashboardPage = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const pokemons = usePokemonList(page - 1, limit);
    return (
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
    );
}

