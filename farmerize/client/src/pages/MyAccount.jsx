import React, { useState }  from 'react';
import './MyAccount.css';
import { usePost } from '../utils/post';

const MyAccount = () => {

//init form input

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

// Add checks for form input here

    var match = true;
    if (confirm != password) {
        match = false;
    }

//execute submit form    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert('Your account has been opened. Welcome to Farmerize!');

        // should be removed/obfuscated before release, good for testing
        console.log(firstName)
        console.log(lastName)
        console.log(phone)
        console.log(email)
        console.log(address)
        console.log(age)
        console.log(password)

        // commits to server
        
        const resp = fetch('/api/sql/createuser?first=' + firstName + '&last=' + lastName + '&phone=' + phone + '&email=' + email + '&address=' + address + '&age=' + age + '&password=' + password, {  method: 'Post' });
        console.log(resp)

    }

  return (
    <div class="my-account-page">
        <form onSubmit={handleSubmit}>
        <h1 class="create-your-profile">Create your <br />profile</h1>

        <div class="st-name-container">
          <label class="first-name quicksand-semi-bold-mirage-39px" for="firstName">First Name</label>
          <label class="last-name quicksand-semi-bold-mirage-39px" for="lastName">Last Name</label>
        </div>

        <div class="light-contained-defa">
            <div class="light-contained-default-default">
                <p className="perror">{true ? "" : "Username error"}</p>
                <input 
                    type='text'
                    id='firstName'
                    name='firstName'
                    required
                    value={firstName}
                    minlength="2"
                    onChange={(e) => setFirstName(e.target.value)}
                    pattern="[A-Z][a-zA-Z\s]*"
                    title="Legal First Name"
                    class="rect">
                </input>
            </div>
            <div class="light-contained-default-default-1">
                <p className="perror">{true ? "" : "Username error"}</p>
                <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    required
                    value={lastName}
                    minlength="2"
                    onChange={(e) => setLastName(e.target.value)}
                    pattern="[A-Z][a-zA-Z\s]*"
                    title="Legal Surname"
                    class="rect-1">
                </input>
            </div>
        </div>
          
        <div class="flex-row">
            <label class="phone quicksand-semi-bold-mirage-39px" for="phone">Phone</label>
            <label class="email-adress quicksand-semi-bold-mirage-39px" for="email">Email Address</label>
        </div>
        
        <div class="light-contained-defa-1">
            <div class="light-contained-default-default">
                <p className="perror">{true ? "" : "Username error"}</p>
                <input 
                    type='tel'
                    id='phone'
                    name='phone'
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    class="rect">
                </input>
            </div>
            <div class="light-contained-default-default-1">
                <p className="perror">{true ? "" : "Username error"}</p>
                <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="rect-1">
                </input>
            </div>
        </div>
        
        <div class="flex-row-1">
              <label class="adress quicksand-semi-bold-mirage-39px" for="address">Address</label>
              <label class="age quicksand-semi-bold-mirage-39px" for="age">Age</label>
        </div>

        <div class="light-contained-defa-2">
            <div class="light-contained-default-default">
                <p className="perror">{true ? "" : "Username error"}</p>
                <input 
                    type='text'
                    id='address'
                    name='address'
                    value={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    class="rect">
                </input>
            </div>
            <div class="light-contained-default-default-1">
                <p className="perror">{true ? "" : "Username error"}</p>
                <input
                    type='text'
                    id='age'
                    name='age'
                    value={age}
                    required
                    onChange={(e) => setAge(e.target.value)}
                    class="rect-1">
                </input>
            </div>
        </div>
        
        <div class="password quicksand-semi-bold-mirage-39px">Password</div>
        
        <label class="light-contained-default-default-2">
            <input 
                type='password'
                id='password'
                name='password'
                value={password}
                required
                title="Must be alphanumeric"
                onChange={(e) => setPassword(e.target.value)}
                class="rect-2">
            </input>
        </label>
        
        <div class="confirm-password quicksand-semi-bold-mirage-39px">Confirm Password</div>

        <label class="light-contained-default-default-3">
            <p className="perror">{match ? "" : "Passwords do not match"}</p>
            <input
                type='password'
                id='password'
                name='confirm'
                value={confirm}
                required
                title="Must match password above"
                onChange={(e) => setConfirm(e.target.value)}
                class="rect-2">
            </input>
        </label>
        
        <div class="create-button">
            <button className="accountbutton" type= "submit"><div class="label valign-text-middle">Create Account</div></button>
        </div>

        <div class="empty"></div>
        </form>
    </div>
  );
};


export default MyAccount;
