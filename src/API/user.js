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


// get collection IDs by token

export const getCollectionIds = async () => {
    let res = await axios.get(`/user/collection/hamada`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return res.data;
};


// get user by token

export const getUserBytoken = async () => {
    let res = await axios.get(`/user/theUser`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return res.data;
};

// get user by token

export const getUserById = async (id) => {
    let res = await axios.get(`/${id}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return res.data;
};
