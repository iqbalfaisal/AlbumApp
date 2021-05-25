import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import HomeRoute from './routes/HomeRoute';

function App() {
  return (
    <NavigationContainer>
      <HomeRoute />
    </NavigationContainer>
  );
}

export default App;
