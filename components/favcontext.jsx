"use client"
import React from "react"
const FavContext = React.createContext({
    favoritePokemons: [],
    updateFavoritesPokemons: (id) => null
});

export const FavProvider = FavContext.Provider;

export default FavContext;