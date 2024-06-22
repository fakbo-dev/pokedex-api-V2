"use client"
import { useState } from "react"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { searchPokemon } from "./Api";
import Image from "next/image"
const Searchbar = () => {
    const [text, setText] = useState("");
    const [pokemon, setPokemon] = useState();
    const handlePokemon = (e) => {
        setText((t) => t = e.target.value);
    }
    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon);
        setPokemon(result);
    };

    const handleButtonClick = () => {
        onSearchHandler(text);
    };

    return (
        <div className="container mx-auto flex justify-center items-center gap-2">
            <div>
                <Input
                    placeholder="Busca tu pokemon"
                    onChange={handlePokemon}
                    className="w-[60vw]"
                    value={text}
                />
            </div>
            <div>
                <Button variant="destructive" onClick={handleButtonClick}>Busca tu Pokemon</Button>
            </div>

            {pokemon && (
                <>
                    <div>nombre: {pokemon.name}</div>
                    <div>peso: {pokemon.weight}</div>
                    <Image
                        src={pokemon.sprites.front_default} alt="pokemon image"
                        priority
                        quality={100}
                        className="w-auto h-auto"
                        width={100}
                        height={100} />
                </>
            )}
        </div>
    )
}

export default Searchbar