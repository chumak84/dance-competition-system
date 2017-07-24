import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Dance Competition System</h1>
                <p>System will help to setup and handle the event</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;