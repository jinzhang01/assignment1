import { View, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import colors from './colors';


const Background = ({children}) => {
  return (
    <LinearGradient
        colors={[colors.backgroundLightBlue, colors.backgroundDarkBlue]}
        style={styles.container}
    >
        {children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default Background