import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/modules';
import AppContainer from './src/screens';
import codePush, { CodePushOptions } from "react-native-code-push";

const { store, persistor } = configureStore();

let codePushOptions: CodePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    </>
  );
};


export default codePush(codePushOptions)(App);