import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps{
    pass:String
}

export function BatTextInput(props:BatTextInputProps) {
    return (
        <TextInput placeholder='pass'
        style = {styles.inputer}
        />

    );
}