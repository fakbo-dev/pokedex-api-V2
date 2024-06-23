"use client"
import { useEffect, useState } from "react"
//Components
import Pokedex from "@/components/Pokedex"
import Searchbar from "@/components/Searchbar"
import { getPokemons, getPokemonsData, searchPokemon } from "@/components/Api"
import { FavProvider } from "@/components/favcontext"
import Header from "@/components/Header"

const favoriteKey = "f";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPage] = useState(0);
  const [favorite, setFavorite] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const items = 51;

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      setNotFound(false);
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

  const loadFavPokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoriteKey)) || [];
    setFavorite(pokemons);
  }

  useEffect(() => {
    fetchPokemon();
  }, [page])

  useEffect(() => {
    loadFavPokemons();
  }, [])
  const updateFavoritesPokemons = (name) => {

    setFavorite(prev => {
      const update = [...prev];
      const favoriteIndex = prev.indexOf(name);

      if (favoriteIndex >= 0) {
        update.splice(favoriteIndex, 1);
      } else {
        update.push(name);
      }
      window.localStorage.setItem(favoriteIndex, JSON.stringify(update));
      return update
    });
  };

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemon();
    }
    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPage(1);
    }
    setLoading(false);
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

          <Searchbar onSearchHandler={onSearchHandler} />
          {notFound ? (
            <div className="text-4xl text-black flex justify-center items-center mt-[80px] card font-bold">Pokemon no encontrado</div>
          ) : (
            <Pokedex
              pokemons={pokemons}
              loading={loading}
              page={page}
              totalPages={totalPages}
              setPage={setPage} />
          )}

        </div>
      </main>
    </FavProvider>
  )
}

export default Home