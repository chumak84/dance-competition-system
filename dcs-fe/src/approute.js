import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter,  } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import FormatsPage from './components/format/FormatsPage';
import ManageFormatPage from './components/format/ManageFormatPage';

class AppRoute extends React.Component {

    render() {
        //debugger;
        return (<BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/formats" component={FormatsPage} />
                    <Route path="/format/:id" component={ManageFormatPage} />
                    <Route path="/format" component={ManageFormatPage} />
                    <Route path="/about" component={AboutPage} />
                </Switch>
            </App>
        </BrowserRouter>
        );
    }
}

export default AppRoute;
