import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import FormatsPage from './components/format/FormatsPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="formats" component={FormatsPage} />
        <Route path="about" component={AboutPage} />
    </Route>
);