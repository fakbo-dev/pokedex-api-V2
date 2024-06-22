//Components
import Pokedex from "@/components/Pokedex"
import Searchbar from "@/components/Searchbar"
const Home = () => {


  return (
    <main className="h-full">
      <div className="container mx-auto">
        <Searchbar />
        <Pokedex />
      </div>
    </main>
  )
}

export default Home