import React, { useState } from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import AppContainer from './components/AppContainer';
import { AppRegistry } from 'react-native'


// Main Reducer
import rootReducer from "./store/reducers";


import thunk from "redux-thunk";


// history and middlewares
const middlewares = [thunk];

// store creation and persist
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

const fetchFonts = () => {
  return Font.loadAsync({
    'noto': require('./assets/fonts/NotoSans-Regular.ttf'),
    'noto-b': require('./assets/fonts/NotoSans-Bold.ttf'),
    'inconsolata': require('./assets/fonts/Inconsolata-Bold.ttf'),
  });
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={() => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
AppRegistry.registerComponent('shopping-app', () => App)
