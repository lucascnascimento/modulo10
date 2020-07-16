import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import React from 'react';

import Routes from '~/routes';

// import { Container } from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
};

export default App;
