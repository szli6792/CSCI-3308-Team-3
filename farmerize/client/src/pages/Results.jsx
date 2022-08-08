import React from "react";
import styled from "styled-components";
import "./Results.css";
import ResBar from '../components/ResBar.jsx';
import { location, useLocation } from "react-router-dom";
import { useFetch } from '../utils/hook';

/*
Results page.
*/

const ResultsPage = () => {

    const location = useLocation();
    const searchterm = location.state.searchterm

    const [data] = useFetch('/api/sql/search?searchterm='+searchterm)

    console.log(data)

    return (
        <div className="results-page screen">
            <h1 className="Title">Results</h1>
            <ResBar data={data} /> 
        </div>
    );
};

export default ResultsPage;
