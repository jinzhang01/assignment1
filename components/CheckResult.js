import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';


const CheckResult = ({resume, onGameOver}) => {

    return (
        <View>
            <Text> You Did not guess correct! </Text>

            <View>
                <Button title='TRY AGAIN' onPress={() => resume()} />
            </View>

            <View>
                <Button title='END THE GAME' onPress={() => onGameOver()} />
            </View>
        </View>
    );
};

export default CheckResult;