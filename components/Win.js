import { View, Text, Image, Button, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../style/colors'

// need to pass attempts as props
const Win = ({onRestart, finalAttempts}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>You guessed correct!</Text>
      <Text style={styles.subtitle}>Attempts used: {finalAttempts}</Text>

      
      <Image 
        source={{ uri: "https://picsum.photos/id/14/100/100" }} 
        style={styles.imageStyle} 
        alt="win" 
      />

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


export default Win