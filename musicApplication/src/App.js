import { View,StyleSheet,FlatList } from 'react-native'
import React,{useState} from 'react'
import music_data from './music-data.json'
import SongCard from './components/SongCard'
import SearchBar from './components/SearchBar'


const App = () => {
  const [list,setList] = useState(music_data );
  // Search bar 
  handleSearch = text => {
    const filteredlist = music_data.filter(song => {
      const searchedText =  text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    })

    setList(filteredlist)
  };

  _renderItem = ({item}) => <SongCard song={item} />
  _seperator = () => <View style={styles.seperator}></View>

  return (
    <View style={styles.container}>
        <SearchBar searchPropsu={handleSearch} />
      <FlatList
      keyExtractor={item => item.id}
      data={list}
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