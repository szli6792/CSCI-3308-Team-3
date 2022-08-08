import { useState, useEffect } from "react";

/*
Connects website to relational database on SQL Server.
*/

function usePost(url) {

    const [data, setStatus] = useState([]);
    async function fetchUrl() {
        const requestOptions = {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(url, requestOptions);
        const json = await response;
        setStatus(response.status);
    }
    
    useEffect(() => {
        fetchUrl();
    }, [url]);

    return data;

}

export { usePost };
