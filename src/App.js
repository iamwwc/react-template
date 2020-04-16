import React, { Component } from 'react';
import RootRouter from './common/index'
import reducers from './reducers'
import { Provider } from 'react-redux';

import configureStore from "./common/configureStore";

import './App.scss';
import 'antd/dist/antd.css';

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
