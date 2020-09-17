import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import Text from './Text';

const cardHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
  },
});

const CardHeader = (imageUri, fullName, description) => {
  return (
    <View style={cardHeaderStyles.container}>
      <View style={cardHeaderStyles.avatarContainer}>
        <Image style={cardHeaderStyles.avatar} source={imageUri} />
      </View>
      <View style={cardHeaderStyles.infoContainer}>
        <Text fontWeight='bold' fontSize='subheading'>
          {fullName}
        </Text>
        <Text color='textSecondary'>{description}</Text>
      </View>
    </View>
  );
};

const cardBodyStyles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
});

const CardBody = () => {
  return (
    <View style={cardBodyStyles.container}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales
        molestie nisl, a elementum leo congue tempor. Aliquam erat volutpat.
        Aenean id pharetra orci.
      </Text>
    </View>
  );
};

const cardFooterStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  actionTouchable: {
    flexGrow: 0,
  },
  actionText: {
    textDecorationLine: 'underline',
  },
});

const CardFooterAction = ({ children, ...props }) => {
  return (
    <TouchableWithoutFeedback
      style={cardFooterStyles.actionTouchable}
      {...props}
    >
      <Text color='textSecondary' style={cardFooterStyles.actionText}>
        {children}
      </Text>
    </TouchableWithoutFeedback>
  );
};

const CardFooter = () => {
  return (
    <View style={cardFooterStyles.container}>
      <CardFooterAction>Like</CardFooterAction>
      <CardFooterAction>Comment</CardFooterAction>
      <CardFooterAction>Share</CardFooterAction>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
});

const Card = () => {
  return (
    <View style={cardStyles.container}>
      <CardHeader />
      <CardBody />
      <CardFooter />
    </View>
  );
};

export default Card;
