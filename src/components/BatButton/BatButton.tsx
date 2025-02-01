import React, { useState } from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {

    const [pass, setPass] = useState('')

    function handleGenerateButton() {
        let token = generatePass()
        setPass(token)
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(pass)
    }

    return (
        <>
            <Button
                onPress={handleGenerateButton}
                title='botao'
                accessibilityLabel='Click em mim'
            />
            <BatTextInput pass={pass} />

            <Pressable
                style={styles.button}
                onPress={() => console.log('fui pressionado')}>
                <Text style={styles.text}> GENERATE</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={handleCopyButton}>
                <Text style={styles.text}> CREATE</Text>
            </Pressable>

        </>
    );
}