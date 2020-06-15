import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function User(props) {
  const { user } = props.route.params;
  console.tron.log(user);
  return <View />;
}
