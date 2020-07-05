import axios from 'axios';
const url = 'https://localhost:44321/api/serverstatus';

export const Server = loadData => {

    return axios.get(url).then(response => response.data).catch(error => { throw error; })
};

