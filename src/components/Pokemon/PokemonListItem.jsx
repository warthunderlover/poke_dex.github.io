export const PokemonListItem = (
    {
        code,
        name,
        url,
        imgSprite = 'https://picsum.photos/id/2/48/48',
        onClickHandler = (code)=>{}
    }
)=>{
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png
    return (
        <div className="pokemonListItem rounded-xl shadow-md mx-3 my-3">
            <img src={imgSprite} alt={name}/>
            <div>
                <strong>
                    {name}
                </strong>
            <button className="cursor-pointer hover:bg-white hover:text-black ttransition duration-400" onClick={()=>{onClickHandler(code);}}>Ver Detalle</button>
            </div>
        </div>
    );
}