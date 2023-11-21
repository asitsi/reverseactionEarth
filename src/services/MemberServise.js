import axios from 'axios';
import { BaseUrl } from '../components/Constant/BaseUrl';
const bearerToken = JSON.parse(localStorage.getItem('ReservationAccessToken'));

export const getMembers = async () => {
    const response = await axios.get(`${BaseUrl}/v1/users`, {
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json', // Set the content type as needed
        }
    });
    console.log(response.data.data.users)
    return response.data.data.users;
}

export const uploadCSV = async (res) => {
    const response = await axios.post(`${BaseUrl}/v1/users/bulk`, res,{
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json', // Set the content type as needed
        }
    });
    console.log(response.data)
    return response.data;
}