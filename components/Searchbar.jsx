"use client"
import { useState } from "react"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { searchPokemon } from "./Api";
import Image from "next/image"
const Searchbar = ({ onSearchHandler }) => {
    const [text, setText] = useState("");
    const handlePokemon = (e) => {
        setText((t) => t = e.target.value);

        if (e.target.value.length === 0) {
            onSearchHandler(undefined);
        }
    }
    const handleButtonClick = () => {
        onSearchHandler(text);
    };

    return (
        <section>
            <div className="container mx-auto  flex flex-col xl:flex-row justify-center items-center gap-2">
                <div>
                    <Input
                        placeholder="Busca tu pokemon"
                        onChange={handlePokemon}
                        className="  w-[60vw] text-black"
                        value={text}
                    />
                </div>
                <div>
                    <Button variant="destructive" onClick={handleButtonClick} className="text-[10px] xl:text-[14px]">Busca tu Pokemon</Button>
                </div>
            </div>
        </section>
    )
}

export default Searchbar