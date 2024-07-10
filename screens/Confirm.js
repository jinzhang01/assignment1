import { View, Text, Modal, StyleSheet, Button } from 'react-native';
import React from 'react';

const Confirm = ({ email, name, isModalVisible, onClose }) => {

  function handleCloseModal() {
    onClose();
  }
  
  return (
    <Modal visible={isModalVisible} animationType="slide" transparent={true}>
      <View style={styles.modelBackgroud}>
        <View style={styles.container}>
          <Text>Hello {name}</Text>
          <Text>
            Here is the email that you entered: {email}
            If it is not correct, please go back and enter again.
          </Text>


          <View style={styles.bottonContainer}>
            <View style={styles.button}>
              <Button title="Go Back" onPress={()=> {
                handleCloseModal();
              }} />
            </View>
      
            <View style={styles.button} >
              <Button title="Continue" onPress={() => {console.log("continue pressed")}}/>
            </View>
          </View>





        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    // without it everything will be on the left. But it will be strached. 
    alignItems: 'center',
    // without it everything will be on the top
    justifyContent: 'center',
    padding: 10
  },
  button: {
    backgroundColor: 'lightblue',
    color: 'black',
    fontSize: 20,
    width: "35%",
    margin: 10
  },
  bottonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "60%"
  },
  modelBackgroud: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Confirm