import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

const FormatListRow = ({format}) => {
    return (
        <tr>
            <td><Link to={'/format/' + format.id}>{format.name}</Link></td>
        </tr>
    );
};

FormatListRow.propTypes = {
    format: PropTypes.object.isRequired
};

export default FormatListRow;