import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// onde mostra cada conselho
const SearchResultItem = ({ item }) => {
  return (
    <View style={styles.container}>
      {/* visao do conselho*/}
      <Text style={styles.text}>{item.advice}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
})

export default SearchResultItem;
