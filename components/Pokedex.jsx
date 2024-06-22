import Pokemon from "./Pokemon";
const Pokedex = ({ pokemons, loading }) => {

    return (
        <section className="mt-[80px] xl:mt-[100px]">
            <div className="container mx-auto">

                {/* Header text */}
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl">Pokedex</h1>
                    <div>paginacion</div>
                </div>

                {loading ? (
                    <div>Cargando...</div>
                ) : (
                    // grid
                    <div className="grid grid-cols-3 gap-3">
                        {pokemons && pokemons.map((pokemon, i) => (
                            <div key={i}>
                                <Pokemon pokemon={pokemon} />
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}


export default Pokedex;