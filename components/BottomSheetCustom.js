import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

// Smart Components
import BottomSheet from 'reanimated-bottom-sheet';

var _this;
var isBottomSheetOpen = false;

export default class BottomSheetCustom extends Component {
    constructor(props) {
        super(props)
        this.openBottomSheet = this.openBottomSheet.bind(this); // Bind the method to call from other component
        this.bottomSheet = React.createRef(); //create reference
        _this = this;   // I tried to save that reference and it works only one time 
    }

    openBottomSheet() {
        //_this.bottomSheet.current.focus();

        if (isBottomSheetOpen) {
            isBottomSheetOpen = false;
            _this.bottomSheet.current.snapTo(0) //open in the first position
        } else {
            isBottomSheetOpen = true;
            _this.bottomSheet.current.snapTo(1) //open in second position
        }
    }

    render() {
        const renderContent = () => (
            <View
                style={{
                    backgroundColor: 'grey',
                    padding: 16,
                    height: 575,
                }}
            >
                <Text>Swipe down to close</Text>
            </View>
        );
        return (
            <BottomSheet
                ref={_this.bottomSheet}
                snapPoints={[0, 100, 340, 575]}
                borderRadius={30}
                renderContent={renderContent}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171717"
    },
});
