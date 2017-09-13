import React from 'react';
import {Link} from 'react-router-dom';

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
                Upcoming Competition Events
                <Link className="btn btn-default" to="competition/new">Create</Link>
            </div>
        );
    }
}

export default HomePage;