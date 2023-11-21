import axios from 'axios';
import { BaseUrl } from '../components/Constant/BaseUrl';

export const login = async (res) => {
    const response = await axios.post(`${BaseUrl}/v1/auth/login`, res);
    console.log(response.data)
    return response.data;
}