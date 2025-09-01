import React, { useState, useEffect } from 'react';

function App() {
  
  const [pokemon, setPokemon] = useState('');
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading;
      })
      .catch((error) => {
        setError(error.message);
        setLoading;
      });
  }, []);

  
  console.log('Datos del pokemon:', pokemon);

  return (
    <>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <p>ID: {pokemon.id}</p>
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
        </div>
      )}
    </>
  );
}

export default App;