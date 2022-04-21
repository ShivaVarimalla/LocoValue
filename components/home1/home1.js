import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Home1(props) {
    return (
        <View style={styles.home1}>
            <Text>
                HOME1
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    home1: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
});
export default Home1;