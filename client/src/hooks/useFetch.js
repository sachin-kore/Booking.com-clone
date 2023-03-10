import { useEffect, useState } from "react"
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setloading(true);
            try {
                const res = await axios.get(url);
                setData(res.data);
            } catch (err) {
                setError(true);
            }
            setloading(false);
        }
        fetchData();
    }, [])

    const refetch = async () => {
        setloading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch (err) {
            setError(true);
        }
        setloading(false);
    }
    return { data, loading, error, refetch };
}

export default useFetch;