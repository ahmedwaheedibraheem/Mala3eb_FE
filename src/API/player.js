import axios from '../Configurations/Axios/axios-config';

export const getData = async () => {
    let response = await axios.get('/player/getdata', {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return response.data;
}