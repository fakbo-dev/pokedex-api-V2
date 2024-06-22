"use client"
import { useEffect, useState } from "react"
//Components
import Pokedex from "@/components/Pokedex"
import Searchbar from "@/components/Searchbar"
import { getPokemons, getPokemonsData } from "@/components/Api"
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => await getPokemonsData(pokemon.url));

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.error("ERROR TYPE", error.message);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, [])

  return (
    <main className="h-full">
      <div className="container mx-auto">
        <Searchbar />
        <Pokedex pokemons={pokemons} loading={loading} />
      </div>
    </main>
  )
}

export default Home