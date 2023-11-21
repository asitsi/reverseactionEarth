import { useEffect, useState } from 'react'
import axios from 'axios';

export const ApiCallHook = (urlPath) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const bearerToken = JSON.parse(localStorage.getItem('ReservationAccessToken'));

    useEffect(() => {
        ; (async () => {
            try {
                setLoading(true);
                setError(false);
                const response = await axios.get(urlPath, {
                    headers: {
                        'Authorization': `Bearer ${bearerToken}`,
                        'Content-Type': 'application/json', // Set the content type as needed
                    }
                });
                setData(response.data.data.users)
                setLoading(false)
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        })()
    }, [])

    return [data, error, loading];
}

