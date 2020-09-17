import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <Image style={styles.tinyLogo} source={item.ownerAvatarUrl} />
      <Text fontWeight='bold' fontSize='subheading'>
        {item.fullName}
      </Text>
      <Text>{item.description}</Text>
      <Text>{item.language}</Text>
      <Text>
        {item.stargazersCount}
        Stars
      </Text>
      <Text>
        {item.forksCount}
        Forks
      </Text>
      <Text>
        {item.reviewCount}
        Reviews
      </Text>
      <Text>
        {item.ratingAverage}
        Rating
      </Text>
    </View>
  );
};

export default RepositoryItem;
