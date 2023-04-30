import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from './src/search';

const App = () => {
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <SearchBar />
    </View>
  );
}

export default App;
