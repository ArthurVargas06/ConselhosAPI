import React from 'react'
import { TextInput, Button, StyleSheet, View } from 'react-native'
import axios from 'axios'  // axios -> api

const SearchInput = ({ query, setQuery, setData, setLoading, setError }) => {
  // Função que acha os conselhos
  const fetchAdvice = async () => {
    setLoading(true)  // carregando
    setError(null)  // limpa os erros antigos caso tiver
    try {
      // palavra que o user digitou -> API
      const response = await axios.get(`https://api.adviceslip.com/advice/search/${query}`)
      setData(response.data.slips || [])  // coloca os resultados no estado data
    } catch (error) {
      setError('Não deu certo. Tenta de novo.')  // aq mostra erro se der ruim
    } finally {
      setLoading(false)  // termina de carregar, com sucesso ou não
    }
  }
  return (
    <View style={styles.container}>
      {/* onde o user digita*/}
      <TextInput
        style={styles.input}
        placeholder="Digite uma key ( inglês )"
        value={query}
        onChangeText={setQuery}
      />
      {/* botao de busca*/}
      <Button title="Buscar" onPress={fetchAdvice} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginRight: 10,
  },
})

export default SearchInput;
