import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AppContainer extends React.Component {
  constructor({}) {
    super({});
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#000' }}>Center</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default AppContainer;
