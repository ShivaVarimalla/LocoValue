import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home(props) {
    const onLogout = () => {
        props.navigation.navigate('Login');
    }
    return (
        <View style={styles.home}>
            <Text>
                HOME
            </Text>
            <TouchableOpacity style={styles.logout} onPress={() => onLogout()}><Text>Logout</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    logout: {
         alignSelf: 'center',
         alignItems: 'center',
        justifyContent: 'flex-start',
        fontWeight: 'bold',
        backgroundColor: 'coral',
        padding: 10,
        borderRadius: 6,
        width: 150,
        height: 40
    },
    home: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
});
