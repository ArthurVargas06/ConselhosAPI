import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import SearchResultItem from './SearchResultItem'
// Componente que exibe os resultado
const SearchResults = ({ data, loading, error }) => {
  if (loading) {
    // mostra que tá carregando
    return <Text style={styles.message}>Carregando . . .</Text>
  }
  if (error) {
    // mostra mensagem de erro se algo deu errado
    return <Text style={styles.message}>{error}</Text>
  }
  if (!data.length) {
    // se não achou nada, fala p o usuário
    return <Text style={styles.message}>Nenhum resultado encontrado.</Text>
  }
  // mostra a lista de conselhos
  return (
    <FlatList
      data={data}  
      renderItem={({ item }) => <SearchResultItem item={item} />}  // mostra cada conselho usando o componente SearchRe
      keyExtractor={(item) => item.id.toString()}  // aq garante q cada um vai ter uma key unica
    />
  )
}
const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
  },
})

export default SearchResults;
