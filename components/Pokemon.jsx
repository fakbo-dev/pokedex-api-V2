import { FaHeart } from "react-icons/fa"
import Image from "next/image";
import { Button } from "./ui/button";
import { useContext } from "react"
import FavContext from "./favcontext";
import Link from "next/link";
//Components
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
const Pokemon = ({ pokemon, pokemonName }) => {
    const { updateFavoritesPokemons, favoritePokemons } = useContext(FavContext);
    const pokemonUrl = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;
    const pokemonUrlBase = pokemon.sprites.front_default;

    const handleClick = () => {
        updateFavoritesPokemons(pokemon.name);
    }
    return (
        <Link href={pokemon.name} className="">
            <Card className={`flex flex-col  ${pokemon.types[0].type.name} transform  rounded-xl   bg-white shadow-xl transition duration-300 hover:scale-105`}>
                {/* Header */}
                <CardHeader className="flex">
                    <CardTitle className="self-center text-4xl font-extrabold">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</CardTitle>
                    <CardDescription className="text-2xl self-center">{`#${pokemon.id}`}</CardDescription>
                </CardHeader>

                {/* Content */}
                <CardContent className="flex justify-center items-center h-full w-full max-h-[200px] min-h-[200px]">
                    <Image
                        src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default ? pokemonUrl : pokemonUrlBase}
                        alt={pokemon.name}
                        className="w-100 h-100"
                        width={100}
                        height={100}
                    />
                </CardContent>

                {/* Footer */}
                <CardFooter>
                    <div className="flex justify-around flex-col xl:flex-row items-center w-full gap-2 xl:gap-0">
                        <div className="flex gap-2">

                            {pokemon.types.map((type, i) => (
                                <div key={i} className={`py-[10px] px-[25px] border rounded-md ${type.type.name}  font-extrabold`}>{type.type.name}</div>
                            ))}
                        </div>
                        {/* <div>
                            <Button variant="outline" onClick={handleClick} className={`${favoritePokemons.includes(pokemon.name) && "text-red-600 hover:text-red-600"} bg-transparent hover:bg-gray-200 transition-all delay-200`}><FaHeart /></Button>
                        </div> */}
                    </div>
                </CardFooter>
            </Card>
        </Link>

    )
}

export default Pokemon;