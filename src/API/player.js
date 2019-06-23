import axios from '../Configurations/Axios/axios-config';

//getplayer (another profile)
export const getPlayerData = async (id) => {
    let response = await axios.get(`/player/${id}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return response.data;
}

// createPlayer
export const createPlayer = async (playerObj) => {
    let response = await axios.post('/player/add', playerObj, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
    return (response.data);
};

// follow Player
export const followPlayer = async (playerId , playerObj)=>{
    let response = await axios.patch(`/player/follow/${playerId}` ,playerObj, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
    return (response.data);
}

// edit Player
export const editPlayer = async ( playerObj)=>{
    let response = await axios.patch(`/player/data` , playerObj, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
    return (response.data);
}