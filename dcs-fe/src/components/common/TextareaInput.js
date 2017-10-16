import React from 'react';
import PropTypes from 'prop-types';

const TextareaInput = ({ name }) => {
    return <div className="field">
        <label className="label">Message</label>
        <div className="control">
            <textarea className="textarea" placeholder="Textarea" />
        </div>
    </div>;
};

TextareaInput.propTypes = {
    name: PropTypes.string.isRequired
};

export default TextareaInput;
