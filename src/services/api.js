import axios from 'axios';
import { config } from 'react-native-config';

const localUrl = 'http://192.168.43.150:3333'

const api = axios.create({
    baseURL: "https://bethe-herobackend.herokuapp.com"
});

export default api;