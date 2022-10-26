import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Box, NativeBaseProvider, View} from 'native-base';
// import {StyleSheet} from 'react-native';
// import {TextInput} from 'react-native-gesture-handler';
import Header from './src/components/Header';
import Toast from 'react-native-toast-message';
// import {addTodo} from './src/redux/reducer/TodoSLice';

import {Provider} from 'react-redux';
// import {persistStore} from 'redux-persist';

import {PersistGate} from 'redux-persist/integration/react';
import Home from './src/components/Home';
import {store, persistor} from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <Box flex={1} bg="white" w={'100%'} position="relative">
            <View zIndex={10}>
              <Toast position="top" topOffset={40}  visibilityTime={1000}/>
            </View>
            <Header />
            <Home />
          </Box>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
