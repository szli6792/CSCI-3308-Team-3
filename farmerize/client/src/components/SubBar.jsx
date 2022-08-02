import React from 'react';
import './SubBar.css';

const SubBar = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.email.value)
        alert('You have subscribed to our mailing list!')}

    return (
    <div className="subbar">
    <form onSubmit={handleSubmit}>
        <fieldset>
            <label>
                <input 
                className='email_input'
                placeholder='Enter your email address'
                name="email"
                >
                </input>
            </label>
        </fieldset>
        <button className="sub_button" type="submit"> Subscribe </button>
    </form>
    </div>
    );
};

export default SubBar;
