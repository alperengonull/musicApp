import { View, Text,TextInput } from 'react-native'
import React from 'react'
import styles from './SearchBar.style';


const SearchBar = (props) => {

    // handleSearchi app.js e taşıdık
    
  return (
    <View style={styles.container}>
    <TextInput style={styles.input} onChangeText={props.searchProperty}  placeholder="Ara..." />
</View>
  )
}

export default SearchBar