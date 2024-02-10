import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Mybutton from '../components/button.jsx';

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }


    const handleSignUpClick = () => {
        // Use the navigate function to redirect to the signup page
        navigate("/Signup")
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // const formData = { userName, email, password };
            console.log("Form Data: ", formData);
            await axios.post("http://localhost:8001/user/login", formData).
                then((res) => {
                    console.log("Response", res);
                    alert("User Logged in ");
                    window.localStorage.setItem("userID", res.data.userID);
                    window.localStorage.setItem("access_token", res.data.token);
                    navigate("/todo/createTodo")

                }).
                catch((error) => {
                    console.log("error object: ", error)
                    if (error.response.status === 400) {
                        throw new Error(error.response.data.message);
                    }
                    else if (error.response.status === 401) {
                        throw new Error(error.response.data.message)
                    }
                    throw new Error(error);
                });


            // navigate('/todo/createTodo');
        } catch (error) {
            console.error("Error in Login:", error);
            alert(error);
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Todo logo"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Login to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={handleChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <Mybutton
                                buttonText="Submit"
                                onClickHandler={handleSubmit}
                                buttonWidth={10}
                                buttonHeight={12}
                                className={`tag w-full h-12 bg-blue-500  flex items-center justify-center`}
                            // This way, the Mybutton component can receive additional classes through the className prop and apply them dynamically.

                            />
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a registered User?{' '}
                        <Mybutton buttonText="SignUp" onClickHandler={handleSignUpClick} buttonWidth={10} buttonHeight={20} />
                    </p>
                </div>
            </div >
        </>
    )
};

export default Login;


