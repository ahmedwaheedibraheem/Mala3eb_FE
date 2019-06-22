import React from 'react';
import '../../Theme/bootstrap.css';
import { Link } from 'react-router-dom'

const mapping = (props) => {
    let component = props.component;
    let body = <p className='text-muted'>لا يوجد بيانات</p>
    if (props.data && props.data.length > 0 && props.data[0] != null) {
        body = props.data.map(entity =>
            <>
                <div className="card border-black" style={{ marginTop: '0.2rem', width: '45rem' }}>
                    <div style={{ textAlign: 'right', direction: 'rtl' }}>
                        <div className="card-header" style={{
                            backgroundColor: '#000', color: 'white', fontWeight: 'bold',
                            fontSize: 20
                        }}>
                            <Link
                                to={`/${component}/${entity._id}`} style={{ color: 'white' }}>
                                {entity.name}
                            </Link>
                        </div>
                            {entity.name}<br />
                            {entity.age}<br />
                            {entity.imgURL}<br />
                            {entity.address}<br />
                            {entity.favNum}<br />
                            {entity.mobileNo}<br />
                            {entity.desc}<br />
                            {entity.favPosition}<br />
                        </div>
                    </div>
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