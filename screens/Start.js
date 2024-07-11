import React, { useState } from 'react';
import { View, Text} from 'react-native';
import Header from '../components/Header';
import Register from '../components/Register';


const Start = ({onGame}) => {   


    return (
        <View>
            <Header />
            <Register onGameButton={onGame}/>
        </View>
    );
};

export default Start;