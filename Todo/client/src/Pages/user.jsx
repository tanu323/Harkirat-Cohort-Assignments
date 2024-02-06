import React, { useState } from 'react'
import Login from '../components/login.jsx';
import SignUp from '../components/signUp.jsx'

const User = () => {

    return (
        <div>
            {/* Conditionally render Login or SignUp based on the state */}
            {showLogin ? <Login /> : <SignUp />}

        </div>
    );
}

export default User;
