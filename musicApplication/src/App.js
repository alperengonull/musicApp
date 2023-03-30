import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import music_data from './music-data.json'
import SongCard from './components/SongCard'

const App = () => {

  _renderItem = ({item}) => <SongCard song={item} />
  // <Text> {item.title} </Text>

  return (
    <View style={styles.container}>
       <View style={styles.container}>
      <FlatList
      keyExtractor={item => item.id}
      data={music_data}
      renderItem={_renderItem}
      />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})


export default App;