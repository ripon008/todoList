import {Text} from 'native-base';
import React from 'react';
import {StatusBar} from 'react-native';

const Header = () => {
  return (
    <Text
      textAlign="center"
      top={0}
      h="10"
      borderColor={'pink.100'}
      borderWidth="2"
      fontSize={30}
      bold>
      <StatusBar backgroundColor="#9333ea" />
      Todo List
    </Text>
  );
};

export default Header;
