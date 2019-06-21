import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const spinner = (props) => {
    return (
        <div style={{ paddingTop: "3rem", textAlign: "center" }}>
            <FontAwesomeIcon style={{ fontSize: "3rem", color: "ECF0F1" }}
                className="fa-pulse"
                icon={faSpinner} />
        </div>
    );
};

export default spinner;