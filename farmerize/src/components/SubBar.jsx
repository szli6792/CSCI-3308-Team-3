import React from 'react';
import './SubBar.css';
import styled from "styled-components";
import { css } from "styled-components";

const SubBar = () => {
    return (
    <div className="subbar">
    <input
        className="email_input"
        type="text"
        id="search"
        placeholder="Enter your email adress">
    </input>
    <button className="sub_button" type="submit"> Subscribe </button>
    </div>
    );
};

export default SubBar;