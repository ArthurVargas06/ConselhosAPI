import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import SearchInput from './components/SearchInput'
import SearchResults from './components/SearchResults'
const App = () => {
  // Aqui deixa o que o usuário digita e os resultados da busca
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  return (
    <View style={styles.container}>
      {/* aqui onde o usuário digita o que quer buscar */}
      <SearchInput 
        query={query} 
        setQuery={setQuery} 
        setData={setData} 
        setLoading={setLoading} 
        setError={setError} 
      />
      {/* aqui que mostra os resultados da busca */}
      <SearchResults 
        data={data} 
        loading={loading} 
        error={error} 
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
})

export default App;
