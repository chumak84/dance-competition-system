import React from 'react';
import TextInput from '../common/TextInput';

const FormatForm = ({ format, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h1>Manage Format</h1>
            <TextInput 
                name="name"
                label="Name"
                value={format.Name}
                onChange={onChange}
                error={errors.title} />
            <input
                type="submit"
                disabled={loading}
                value={loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave} />
        </form>
    );
};

FormatForm.propTypes = {
    format: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default FormatForm;
