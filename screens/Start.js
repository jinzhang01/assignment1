import React, { useState } from 'react';
import { View, Text} from 'react-native';
import Header from '../components/Header';
import Register from '../components/Register';
import Background from '../style/Background';


const Start = ({onGame}) => {   

    return (
        <Background>
            <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
                <Header />
                <Register onGameButton={onGame}/>
            </View>
        </Background>
    );
};

export default Start;