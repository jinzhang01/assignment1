import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Register from '../components/Register';
import Background from '../style/Background';

// by default flex direction is row 
// justifyContent: 'center' -> X Axies 
//  alignItems: 'center' -> Y Axies

const Start = ({onGame}) => {   

    return (
        <Background>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Register onGameButton={onGame}/>
            </View>

        </Background>
    );
};

export default Start;