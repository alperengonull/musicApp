import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        padding:10,
        flexDirection:'row',
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
    },
    inner_container:{
        flex:1,
        padding:10,
        justifyContent:'center',
    },
    title:{
        color:'black',
        fontSize:20,
    },
    year:{
      marginLeft:20,
      fontSize:12,
      color:'grey',
      fontWeight:'bold',
        
    },
    info_container:{
        flexDirection:'row',
        flex:1,
        alignItems:'center'
    },
    artist:{
        color:'black',
      
    },
    soldout_container:{
        borderWidth:1,
        borderColor:'red',
        padding:5,
        borderRadius:5,

    },
    soldout_title:{
        color:'red',
        fontWeight:'bold',
        fontSize:12,
    },
    body:{
flexDirection:'row',
    }

})