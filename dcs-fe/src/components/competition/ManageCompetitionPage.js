import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TextInput from '../common/TextInput';

class ManageCompetitionPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = Object.assign({}, props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return <div>
                Competition
                <TextInput label="Name" name="name" placeHolder="Event Name" />
            </div>;
    }
}

ManageCompetitionPage.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    eventDate: PropTypes.object.isRequired
};

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
    return {

    };
}

export default connect(mapeStateToProps, mapDispatchToProps)(ManageCompetitionPage);
