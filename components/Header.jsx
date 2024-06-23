"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaHome, FaHeart, FaGithub } from "react-icons/fa";
import { useContext } from "react"
import FavContext from "./favcontext";
const Header = () => {
    const { favoritePokemons } = useContext(FavContext);
    return (
        <header className="py-8 xl:py-12">
            <nav className="container mx-auto flex justify-between items-center card py-2">
                {/* Logo */}
                <div className="flex gap-5 items-center">
                    <Link href="https://pokeapi.co/" target="_BLANK" className="relative">
                        <Image
                            src="/assets/logo.png"
                            priority
                            quality={100}
                            alt="logo"
                            className="w-auto h-auto"
                            width={100}
                            height={100}
                        />
                    </Link>
                    <Button className="text-[8px] xl:text-[14px]">
                        <Link href="/" className="flex items-center gap-2"><FaHome /></Link>
                    </Button>
                </div>
                {/* <h1 className="text-base text-center  xl:text-4xl md:text-3xl text-black font-bold  p-2 rounded-md">Fakbo Dev</h1> */}
                <div className="flex items-center gap-2 ml-2">
                    <Button className="text-[8px] xl:text-[14px]">
                        {favoritePokemons.length > 0 ? (
                            <Link href="/" className="flex items-center gap-2 text-sm">
                                {favoritePokemons.length} <FaHeart className="text-red-700" />
                            </Link>
                        ) : (
                            "No favoritos"
                        )}
                    </Button>
                    <Button className="text-[10px] xl:text-[14px]"><Link href="https://github.com/fakbo-dev" target="_BLANK" className="flex items-center gap-2"><FaGithub className="text-[20px]" /></Link></Button>
                </div>
            </nav>
        </header>
    )
}

export default Header