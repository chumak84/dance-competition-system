import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.createNewCompetition = this.createNewCompetition.bind(this);
    }

    createNewCompetition(e) {

    }

    render() {
        return (
            <div>
                <div className="container">
                    Upcoming Competition Events:
                </div>
                <div className="container">
                    <Link className="button is-primary" to="competition/new">Create New</Link>
                </div>
            </div>
        );
    }
}

export default HomePage;