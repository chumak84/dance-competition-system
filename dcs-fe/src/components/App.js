import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';

class App extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <div className="section">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;