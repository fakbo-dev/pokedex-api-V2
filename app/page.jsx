"use client"
import { useEffect, useState } from "react"
//Components
import Pokedex from "@/components/Pokedex"
import Searchbar from "@/components/Searchbar"
import { getPokemons, getPokemonsData } from "@/components/Api"
import { FavProvider } from "@/components/favcontext"
import Header from "@/components/Header"
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPage] = useState(0);
  const [favorite, setFavorite] = useState([]);
  const items = 51;

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(items, items * page);
      const promises = data.results.map(async (pokemon) => await getPokemonsData(pokemon.url));

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPage(Math.ceil(data.count / items));
    } catch (error) {
      console.error("ERROR TYPE", error.message);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, [page])

  const updateFavoritesPokemons = (name) => {

    setFavorite(prev => {
      const update = [...prev];
      const favoriteIndex = prev.indexOf(name);

      if (favoriteIndex >= 0) {
        update.slice(favoriteIndex, 1);
      } else {
        update.push(name);
      }
      return update
    });
  };
  return (
    <FavProvider
      value={{
        favoritePokemons: favorite,
        updateFavoritesPokemons: updateFavoritesPokemons,
      }}
    >
      <main className="h-full">
        <div className="container mx-auto">
          <Header />

          <Searchbar />
          <Pokedex
            pokemons={pokemons}
            loading={loading}
            page={page}
            totalPages={totalPages}
            setPage={setPage} />
        </div>
      </main>
    </FavProvider>
  )
}

export default Home