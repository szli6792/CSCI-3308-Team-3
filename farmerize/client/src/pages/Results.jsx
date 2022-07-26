import React from "react";
import styled from "styled-components";
import "./Results.css";
import ResBar from '../components/ResBar.jsx';

const ResultsPage = () => {
    return (
        <div className="results-page screen">
            <h1 className="Title">Results</h1>
            <ResBar />
        </div>
    );
};

export default ResultsPage;