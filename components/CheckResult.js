import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';


const CheckResult = (onRestart, onGameOver) => {

    return (
        <View>
            <Text> You Did not guess correct! </Text>

            <View>
                <Button title='TRY AGAIN' onPress={() => console.log('Try Again')} />
            </View>

            <View>
                <Button title='END THE GAME' onPress={() => console.log('Try Again')} />
            </View>
        </View>
    );
};

export default CheckResult;