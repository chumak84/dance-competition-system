import React from 'react';
import {connect} from 'react-redux';

class ManageCompetitionPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = Object.assign({}, props);
    }

    render() {
        return <div>
                Competition
            </div>;
    }
}

function mapeStateToProps(state, ownProps) {
    const id = ownProps.match.params.id;
    if (id > 0) {
        return {
            id: 0,
            title: "",
            description: "",
            eventDate: new Date()
        };
    } else {
        return {
            id: 0,
            title: "title",
            description: "description",
            eventDate: new Date()
        };
    }
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapeStateToProps, mapDispatchToProps)(ManageCompetitionPage);
