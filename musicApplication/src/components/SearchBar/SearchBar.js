import { View, Text,TextInput } from 'react-native'
import React from 'react'
import styles from './SearchBar.style';


const SearchBar = (props) => {

    // handleSearhi app.js e taşıdık
    
  return (
    <View style={styles.container}>
    <TextInput style={styles.input} onChangeText={props.searchPropsu} placeholder="Ara..." />
</View>
  )
}

export default SearchBar