import axios from '../Configurations/Axios/axios-config';

export const getData = async (pitchId) => {
    let response = await axios.get(`/pitch/${pitchId}`,{
        headers:{
            Authorization:localStorage.getItem('token')
        }
    })
    return response.data;
}