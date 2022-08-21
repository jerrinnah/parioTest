import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <>
   
   <ImageBackground style={styles.bg} source={require('../assets/pariofiles/background.png')}>

        <View style={styles.avi}>
         <Image source={require('../assets/avi.png')}/>
        </View>

        <View style={styles.welcomeText}>
          <Text style={styles.title}>Welcome</Text>
          <Text>Your new destination awaits you!</Text>
        </View>

        <View style={styles.nextOpts}>
          <View style={styles.iconTab}> 
            <Image source={require('../assets/prev-icon.png')}/>
          </View>
         <TouchableOpacity onPress={()=> navigation.navigate('HomePage')}>
         <View style={styles.iconTab}>
          <Image source={require('../assets/play-icon.png')}/>
          </View>
         </TouchableOpacity>
        </View>
   </ImageBackground>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    top:30,
  },

  bg:{
    height:'110%',
    // width:'100%',
    alignItems:'center',
    paddingTop: 217,
    // backgroundColor:'white',
    resizeMode:'stretch'
  },
  avi:{
    height: 105,
    width:105,
    backgroundColor:'grey',
    borderRadius:75
  },
  welcomeText:{
    top:20,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:30,
  },
  iconTab:{
    height:100,
    width:100,
    backgroundColor:'#189AB4',
    justifyContent:'center',
    alignItems:'center',
    margin:10,
  },

  nextOpts:{
    top:70,
    flexDirection:'row',
   
  }
})