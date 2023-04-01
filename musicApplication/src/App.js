import { View,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import music_data from './music-data.json'
import SongCard from './components/SongCard'
import SearchBar from './components/SearchBar'


const App = () => {

  _renderItem = ({item}) => <SongCard song={item} />
  _seperator = () => <View style={styles.seperator}></View>

  return (
    <View style={styles.container}>
        <SearchBar />
      <FlatList
      keyExtractor={item => item.id}
      data={music_data}
      renderItem={_renderItem}
      ItemSeparatorComponent={_seperator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  seperator:{
   borderWidth:1,
   borderColor:'#e0e0e0'
  }
})


export default App;