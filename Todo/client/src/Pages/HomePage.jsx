import React, { useState } from 'react'
import Mybutton from '../components/button.jsx';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const MoveToLogin = () => {
        navigate("/Login")
        // <Navigate to="/Login" />
    };
    const MoveToSignup = () => {
        navigate("/Signup")
    }
    return (
        <div>
            {/* Conditionally render Login or SignUp based on the state */}
            {/* {showLogin ? <Login /> : <SignUp />} */}
            <h1>Welcome to The Daily Traker</h1>
            <h1>Login with Daily traker account to continue</h1>
            <Mybutton buttonText="Login" onClickHandler={MoveToLogin} buttonWidth={10} buttonHeight={10} />
            <Mybutton buttonText="Signup" onClickHandler={MoveToSignup} buttonWidth={10} buttonHeight={10} />
        </div>
    );
}

export default Home;
