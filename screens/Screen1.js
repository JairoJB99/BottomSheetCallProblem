import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PureComponent } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import BottomSheetCustom from '../components/BottomSheetCustom';

export default class Screen1 extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Screen1</Text>
          <TouchableHighlight style={styles.button} onPress={this.navigateToScreen2}>
            <Text style={styles.text}>Navigate Screen 2</Text>
          </TouchableHighlight>
        </View>
        {/*<BottomSheetCustom></BottomSheetCustom>*/}
      </View>
    );
  }
  navigateToScreen2 = () => {
    const { navigation } = this.props;
    navigation.navigate("Screen2")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
    height: 60,
    width: 130,
    backgroundColor: "grey",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white"
  }
});
