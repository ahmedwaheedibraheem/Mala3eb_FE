import React from 'react';
import '../../Theme/bootstrap.css';
import { Link } from 'react-router-dom'

const mapping = (props) => {
    let component = props.component;
    let body = <p className='text-muted'>لا يوجد بيانات</p>
    if (props.data && props.data.length > 0 && props.data[0] != null) {
        body = props.data.map(entity =>
            <>
                <Link
                    to={`/${component}/${entity._id}`}>
                    {entity.name || (entity.firstname + ' ' + entity.lastname)}
                </Link>
                <br />
            </>)
    };
    return (
        <div style={{
            textAlign: 'right',
            paddingTop: '1.5rem'
        }}>
            <h4>{props.name}</h4>
            {body}
        </div>
    );
};

export default mapping;