import React from 'react';
import '../../Theme/bootstrap.css';

const inputField = (props) => {

    // Label and type determination
    let label;
    let type;

    switch (props.id) {
        case 'firstname':
            label = 'الاسم الأول';
            type = 'text';
            break;
        case 'lastname':
            label = 'الاسم الثاني'
            type = 'text';
            break;
        case 'email':
            label = 'البريد الإلكتروني'
            type = 'email';
            break;
        case 'password':
            label = 'كلمة المرور';
            type = 'password'
            break;
    };

    return (
        <div 
            className={!props.isTouched || props.isValid ? 'form-group' : 'form-group has-danger'}
            style={{maxWidth: '550px'}}>
            <label>{label}</label>
            <input
                type={type}
                className={!props.isTouched || props.isValid ? 'form-control' : 'form-control is-invalid'}
                id={props.id}
                placeholder={label}
                value={props.value}
                onChange={(e) => props.onChangeHandler(e.target.id, e.target.value)}
            />
            {! props.isValid ? <div className='invalid-feedback'>يرجى إدخال بيانات صحيحة</div> : null}
        </div>
    );
};

export default inputField;