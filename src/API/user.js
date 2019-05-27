import axios from '../Configurations/Axios/axios-config';

// Register
export const register = async (user) => {
    let response = await axios.post('/user/register', user);
    return response.data;
};

// Login
export const login = async (loginCredentials) => {
    let response = await axios.post('/user/login', loginCredentials);
    return response.data; 
};