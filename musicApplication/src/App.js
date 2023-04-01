import { View,StyleSheet,FlatList } from 'react-native'
import React,{useState} from 'react'
import music_data from './music-data.json'
import SongCard from './components/SongCard'
import SearchBar from './components/SearchBar'


const App = () => {

  _renderItem = ({item}) => <SongCard song={item} />
  _seperator = () => <View style={styles.seperator}></View>


  const [list,setList] = useState(music_data);

  const handleSearch = (text) => {
    const filteredList = music_data.filter(music => {
      const searchedText = text.toLowerCase();
      const currentTitle = music.title.toLowerCase();
      
      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  }



  return (
    <View style={styles.container}> 
        <SearchBar searchProperty={handleSearch} />
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