import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight
} from 'react-native';
import BottomSheetCustom from './BottomSheetCustom'

export default class HeaderRight extends Component {
    _onItemPressed(item) {
        this._b.openBottomSheet();      //call this function when user press  the Touchable parametrized the context
    }
    _b = new BottomSheetCustom();   //create the component like object

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onItemPressed.bind(this)}>
                    <View style={{ overlayColor: '#191919', borderRadius: 50, width: 40, height: 40, alignSelf: "center", backgroundColor: "red" }} />
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 23,
    },
})

