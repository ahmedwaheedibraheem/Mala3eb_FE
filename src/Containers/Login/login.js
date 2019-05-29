import React, { Component } from 'react';
import { connect } from 'react-redux';
import validate from '../../Utilities/validation';
import InputField from '../../Components/Input-field/input-field';
import * as userActions from '../../Store/User/user-actions';
import * as UserAPI from '../../API/user';
import '../../Theme/bootstrap.css';

class Login extends Component {
    state = {
        email: {
            value: '',
            isTouched: false,
            isValid: false,
        },
        password: {
            value: '',
            isTouched: false,
            isValid: false
        }
    };

    // onChangeHandler
    onChangeHandler = (id, value) => {
        // Copying the state
        const obj = {};
        for (let key in this.state) {
            obj[key] = { ...this.state[key] }
        };
        // Resetting the state
        obj[id].value = value;
        obj[id].isValid = validate(id, value);
        obj[id].isTouched = true;
        this.setState(obj);
    };

    // onClearHandler
    onClearHandler = () => {
        const obj = {};
        for (let key in this.state) {
            obj[key] = { ...this.state[key] }
            obj[key].value = '';
            obj[key].isValid = false;
            obj[key].isTouched = false;
        };
        // Resetting the state
        this.setState(obj);
    };

    // onSubmitHandler
    onSubmitHandler = async () => {
        try {
            // Getting loginCredentials object
            let credentials = {};
            for (let key in this.state) {
                credentials[key] = this.state[key].value;
            };
            // Logging in
            const response = await UserAPI.login(credentials)
            // Setting the token in the local storage
            localStorage.setItem('token', response.token);
            // Setting user app
            this.props.setAppUser(credentials);
            // There shall be redirect here later ...
            this.props.history.push('/profile');
        } catch (error) {
            console.log(error)
            // there shall be real error handling here later ...
        }
    };

    render() {
        // Getting state keys to render the login form dynamically
        let stateKeys = Object.keys(this.state);
        // Checking if the whole form is valid
        let validationArray = [];
        let isFormValid = false;
        for (let key in this.state) {
            validationArray.push(this.state[key].isValid);
        };
        if (validationArray.indexOf(false) === -1) {
            isFormValid = true;
        }
        return (
            <div className='container' style={{
                textAlign: 'right',
                paddingTop: '1.5rem'
            }}>
                <fieldset>
                    <legend>تسجيل الدخول</legend>
                    <hr className='my-4' />
                    {
                        stateKeys.map(key => <InputField
                            key={key}
                            id={key}
                            value={this.state[key].value}
                            isValid={this.state[key].isValid}
                            isTouched={this.state[key].isTouched}
                            onChangeHandler={this.onChangeHandler}
                        />)
                    }
                    <button className='btn btn-success'
                        style={{ marginLeft: '0.25rem' }}
                        onClick={this.onSubmitHandler}
                        disabled={isFormValid ? false : true}
                    >تسجيل الدخول</button>
                    <button className='btn btn-secondary'
                        style={{ marginLeft: '0.25rem' }}
                        onClick={this.onClearHandler}
                    >مسح البيانات</button>
                </fieldset>
            </div>
        );
    };
};

// mapActionsToProps
const mapActionsToProps = (dispatch) => {
    return {
        setAppUser: (user) => dispatch(userActions.setAppUser(user))
    };
};

export default connect(null, mapActionsToProps)(Login);