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

export { searchPokemon };