import React, { useState } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import colors from '../style/colors';


const CheckResult = ({resume, onGameOver}) => {

    return (
        <View>
            <Text style={styles.subtitle}> You did not guess correct! </Text>

            <View style={styles.buttonStyle}>
                <Button title='TRY AGAIN' onPress={() => resume()} />
            </View>

            <View style={styles.buttonStyle}>
                <Button title='END THE GAME' onPress={() => onGameOver()} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    subtitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.primary,
      marginTop: 10,
      marginBottom: 20,
      textAlign: 'left',

    },

    textStyle: { 
      fontSize: 14, 
      color: colors.gary, 
      textAlign: 'center',
      marginVertical: 5,
    },
    
    buttonStyle: {
      backgroundColor: colors.buttonContinue,
      borderRadius: 5,
      margin: 5,
      fontcolor: colors.buttonText,
    },
  });

export default CheckResult;