import React from 'react';
import '../../Theme/bootstrap.css';

const checkBox = (props) => {
    let label;
    switch (props.id) {
        case 'lights':
            label = 'الأضواء';
            break;
        case 'changeRoom':
            label = 'غرف تغيير الملابس';
            break;
        case 'showerRoom':
            label = 'غرف الاستحمام';
            break;
    }
    return (
        <div className="form-check">
            <label className="form-check-label">
                <input className="form-check-input"
                    type="checkbox"
                    id={props.id}
                    onChange={(e) => props.onChangeHandler(e.target.id, e.target.checked)} />
                <span style={{ display: 'inline-block', width: '1.5rem' }}></span>
                {label}
            </label>
        </div>
    );
};

export default checkBox;