import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as formatActions from '../../actions/formatActions';
import FormatForm from './FormatForm';
import toastr from 'toastr';

class ManageFormatPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            format: Object.assign({}, props.format),
            saving: false,
            errors: {}
        };
        

        this.updateFormatState = this.updateFormatState.bind(this);
        this.save = this.save.bind(this);
    }

    updateFormatState(event) {
        let field = event.target.name;
        let format = Object.assign({}, this.state.format);
        format[field] = event.target.value;
        return this.setState({format: format});
    }

    save(event) {
        event.preventDefault();
        this.setState({ saving: true });
        this.props.actions
            .saveFormat(this.state.format)
            .then(() => {
                this.setState({ saving: false });
                this.redirectToFormatsPage();
                toastr.success("Format is saved");
            })
            .catch(error => {
                this.setState({ saving: false });
                toastr.error("Format is not saved");
            });
    }

    redirectToFormatsPage() {
        this.context.router.history.push("/formats");
    }

    render() {
        return (
            <FormatForm
                format={this.state.format}
                errors={this.state.errors}
                onChange={this.updateFormatState}
                onSave={this.save}
                saving={this.state.saving} />
        );
    }
}

ManageFormatPage.propTypes = {
    format: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

ManageFormatPage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    let id = ownProps.match.params.id;
    let format;
    if (id) {
        format = state.formats.find(it => it.id == id);
    } else {
        format = { name: '', id: -1 };
    }
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
