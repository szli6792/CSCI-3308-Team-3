import { React, useState }  from 'react';
import { useFetch } from '../utils/hook';
import './SubBar.css';

const SubBar = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/api/sql/subscribe?email='+email, { method: 'POST' });
        alert('You have subscribed to our mailing list!');
        setEmail("");
    };

    return (
    <div className="subbar">
    <form onSubmit={handleSubmit}>
        <fieldset>
            <label>
                <input 
                className='email_input'
                placeholder='Enter your email address'
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
