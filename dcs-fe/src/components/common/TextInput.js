import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, onChange, placeHolder, value}) => {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <input
                    type="text"
                    name={name}
                    className="input"
                    placeholder={placeHolder}
                    value={value}
                    onChange={onChange} />
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeHolder: PropTypes.string,
    value: PropTypes.string
};

export default TextInput;
