import { useState, useEffect } from "react";

export function useFetchPokemon(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setError("Error"))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);
    
    return { data, loading, error };
}