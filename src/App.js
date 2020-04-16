import React, { Component } from 'react';
import './App.css';
import RootRouter from './common/index'
import reducers from './reducers'
import { Provider } from 'react-redux';
import { createStore } from "redux";
const store = createStore(reducers)

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootRouter></RootRouter>
      </Provider>
    )
  }
}
