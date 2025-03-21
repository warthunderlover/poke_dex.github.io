export const PokemonListItem = (
    {
        name,
        url,
        img = 'https://picsum.photos/id/2/48/48',
        onClickHandler = (e)=>{alert('Clicked');}
    }
)=>{
    return (
        <div className="pokemonListItem">
            <img src={img} alt={name}/>
            <div>
                <strong>
                    {name}
                </strong>
            <button onClick={onClickHandler}>Ver Detalle</button>
            </div>
        </div>
    );
}