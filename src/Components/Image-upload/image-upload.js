import React from 'react';
import imagePlaceholder from '../../assets/ImagePlaceholder.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../../Theme/bootstrap.css';

// Image upload component
const imageUpload = (props) => {
    return (
        <div
            className='alert alert-dismissible alert-light'
            style={{ textAlign: 'right', maxWidth: '550px', borderRadius: '1rem 1rem 0rem 0rem' }}>
            <div
                style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <img
                    src={props.src || imagePlaceholder}
                    style={{ maxWidth: '15rem', borderRadius: '50%' }}
                    alt='PlayerImage' />
            </div>
            <div
                style={{ marginBottom: '0.25rem' }}>
                <input
                    id='img'
                    className='btn btn-outline-secondary'
                    type='file'
                    onChange={(e) => props.onChangeHandler(e.target.id, e.target.files[0])} />
                <button
                    onClick={() => props.imageUploadHandler()}
                    className='btn btn-success'
                    style={{ marginRight: '0.25rem' }}
                    disabled={props.src || props.uploading || !props.isValid || !props.imgFile}>
                    {props.uploading ?
                        <span>
                            <FontAwesomeIcon className="fa-pulse" icon={faSpinner} />جاري الحفظ
                        </span>
                        : 'حفظ الصورة'}
                </button>
            </div>
            <div>
                {props.isTouched && !props.isValid ?
                    <p className="text-danger">الامتدادات المسموح بها هي [jpj] و [jpeg] و [png] فقط!</p>
                    : null}
                {props.error ?
                    <p className="text-danger">خطأ أثناء الحفظ، يرجى المحاولة مرة أخرى!</p>
                    : null}
            </div>
        </div>
    );
};

export default imageUpload;