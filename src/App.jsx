import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const {pokemon, setPokemon} = useState([])
const {pokemones, setPokemones} = useState(null)

      const getAllPokemon =async ( ) => {
        const response = await fetch(
          "https://poke.api.co/api/v2/pokemon?offset=0&limit=20"
        )
        const data = await response.json()
        setPokemon(data.results)
        console.log(data.results)
      }

      const getPokemon =async ( pokemon) => {
        const response = await fetch(
          pokemon.url
        )
        const data = await response.json()
        setPokemon(data.results)
          console.log(data)
      }
        
      useEffect(() => {
      getAllPokemon()
      

  },[])



function App() {
  return (
    <div className="container mt-4">
      <h2>Pokémon App</h2>

      {/* Ejemplo de la carta */}
      <div className="pokemon-card">
        <h3 className="pokemon-name">Pikachu</h3>
        
        <div className="pokemon-img-container">
          <img 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
            alt="Pikachu" 
            className="pokemon-img" 
          />
        </div>

        <div className="pokemon-description">
          <p>Cuando se enfada, este Pokémon descarga la energía almacenada en sus mejillas.</p>
        </div>
      </div>
    </div>
  );
}



  return (
    <>
  <Container>
    <h2>Pokemon</h2>
    {pokemones.map((poke) => (
      <button 
        key={poke.name} 
        className='mt-5'
        onClick={() => getAllPokemon(poke)}
      >
        {poke.name}
      </button>
    ))}
  </Container>
</>
  )
}

export default App
