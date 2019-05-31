import axios from '../Configurations/Axios/axios-config';

export const getData = async (pitchId) => {
    let response = await axios.get(`/pitch/5cebdcec847bd8098c7bc7ca`,{
        headers:{
            Authorization:localStorage.getItem('token')
        }
    })
    console.log(response);
    return response.data;
}