import validator from 'validator';

// validation function
const validate = (id, value) => {
    switch (id) {
        case 'firstname':
        case 'lastname':
        case 'favPosition':
        case 'name':
            return (!validator.isEmpty(value) && value.length <= 10);
        case 'address':
            return (!validator.isEmpty(value) && value.length <= 300);
        case 'password':
            return (!validator.isEmpty(value) && value.length <= 20);
        case 'email':
            return (validator.isEmail(value));
        case 'img':
            return (value.startsWith('image'));
        case 'favNum':
        case 'age':
            return (!isNaN(value) && value >= 1 && value <= 99);
        case 'mobileNo':
            return (validator.isMobilePhone(value));
        default:
            return true;
    };
};

export default validate;