import axios from '../Configurations/Axios/axios-config';


// post ( create collection)
export const createCollection = async (Obj) => {
    let response = await axios.post('/collection', Obj, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
    return response.data;
};

// get all ( get all collections )

export const getAllCollections = async () => {
    let response = await axios.get(`/collection`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
    return response.data;
}

// get by id   ( get data )
export const getOneCollection = async (id) => {
    let res = await axios.get(`/collection/${id}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    console.log(res);
    return res.data;
};



//DELETE COllection
export const deleteCollection = async (collectionId) => {
    let res = await axios.delete(`/collection/${collectionId}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return res.data;
};



// join collection

export const joinCollection = async (collectionId, playerId) => {
    let res = await axios.post(`/collection/players/${collectionId}/${playerId}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    return res.data;
};
