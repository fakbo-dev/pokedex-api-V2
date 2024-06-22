import Link from "next/link"
import Image from "next/image"
const Header = () => {
    return (
        <header className="py-8 xl:py-12">
            <nav className="container mx-auto flex justify-between items-center ">
                {/* Logo */}
                <div className="relative">
                    <Link href="https://pokeapi.co/" target="_BLANK">
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
                </div>
            </nav>
        </header>
    )
}

export default Header