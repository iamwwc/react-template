import React, { Component } from 'react';
import './App.css';
import RootRouter from './common/index'
import reducers from './reducers'
import { Provider } from 'react-redux';
import configureStore from "./common/configureStore";
const store = configureStore(reducers)

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootRouter></RootRouter>
      </Provider>
    )
  }
}
