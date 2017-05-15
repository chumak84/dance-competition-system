import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import * as formatActions from '../../actions/formatActions';

class FormatsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            format: { name: "" }
        };

        this.onNameChanged = this.onNameChanged.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onNameChanged(event) {
        const format = this.state.format;
        format.name = event.target.value;
        this.setState({ format: format });
    }

    onClickSave() {
        this.props.createFormat(this.state.format);
    }

    formatRow(format, index) {
        return <div key={index}>{format.name}</div>;
    }

    render () {
        return (
            <div>
                <h1>Formats</h1>
                {this.props.formats.map(this.formatRow)}
                <h2>Add Format</h2>
                <input
                    type="text"
                    onChange={this.onNameChanged}
                    value={this.state.format.name} />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

FormatsPage.propTypes = {
    formats: PropTypes.array.isRequired,
    createFormat: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        formats: state.formats
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createFormat: format => dispatch(formatActions.createFormat(format))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormatsPage);