import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text fontWeight='bold' fontSize='subheading' color='textSecondary'>
        Repositories
      </Text>
    </View>
  );
};

export default AppBar;
