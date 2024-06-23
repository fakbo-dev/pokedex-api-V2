// localhost:3000/pikachu

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa"
import { searchPokemon } from "@/components/Api";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Image from "next/image";
//pokemonName

//pokemonName = "pikachu" -> show the pikachu page
const PokemonPage = async ({ params }) => {
    // Object Destructuring
    const { pokemonName } = params;
    const pokemonObject = await searchPokemon(pokemonName);
    console.log(pokemonObject)
    const pokemonUrl = pokemonObject.sprites.versions["generation-v"]["black-white"].animated.front_default;
    const pokemonUrlBase = pokemonObject.sprites.front_default;
    return (
        <>
            <main className={`container mx-auto  py-10 my-2 text-black ${pokemonObject.types[0].type.name} rounded-lg`}>
                <div className="flex justify-between">
                    <Link className="" href="/"><Button className="flex items-center transition-all duration-300 gap-2">{<FaArrowLeft />} Volver atras</Button></Link>
                    {/* Text */}
                    <h3 className="text-4xl font-bold">#{pokemonObject.id}</h3>
                </div>
                <div className=" flex flex-col text-black justify-center items-center">
                    <h2 className="text-4xl font-extrabold">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>

                    <div className="flex flex-col justify-center items-center h-full w-full">
                        <Image
                            src={pokemonObject.sprites.versions["generation-v"]["black-white"].animated.front_default ? pokemonUrl : pokemonUrlBase}
                            alt={pokemonObject.name}
                            className=" text-center"
                            width={250}
                            height={250}
                        />
                        <h3 className="text-center text-3xl mt-[40px] font-bold">Weight: {pokemonObject.weight}</h3>
                    </div>
                    <div>
                        {pokemonObject.stats.map((statsObject) => {
                            const statsName = statsObject.stat.name;
                            const statsValue = statsObject.base_stat;

                            return (
                                <div className="flex items-stretch w-[500px]" key={statsName}>
                                    <h3 className="p-3 w-2/4 text-1xl font-extrabold">{statsName}: {statsValue}</h3>
                                    <Progress value={statsValue} className="w-2/4 m-auto" />
                                </div>
                            )

                        })}
                    </div>
                </div>
            </main>
        </>
    )
}

export default PokemonPage