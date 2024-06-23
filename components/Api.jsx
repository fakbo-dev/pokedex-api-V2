const searchPokemon = async (pokemon) => {
    try {
        const POKEMON_API_KEY = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(POKEMON_API_KEY);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error.message);
    }
};

const getPokemons = async (limit = 51, offset = 0) => {
    try {
        const POKEMON_API_KEY = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(POKEMON_API_KEY);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
};

const getPokemonsData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
};
export { searchPokemon, getPokemons, getPokemonsData };