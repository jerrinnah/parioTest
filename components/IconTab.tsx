import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
// import icon from '../assets/tasks.png'

const IconTab = ({info}) => {

  const {name, image} = info;
  return (
    <>
    <View style={styles.tab}>
    <View style={styles.container}>
        <Image source={image}/>
    </View>
    <Text>{name}</Text>
    </View>
   
    
    </>

  )
}

export default IconTab

const styles = StyleSheet.create({
    container:{
        height:79,
        width:79,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#189AB4',
        margin:20,
    },
    tab:{
        alignItems:'center'
    }
})