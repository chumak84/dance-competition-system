import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import AppRoute from './approute';
import {loadFormats} from './actions/formatActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadFormats());

render(
    <Provider store={store} >
        <AppRoute />
    </Provider>,
    document.getElementById('app')
);