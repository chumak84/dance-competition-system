import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as formatActions from '../../actions/formatActions';
import FormatList from './FormatList';
import { } from 'react-router-dom';
import toastr from 'toastr';

class FormatsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddFormatPage = this.redirectToAddFormatPage.bind(this);
    }

    componentWillMount() {
        if (this.props.formats.length <= 0)
            this.props.actions.loadFormats()
                .then(() => toastr.success("Formats are loaded"));
    }

    formatRow(format, index) {
        return <div key={index}>{format.name}</div>;
    }

    redirectToAddFormatPage(event) {
        this.props.history.push('/format');
    }

    render() {
        const { formats } = this.props;

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
    actions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
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