import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as formatActions from '../../actions/formatActions';
import FormatList from './FormatList';
import {browserHistory} from 'react-router';

class FormatsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddFormatPage = this.redirectToAddFormatPage.bind(this);
    }

    formatRow(format, index) {
        return <div key={index}>{format.name}</div>;
    }

    redirectToAddFormatPage(event) {
        browserHistory.push('/format');
    }

    render () {
        const {formats} = this.props;

        return (
            <div>
                <h1>Formats</h1>
                <input
                    type="submit"
                    className="btn btn-default"
                    value="Add Format"
                    onClick={this.redirectToAddFormatPage} />
                <FormatList formats={formats} />
            </div>
        );
    }
}

FormatsPage.propTypes = {
    formats: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        formats: state.formats
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(formatActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormatsPage);