import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';
import Register from '../components/Register';
import Checkbox from 'expo-checkbox';

const Start = () => {
    const [isChecked, setIsChecked] = useState(false);

    // Function to handle checkbox value change and log the status
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        console.log(isChecked);  
    };

    return (
        <View>
            <Header />
            <Register />

            <View>
                <Checkbox 
                    value={isChecked}
                    onValueChange={handleCheckboxChange}
                />
                <Text>I am not a robot</Text>
            </View>
        </View>
    );
};

export default Start;