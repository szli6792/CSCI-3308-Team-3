import { useState } from "react";

function usePost(url) {

    const [data, setData] = useState([]);
    async function fetchUrl() {
        const requestOptions = {
            method: 'Post'
        }
        const response = await fetch(url, requestOptions);
        const json = await response.json();
        setData(json);
    }

    useEffect(() => {
        fetchUrl();
    }, []);
    
    useEffect(() => {
        fetchUrl();
    }, [url]);

    return [data];

}

export { usePost };