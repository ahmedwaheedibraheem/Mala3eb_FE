import axios from '../Configurations/Axios/axios-config';

export const search = async (searchKey) => {
    let response = await axios.get(`/search/${searchKey}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
    return response.data;
}