import axios from 'axios';
import { useState, useEffect } from 'react';


axios.defaults.baseURL =`http://localhost:3000/api/`;

export const useFetchApi = (url) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    async function loadData() {
        try {
            const resp = await axios.get(url);
            if(!resp.data) setError({message: "No hay elementos"})
            setData(resp.data);
        } catch (err) {
            setError({message: err.message})
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, [url])

    return [data, loading, error ]

}
