import React, { useEffect,useState } from 'react';
import { View, Text, FlatList } from 'react-native';

function App() {
  const [lista_pokemons, setlistapokemons] = useState()

  useEffect(() => {
    pegarPokemonAPI()
  }, [])
  
  const pegarPokemonAPI = async () => {
    const respostas = await fetch('https://pokeapi.co/api/v2/pokemon')
    const json_respostas = await respostas.json()
    const resultados = json_respostas.results
    setlistapokemons(resultados)
  }


  return (
    <View>

      <FlatList
        data={lista_pokemons}
        renderItem={(info) => {
          const { item, index } = info
      
          return (

            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center', 
            }}>
              <Text style={{
                frontSize: 24,
                color: 'red'
              }}>
                {index} - 
                {item.name}</Text>

            </View>
          )
        }}
        />

    </View>
  )
}

export default App;
