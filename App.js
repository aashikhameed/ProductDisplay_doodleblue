import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import RootComponent from './app/screens/RootComponent'
import { store } from './app/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <RootComponent/>
        {/* </PersistGate> */}
      </Provider>
    );
  }
}
