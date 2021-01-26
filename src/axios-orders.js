import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7ad28-default-rtdb.firebaseio.com/'
});

export default instance;