import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PureComponent } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Login extends PureComponent {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <TouchableHighlight style={styles.button} onPress={this.navigateToScreen1}>
          <Text style={styles.text}>Sing In</Text>
        </TouchableHighlight>
      </View>
    );
  }
  navigateToScreen1 = () => {
    const { navigation } = this.props;
      navigation.navigate("Screen1")
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
    height: 40,
    width: 80,
    backgroundColor: "grey",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white"
  }
});
