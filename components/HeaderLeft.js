import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Platform,
    TouchableOpacity
} from 'react-native';
import * as RootNavigation from '../routes/RootNavigation.js'

// Smart Components
function HeaderLeft() {
    return (
        <TouchableOpacity style={styles.container} onPress={() => RootNavigation.navigate('Login')}>
            <SafeAreaView style={styles.aux}>
                <View style={styles.photo} />
            </SafeAreaView>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                width: 42,
                height: 42,
                marginLeft: 15,
                marginBottom: 15,
            },
            android: {
                width: 42,
                height: 42,
                marginLeft: 15,
                marginBottom: 5,
            },
        }),
    },
    aux: {
        width: 42,
        height: 42,
        borderRadius: 50,
        overflow: 'hidden',
        borderWidth: 1.8,
        borderColor: "white",

    },
    photo: {
        width: 42,
        height: 42,
        resizeMode: 'contain',
        backgroundColor: "blue"
    },
})

export default HeaderLeft;