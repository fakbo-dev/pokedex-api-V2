import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
const Pokedex = ({ pokemons, loading, page, totalPages, setPage }) => {

    const handleNext = () => {

        if (page + 1 !== totalPages) {
            setPage(page + 1);
        }
    };

    const handlePrev = () => {

        if (page > 0) {
            setPage(page - 1);
        }
    };
    return (
        <section className="mt-[80px] xl:mt-[100px]">
            <div className="container mx-auto card py-3 my-2">

                {/* Header text */}
                <div className="flex justify-between items-center text-black font-bold">
                    <h1 className="text-4xl text-slate-950">Pokedex</h1>
                    <Pagination
                        page={page + 1}
                        totalPages={totalPages}
                        nextClick={handleNext}
                        prevClick={handlePrev}
                    />
                </div>

                {loading ? (
                    <div><p className="text-black">Cargando...</p></div>
                ) : (
                    // grid
                    <div className="grid grid-cols-1 gap-3 xl:grid-cols-3 md:grid-cols-2 mt-[50px]">
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