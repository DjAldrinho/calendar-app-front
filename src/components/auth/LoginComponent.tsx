import React from "react";
import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";

function LoginComponent() {

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const {email, password}: any = formValues;

    return (
        <div className="flex items-center justify-center mx-auto h-screen">
            <div className="w-2/4 xl:max-w-screen-sm bg-white rounded-b-lg">
                <div className="py-12 bg-blue-500 shadow-md flex justify-center lg:justify-start lg:px-12">
                    <div className="cursor-pointer flex items-center">
                        <div className="text-2xl text-white  tracking-wide font-semibold">Calendar APP</div>
                    </div>
                </div>
                <div className="mt-10 px-8">
                    <h2 className="text-center text-4xl text-blue-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">Log in</h2>
                    <div className="py-2">
                        <form>
                            <div>
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                                <input autoComplete="off"
                                       className="w-full text-lg py-2 placeholder-blue-200
                                    border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                       type="email" placeholder="mike@gmail.com" value={email} name="email"
                                       onChange={handleInputChange}/>
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>
                                    <div>
                                        <div className="text-xs font-display font-semibold text-red-600 hover:text-red-800
                                        cursor-pointer">
                                            Forgot Password?
                                        </div>
                                    </div>
                                </div>
                                <input
                                    className="w-full text-lg py-2 placeholder-blue-200
                                    border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                    type="password" placeholder="Enter your password" value={password}
                                    name="password"
                                    onChange={handleInputChange}/>
                            </div>
                            <div className="mt-10">
                                <button className="bg-blue-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600
                                shadow-lg" type="submit">
                                    Log In
                                </button>
                                <button className="bg-red-800 text-gray-100 p-4 w-full rounded-full tracking-wide mt-3
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-red-900
                                shadow-lg" type="button">
                                    Sign in with Google
                                </button>
                            </div>
                        </form>
                        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                            Don't have an account? <Link className="cursor-pointer text-red-600 hover:text-red-800"
                                                         to="/auth/register">
                            Sign up
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;
