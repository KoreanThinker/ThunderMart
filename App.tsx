import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import configureStore from './src/modules';
import AppContainer from './src/screens';

// const { store } = configureStore();

const App = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <AppContainer />
      {/* </PersistGate> */}
      {/* </Provider> */}
    </>
  );
};


export default App;
