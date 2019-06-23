import axios from '../Configurations/Axios/axios-config';

export const getData = async (pitchId) => {
    let response = await axios.get(`/pitch/${pitchId}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return response.data;
};

export const getAllPitches = async () => {
    let response = await axios.get('/pitch/', {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return response.data;
};

export const addPitch = async (pitchObj) => {
    let response = await axios.post('/pitch', pitchObj, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
    return response.data;
};
