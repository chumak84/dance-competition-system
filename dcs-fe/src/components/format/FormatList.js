import React, { PropTypes } from 'react';
import FormatListRow from './FormatListRow';

const FormatList = ({ formats }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {formats.map(format => 
                    <FormatListRow key={format.id} format={format} />
                )}
            </tbody>
        </table>
    );
};

FormatList.propTypes = {
    formats: PropTypes.array.isRequired
};

export default FormatList;
