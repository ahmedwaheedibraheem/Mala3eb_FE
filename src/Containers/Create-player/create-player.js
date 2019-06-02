import React, { Component } from 'react';
import ImageUpload from '../../Components/Image-upload/image-upload';
import InputField from '../../Components/Input-field/input-field';
import { connect } from 'react-redux';
import * as userActions from '../../Store/User/user-actions';
import * as playerAPI from '../../API/player';
import validate from '../../Utilities/validation';
import storage from '../../Configurations/Firebase/firebase-config';
import '../../Theme/bootstrap.css';

class CreatePlayer extends Component {
    state = {
        image: {
            imgFile: null,
            uploading: false,
            error: false,
            imgURL: null,
            isValid: false,
            isTouched: false
        },
        formData: {
            name: {
                value: '',
                isValid: false,
                isTouched: false
            },
            favNum: {
                value: '',
                isValid: false,
                isTouched: false
            },
            favPosition: {
                value: '',
                isValid: false,
                isTouched: false
            },
            age: {
                value: '',
                isValid: false,
                isTouched: false
            },
            mobileNo: {
                value: '',
                isValid: false,
                isTouched: false
            },
            address: {
                value: '',
                isValid: false,
                isTouched: false
            }
        }
    };

    // onChangeHandler
    onChangeHandler = (id, value) => {
        // In case of an image
        if (id === 'img') {
            let obj = { ...this.state.image };
            obj.imgFile = value;
            obj.uploading = false;
            obj.error = false;
            obj.imgURL = null;
            obj.isValid = validate('img', value.type);
            obj.isTouched = true;
            this.setState({ image: { ...obj } });
        } else {
            // Copying the state
            const obj = {};
            for (let key in this.state.formData) {
                obj[key] = { ...this.state.formData[key] }
            };
            // Resetting the state
            obj[id].value = value;
            obj[id].isValid = validate(id, value);
            obj[id].isTouched = true;
            this.setState({ formData: { ...obj } });
        };
    };

    // imageUploadHandler
    imageUploadHandler = () => {
        // The button is initially disabled if no image is selected or if the selected file is invalid
        // So, no need to check therefor
        // Uploading the image
        storage.ref(`images/${this.state.image.imgFile.name}`)
            .put(this.state.image.imgFile)
            .on('state_changed',
                // Uploading
                () => {
                    const obj = { ...this.state.image };
                    obj.uploading = true;
                    this.setState({ image: obj });
                },
                // Error uploading
                () => {
                    const obj = { ...this.state.image };
                    obj.error = true;
                    obj.uploading = false;
                    this.setState({ image: obj });
                },
                // Uploading succeeed
                () => {
                    storage.ref('images')
                        .child(this.state.image.imgFile.name)
                        .getDownloadURL()
                        .then((url) => {
                            const obj = { ...this.state.image };
                            obj.uploading = false;
                            obj.error = false;
                            obj.imgURL = url;
                            obj.isValid = false;
                            obj.isTouched = false;
                            this.setState({ image: obj });
                        });
                });
    };

    // onClearHandler
    onClearHandler = async () => {
        // Check if there is an image
        try {
            if (this.state.image.imgURL)
                await storage.ref('images').child(this.state.image.imgFile.name).delete();
        } catch (error) {
            return (console.log(error))
        };
        // Ressetting the state
        const imgObj = {
            imgFile: null,
            uploading: false,
            error: false,
            imgURL: null,
            isValid: false,
            isTouched: false
        };
        const formDataobj = { ...this.state.formData };
        Object.keys(this.state.formData).forEach(key => {
            formDataobj[key].value = '';
            formDataobj[key].isValid = false;
            formDataobj[key].isTouched = false;
        });
        this.setState({
            image: imgObj,
            formData: formDataobj
        });
    };

    // onSubmitHandler
    onSubmitHandler = async () => {
        try {
            // The button is initially disabled if the form is invalid
            // Extracting player data
            const playerObj = { imgURL: this.state.image.imgURL };
            Object.keys(this.state.formData).forEach(key => {
                playerObj[key] = this.state.formData[key].value;
            });
            // Sending request
            const response = await playerAPI.createPlayer(playerObj);
            // Updating app user
            this.props.setAppUser(response.user)
            this.props.history.push(`/profile/${response.user.playerId}`);
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        // Getting keys to render the fields dynamically
        let Keys = Object.keys(this.state.formData);
        // Checking if the whole form is valid
        let isImage = this.state.image.imgURL ? true : false;
        let validationArray = [isImage];
        let isFormValid = false;
        for (let key in this.state.formData) {
            validationArray.push(this.state.formData[key].isValid);
        }
        if (validationArray.indexOf(false) === -1) {
            isFormValid = true;
        }
        return (
            <div
                className='container'
                style={{ textAlign: 'right', marginTop: '1.5rem' }}>
                <fieldset>
                    <legend>لاعب جديد</legend>
                    <hr className='my-4' />
                    <div className='row'>
                        <div className='col-md-6'>
                            <ImageUpload
                                onChangeHandler={this.onChangeHandler}
                                imageUploadHandler={this.imageUploadHandler}
                                src={this.state.image.imgURL}
                                imgFile={this.state.image.imgFile}
                                uploading={this.state.image.uploading}
                                isTouched={this.state.image.isTouched}
                                isValid={this.state.image.isValid}
                                error={this.state.image.error}
                            />
                        </div>
                        <div className='col-md-6'>
                            {
                                Keys.map(key => <InputField
                                    key={key}
                                    id={key}
                                    value={this.state.formData[key].value}
                                    isValid={this.state.formData[key].isValid}
                                    isTouched={this.state.formData[key].isTouched}
                                    onChangeHandler={this.onChangeHandler}
                                />)
                            }
                            <button className='btn btn-success'
                                style={{ marginLeft: '0.25rem' }}
                                onClick={() => this.onSubmitHandler()}
                                disabled={isFormValid ? false : true}
                            >إتمام التسجيل</button>
                            <button className='btn btn-secondary'
                                style={{ marginLeft: '0.25rem' }}
                                onClick={this.onClearHandler}
                            >مسح البيانات</button>

                        </div>
                    </div>
                </fieldset>
            </div>
        );
    }
};

// mapActionsToProps
const mapActionsToProps = (dispatch) => {
    return {
        setAppUser: (user) => dispatch(userActions.setAppUser(user))
    };
};

export default connect(null, mapActionsToProps)(CreatePlayer);