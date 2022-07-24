import React, { useState }  from 'react';
import './MyAccount.css';
import { usePost } from '../utils/post';

const MyAccount = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');




    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert('You have submitted');
        console.log(firstName)
        console.log(lastName)
        console.log(phone)
        console.log(email)
        console.log(address)
        console.log(age)
        console.log(password)

        const submitFirstName = usePost('/api/sql/subscribe?email=' + firstName);
        console.log(submitFirstName)
        const submitLastName = usePost('/api/sql/subscribe?email=' + lastName);
        console.log(submitLastName)
        const submitPhone  = usePost('/api/sql/subscribe?email=' + phone);
        console.log(submitPhone)
        const submitEmail = usePost('/api/sql/subscribe?email=' + email);
        console.log(submitEmail)
        const submitAddress = usePost('/api/sql/subscribe?email=' + address);
        console.log(submitAddress)
        const submitAge = usePost('/api/sql/subscribe?email=' + age);
        console.log(submitAge)
        const submitPassword = usePost('/api/sql/subscribe?email=' + password);
        console.log(submitPassword)
    }

  return (
    <div class="my-account-page">
        <form>
        <h1 class="create-your-profile">Create your <br />profile</h1>

        <div class="st-name-container">
          <div class="first-name quicksand-semi-bold-mirage-39px">First Name</div>
          <div class="last-name quicksand-semi-bold-mirage-39px">Last Name</div>
        </div>

        <div class="light-contained-defa">
            <label class="light-contained-default-default">
                <p style={{color: "red"}}>{false ? "" : "Username error"}</p>
                <input 
                    type='text'
                    id='firstName'
                    name='firstName'
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    class="rect">
                </input>
            </label>
            <label class="light-contained-default-default-1">
                <p style={{color: "red"}}>{false ? "" : "Username error"}</p>
                <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    class="rect-1">
                </input>
            </label>
        </div>
          
        <div class="flex-row">
            <div class="phone quicksand-semi-bold-mirage-39px">Phone</div>
            <div class="email-adress quicksand-semi-bold-mirage-39px">Email Address</div>
        </div>
        
        <div class="light-contained-defa-1">
            <label class="light-contained-default-default">
                <p style={{color: "red"}}>{false ? "" : "Username error"}</p>
                <input 
                    type='text'
                    id='phone'
                    name='phone'
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    class="rect">
                </input>
            </label>
            <label class="light-contained-default-default-1">
                <p style={{color: "red"}}>{false ? "" : "Username error"}</p>
                <input
                    type='text'
                    id='email'
                    name='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="rect-1">
                </input>
            </label>
        </div>
        
        <div class="flex-row-1">
              <div class="adress quicksand-semi-bold-mirage-39px">Address</div>
              <div class="age quicksand-semi-bold-mirage-39px">Age</div>
        </div>

        <div class="light-contained-defa-2">
            <label class="light-contained-default-default">
                <p style={{color: "red"}}>{false ? "" : "Username error"}</p>
                <input 
                    type='text'
                    id='address'
                    name='address'
                    value={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    class="rect">
                </input>
            </label>
            <label class="light-contained-default-default-1">
                <p style={{color: "red"}}>{false ? "" : "Username error"}</p>
                <input
                    type='text'
                    id='age'
                    name='age'
                    value={age}
                    required
                    onChange={(e) => setAge(e.target.value)}
                    class="rect-1">
                </input>
            </label>
        </div>
        
        <div class="password quicksand-semi-bold-mirage-39px">Password</div>
        
        <label class="light-contained-default-default-2">
            <p style={{color: "red"}}>{false ? "" : "Username error"}</p>
            <input 
                class="rect-2"
                required>
            </input>
        </label>
        
        <div class="confirm-password quicksand-semi-bold-mirage-39px">Confirm Password</div>

        <label class="light-contained-default-default-3">
            <p style={{color: "red"}}>{false ? "" : "Username error"}</p>
            <input 
                class="rect-2"
                required>
            </input>
        </label>
        
        <div class="create-button">
            <button type= "submit" onSubmit={handleSubmit}><div class="label valign-text-middle">Create Account</div></button>
        </div>

        <div class="empty"></div>
        </form>
    </div>
  );
};


export default MyAccount;
