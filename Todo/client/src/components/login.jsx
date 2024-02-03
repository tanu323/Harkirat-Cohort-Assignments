import React from 'react';
import axios from 'axios';
import Mybutton from './button';

const Login = () => {


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001", email);
            alert("User Loging in ");
        } catch (error) {
            console.error("Error in Login:", error);
            alert("Failed to login. Please try again.");
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
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                            User Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="userName"
                                name="userName"
                                type="text"
                                autoComplete="username"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
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

                            >
                                <h3 className='text-sm font-semibold'>Submit</h3>
                            </Mybutton>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a registered User?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Click here
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
};

export default Login;


