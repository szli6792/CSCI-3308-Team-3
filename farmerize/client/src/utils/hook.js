import { useState, useEffect } from "react";

/*
Connects website to relational database on SQL Server.
*/

function useFetch(url) {

    const [data, setData] = useState([]);
    async function fetchUrl() {
        const response = await fetch(url);
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

export { useFetch };
