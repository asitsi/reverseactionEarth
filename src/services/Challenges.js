import axios from "axios"
import { BaseUrl } from "../components/Constant/BaseUrl"
const bearerToken = JSON.parse(localStorage.getItem('ReservationAccessToken'));

export const createNewChallenges = async (allData) => {
    const response = await axios.post(`${BaseUrl}/v1/challenges`, allData, {
        headers: {
            'Authorization': `Bearer ${bearerToken.jwtToken}`,
            'Content-Type': 'application/json',
        },
    })
    console.log(response)
}

export const getAllChallenges = async (res) => {
    const response = await axios.get(`${BaseUrl}/v1/challenges/${res}`, {
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json', // Set the content type as needed
        }
    });
    console.log(response?.data?.data?.challenges)
    return response?.data?.data?.challenges;
} 