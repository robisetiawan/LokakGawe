import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navigation from "../../components/Navigation";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const [params, setParams] = useState(null);

    // let { status } = useParams();

    const handleChange = (params) => setInput({ ...input, [params.target.name]: params.target.value });

    const handleSubmit = (params) => {
        params.preventDefault();

        let { email, password } = input;

        axios
            .post("https://dev-example.sanbercloud.com/api/login ", { email, password })
            .then((res) => {
                let { data } = res;
                // console.log(data);
                let { token, user } = data;
                // console.log(token);
                Cookies.set("token", token, { expires: 1 }); //expired 1 hari
                Cookies.set("user_data", JSON.stringify(user), { expires: 1 });
                // console.log(data.token);
                navigate("/dashboard");
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <>
            <Navigation />
            {params !== null ? "ada" : console.log("tidak ada")}

            <section className="flex justify-center items-center w-full h-screen">
                <form onSubmit={handleSubmit} className="border border-secondary rounded-xl py-5 px-20 text-center space-y-3 mx-4">
                    <h1 className="font-bold text-primary text-xl">Login</h1>
                    {params !== null && (
                        <div className="flex p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                            <i className="fa-solid fa-circle-check"></i>
                            <span className="sr-only">Info</span>
                            <div className="mx-3 text-sm font-medium">Account created successfully</div>
                            <button
                                type="button"
                                className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                                data-dismiss-target="#alert-3"
                                aria-label="Close"
                            >
                                <span className="sr-only">Close</span>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    )}

                    <div>
                        <label htmlFor="email" className="text-left block mb-2 text-sm font-semibold text-secondary">
                            Email
                        </label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-secondary">
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <input
                                onChange={handleChange}
                                name={"email"}
                                value={input.email}
                                type="email"
                                id="email"
                                className="bg-quaternary border-quaternary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                placeholder="your email"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="text-left block mb-2 text-sm font-semibold text-secondary ">
                            Password
                        </label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-secondary ">
                                <i className="fa-solid fa-lock"></i>
                            </div>
                            <input
                                onChange={handleChange}
                                name={"password"}
                                value={input.password}
                                type="password"
                                id="password"
                                className="bg-quaternary border-quaternary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                placeholder="your password"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <button className="py-2 px-4 border-2 hover:bg-quaternary hover:text-primary text-quaternary bg-primary rounded-lg ease-in-out transition duration-700">Login</button>
                    </div>
                    <div className="text-primary">
                        Don't have an account ?{" "}
                        <Link to="/register" className="font-bold">
                            Register
                        </Link>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Login;
