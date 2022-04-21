import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loginButton = () => {
        props.navigation.navigate('Tabs');
    };

    return (
        <SafeAreaView style={styles.screenBody}>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={(value) => { setUsername(value) }}
                placeholder="username"
            />
            <TextInput style={styles.input}
                value={password}
                onChangeText={(value) => { setPassword(value) }}
                placeholder='password' />
            <TouchableOpacity activeOpacity={0.8}
                onPress={() => { loginButton() }}
                style={styles.LogButton}><Text>Login</Text></TouchableOpacity>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
    },
    LogButton: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        backgroundColor: 'coral',
        padding: 10,
        borderRadius: 6,
        width: 150,
        height: 40
    },
    screenBody: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
});