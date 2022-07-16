import React from 'react';
import AppContainer from './AppContainer';
import { Provider as StoreProvider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <AppContainer />
    </StoreProvider>
  );
};

export default App;
