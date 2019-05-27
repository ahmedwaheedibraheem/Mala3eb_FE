import validator from 'validator';

// validation function
const validate = (id, value) => {
    switch (id) {
        case 'firstname':
        case 'lastname':
            return (!validator.isEmpty(value) && value.length <= 10);
        case 'password':
            return (!validator.isEmpty(value) && value.length <= 20);
        case 'email':
            return (validator.isEmail(value));
        default:
            return true;
    };
};

export default validate;