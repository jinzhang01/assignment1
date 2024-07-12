import { View, Text, Image, StyleSheet, Button} from 'react-native'
import React from 'react'
import colors from '../style/colors'



const Gameover = ({final, onRestart}) => {

  return (
    <View> 
    <View style={styles.container}>
      <Text style={styles.subtitle}>The Game is Over!</Text>
        <Image 
            source={require('../res/sadface.jpg')} 
            style={styles.imageStyle} 
        />
        {final == 'overtime' ? <Text style={styles.subtitle}> You are out of time! </Text> : ""}
        {final == 'overattempts' ? <Text style={styles.subtitle}> You are out of attempts! </Text> : ""}
    </View>

    <View style={styles.buttonStyle}>
      <Button title='New Game' onPress={() =>onRestart()} />  
    </View>
 </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'left',

  },

  imageStyle: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  buttonStyle: {
    backgroundColor: colors.buttonContinue,
    borderRadius: 5,
    margin: 5,
    fontcolor: colors.buttonText,
  },
});

export default Gameover