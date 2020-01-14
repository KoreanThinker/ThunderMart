import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/modules';
import AppContainer from './src/screens';
import codePush, { CodePushOptions } from "react-native-code-push";
import SplashScreen from 'react-native-splash-screen'

const { store, persistor } = configureStore();

let codePushOptions: CodePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 500);
  }, [])

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


// export default codePush(codePushOptions)(App);
export default App