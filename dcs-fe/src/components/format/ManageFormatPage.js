import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as formatActions from '../../actions/formatActions';
import FormatForm from './FormatForm';

class ManageFormatPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            format: Object.assign({}, props.format),
            errors: {}
        };
    }

    render() {
        return (
            <FormatForm
                format={this.state.format}
                errors={this.state.errors} />
        );
    }
}

ManageFormatPage.propTypes = {
    format: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let format = { name: '', id: '' };
    return {
        format: format
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(formatActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageFormatPage);
