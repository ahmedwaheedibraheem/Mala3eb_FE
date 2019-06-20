import axios from '../Configurations/Axios/axios-config';
// import * as actionCreators from '../Store/';

//Evaluate
export const evaluatePlayer = async (id, evaluateObj) => {
    console.log(evaluateObj);
    let res = axios.post(`/player/eval/${id}`, evaluateObj, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return res.data;
}