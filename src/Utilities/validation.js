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
        case 'desc':
            return (!validator.isEmpty(value) && value.length <= 250);
        case 'password':
            return (!validator.isEmpty(value) && value.length <= 20);
        case 'email':
            return (validator.isEmail(value));
        case 'img':
            return (value.startsWith('image'));
        case 'favNum':
            return (!isNaN(value) && value > 0 && value <= 99);
        case 'age':
            return (!isNaN(value) && value > 6 && value <= 99);
        case 'numberOfPlayers':
            return (!isNaN(value) && value > 5 && value < 60);
        case 'pitchLength':
            return (!isNaN(value) && value >= 35 && value <= 120);
        case 'pitchWidth':
            return (!isNaN(value) && value >= 25 && value <= 70);
        case 'rate':
            return (!isNaN(value) && value >= 0);
        case 'mobileNo':
            return (validator.isMobilePhone(value));
        case 'date':
            return (!validator.isEmpty(value) && new Date(value) > new Date());
        default:
            return true;
    };
};

export default validate;