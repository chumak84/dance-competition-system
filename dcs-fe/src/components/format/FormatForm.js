import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const FormatForm = ({ format, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <h1>Manage Format</h1>
            <TextInput 
                name="name"
                label="Name"
                value={format.name}
                onChange={onChange}
                error={errors.title} />
            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave} />
        </form>
    );
};

FormatForm.propTypes = {
    format: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default FormatForm;
