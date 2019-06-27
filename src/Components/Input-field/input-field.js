import React from 'react';
import '../../Theme/bootstrap.css';

const inputField = (props) => {

    // Label and type determination
    let label;
    let type;

    switch (props.id) {
        case 'name':
            label = 'الاسم';
            type = 'text';
            break;
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
        case 'favNum':
            label = 'الرقم المفضل';
            type = 'number';
            break;
        case 'numberOfPlayers':
            label = 'عدد اللاعبين';
            type = 'number';
            break;
        case 'favPosition':
            label = 'المركز المفضل';
            type = 'text';
            break;
        case 'age':
            label = 'العمر';
            type = 'number';
            break;
        case 'mobileNo':
            label = 'رقم الهاتف';
            type = 'text';
            break;
        case 'address':
            label = 'العنوان';
            break;
        case 'rate':
            label = 'السعر (جنيه/ساعة)';
            break;
        case 'pitchLength':
            label = 'طول الملعب (متر)';
            break;
        case 'pitchWidth':
            label = 'عرض الملعب (متر)';
            break;
        case 'desc':
            label = 'الوصف';
            break;
        case 'date':
            label = 'التاريخ';
            type = 'date';
            break;
    };



    let errorMessege = null;

    if (!props.isValid && props.id === 'firstname') { errorMessege = 'برجاء ادخال الاسم الأول أقل من 10 أحرف' }
    if (!props.isValid && props.id === 'name') { errorMessege = 'برجاء ادخال الاسم أقل من 10 أحرف' }
    if (!props.isValid && props.id === 'favPosition') { errorMessege = 'برجاء ادخال مركز اللعب أقل من 10 أحرف' }
    if (!props.isValid && props.id === 'lastname') { errorMessege = 'برجاء ادخال اللقب أقل من 10 أحرف' }
    if (!props.isValid && props.id === 'address') { errorMessege = 'برجاء ادخال العنوان أقل من 250 حرف' }
    if (!props.isValid && props.id === 'desc') { errorMessege = 'برجاء ادخال العنوان أقل من 250 حرف' }
    if (!props.isValid && props.id === 'age') { errorMessege = 'برجاء ادخال العمر مع مراعاة أن يكون رقم اكبر من 6 و أقل من 99' }
    if (!props.isValid && props.id === 'favNum') { errorMessege = 'برجاء ادخال الرقم المفضل مع مراعاة أن يكون رقم اكبر من 0 و أقل من 99' }
    if (!props.isValid && props.id === 'pitchLength') { errorMessege = 'برجاء ادخال طول الملعب مع مراعاة أن يكون رقم اكبر من 35 و أقل من 120' }
    if (!props.isValid && props.id === 'pitchWidth') { errorMessege = 'برجاء ادخال عرض الملعب مع مراعاة أن يكون رقم اكبر من 25 و أقل من 120' }
    if (!props.isValid && props.id === 'numberOfPlayers') { errorMessege = 'برجاء ادخال عدد اللاعبين مع مراعاة أن يكون رقم اكبر من 5 و أقل من 70' }
    if (!props.isValid && props.id === 'password') { errorMessege = 'برجاء ادخال كلمة السر .ادخل كلمة واحدة و لا تترك مسافة' }
    if (!props.isValid && props.id === 'mobileNo') { errorMessege = 'برجاء ادخال رقم الهاتف ' }
    if (!props.isValid && props.id === 'email') { errorMessege = ' ****@****.**** برجاء ادخال البريد الالكتروني علي الصورة ' }


    console.log(props);






    return (
        <div
            className={!props.isTouched || props.isValid ? 'form-group' : 'form-group has-danger'}
            style={{ maxWidth: '550px' }}>
            <label>{label}</label>
            {props.id === 'address' || props.id === 'desc' ?
                <textarea
                    className={!props.isTouched || props.isValid ? 'form-control' : 'form-control is-invalid'}
                    id={props.id}
                    placeholder={label}
                    value={props.value}
                    onChange={(e) => props.onChangeHandler(e.target.id, e.target.value)}
                /> :
                <input
                    type={type}
                    className={!props.isTouched || props.isValid ? 'form-control' : 'form-control is-invalid'}
                    id={props.id}
                    placeholder={label}
                    value={props.value}
                    onChange={(e) => props.onChangeHandler(e.target.id, e.target.value)}
                />
            }
            <div className='invalid-feedback'> {errorMessege} </div>
        </div>
    );
};

export default inputField;