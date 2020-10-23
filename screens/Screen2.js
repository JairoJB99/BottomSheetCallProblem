import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import BottomSheetCustom from '../components/BottomSheetCustom';

export default function Screen2() {
  return (
    <View style={styles.container}>
      <Text>Screen 2</Text>
      {/*<BottomSheetCustom></BottomSheetCustom>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
