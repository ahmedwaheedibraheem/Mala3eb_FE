import axios from '../Configurations/Axios/axios-config';

//Evaluate
export const evaluatePlayer = async (id, evaluateObj) => {
    let res = axios.post(`/player/eval/${id}`, evaluateObj, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return res.data;
}