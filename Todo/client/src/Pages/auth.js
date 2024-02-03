import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';

const Auth = () => {
    return (
        <div className='auth'>
            <Login />
        </div>
    )
}

