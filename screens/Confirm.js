import { View, Text, Modal, StyleSheet, Button } from 'react-native';
import React from 'react';
import colors from '../style/colors';
import { LinearGradient } from 'expo-linear-gradient';

const Confirm = ({ email, name, isModalVisible, onClose, onGameButton}) => {

  function handleCloseModal() {
    onClose();
  }

  function handleGameButton() {
    onGameButton();
  }
  
  return (
    <Modal visible={isModalVisible} animationType="slide" transparent={true}>
      <LinearGradient
          // Define the gradient from solid to transparent
          colors={['rgba(224, 247, 250, 1)', 'rgba(30, 58, 95, 0.75)']}
          style={styles.modelBackgroud}
        >
        <View style={styles.modelBackgroud}>
          <View style={styles.container}>
            <Text style={styles.textStyle}>Hello {name}</Text>
            <Text style={styles.textStyle}>
              Here is the email that you entered: {email}
            </Text>

            <Text style={{height: 20}}> </Text> 

            <Text style={styles.textStyle}>
              If it is not correct, please go back and enter again.
            </Text>


            <View style={styles.bottonContainer}>
              <View style={styles.buttonBack}>
                <Button title="Go Back" onPress={()=> {
                  handleCloseModal();
                }} />
              </View>
        
              <View style={styles.buttonForward} >
                <Button title="Continue" onPress={onGameButton}/>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </Modal>
    
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  container: {
    // without it everything will be on the left. But it will be strached. 
    alignItems: 'flex-start',
    width: '80%', 
    padding: 20,
    paddingVertical: 40,
    backgroundColor: colors.cardBackground,
    justifyContent: 'center',
    borderRadius: 10, 
    shadowColor: colors.secondary, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5, 
    shadowRadius: 8, 
    elevation: 5, 
  },

  textStyle: { 
    fontSize: 14, 
    color: colors.text, 
    textAlign: 'left',
    flexWrap: 'wrap',
    marginBottom: 10,
  },

  buttonBack: {
    backgroundColor: colors.buttonGoBack,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '40%',

  },
  buttonForward: {
    backgroundColor: colors.buttonContinue,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '40%',
  },

  bottonContainer: {
    flexDirection: "row",
    justifyContent: "space-around", 
    width: "100%",
    alignItems: "center",
  },

  modelBackgroud: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default Confirm