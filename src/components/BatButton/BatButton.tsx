import React, { useState } from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';

export function BatButton() {
    
    const [pass,setPass] = useState('')

    return (
        <>

            <Button
                onPress={() => console.log('ola')}
                title='botao'
                accessibilityLabel='Click em mim'
            />
                <BatTextInput />

            <Pressable
                style={styles.button}
                onPress={() => console.log('fui pressionado')}>
                <Text style={styles.text}> GENERATE</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={() => console.log('fui pressionado')}>
                <Text style={styles.text}> CREATE</Text>
            </Pressable>

        </>
    );
}