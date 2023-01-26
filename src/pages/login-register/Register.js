import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation";

const Register = () => {
    let navigate = useNavigate();

    const [fetchStatus, setFetchStatus] = useState(true);

    const [input, setInput] = useState({
        name: "",
        image_url: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setInput({ ...input, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let { name, image_url, email, password } = input;

        // console.log(name, image_url, email, password);

        axios.post("https://dev-example.sanbercloud.com/api/register", { name, image_url, email, password }).then((res) => {
            console.log(res);
            let status = res.data.status;
            setFetchStatus(true);
            navigate("/login", { status: { status } });
        });
        // navigate("/login", { status: "berhasil" });

        setInput({
            name: "",
            image_url: "",
            email: "",
            password: "",
        });
    };

    return (
        <>
            <Navigation />
            <section className="flex justify-center items-center w-full h-screen mt-5">
                <form onSubmit={handleSubmit} className="border border-secondary rounded-xl py-5 px-20 text-center space-y-3 mx-4">
                    <h1 className="font-bold text-primary text-xl">Register</h1>
                    <div>
                        <label htmlFor="name" className="text-left block mb-2 text-sm font-semibold text-secondary">
                            Name
                        </label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-secondary">
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <input
                                onChange={handleChange}
                                name={"name"}
                                value={input.name}
                                type="text"
                                id="name"
                                className="bg-quaternary border-quaternary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full py-2 px-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                placeholder="your name"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="image_url" className="text-left block mb-2 text-sm font-semibold text-secondary">
                            Foto
                        </label>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-secondary">
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <input
                                onChange={handleChange}
                                name={"image_url"}
                                value={input.image_url}
                                type="text"
                                id="image_url"
                                className="bg-quaternary border-quaternary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full py-2 px-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                placeholder="https:// ..."
                            />
                        </div>
                    </div>
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
                                className="bg-quaternary border-quaternary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full py-2 px-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                className="bg-quaternary border-quaternary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full py-2 px-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                placeholder="your password"
                                minLength={8}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <button type={"submit"} className="py-2 px-4 border-2 hover:bg-quaternary hover:text-primary text-quaternary bg-primary rounded-lg ease-in-out transition duration-700">
                            Register
                        </button>
                    </div>
                    <div className="text-primary">
                        You have an account ?{" "}
                        <Link to="/login" className="font-bold">
                            Login
                        </Link>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Register;
