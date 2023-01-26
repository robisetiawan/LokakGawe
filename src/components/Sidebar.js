import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        if (Cookies.get("user_data") !== undefined) {
            setUser(JSON.parse(Cookies.get("user_data")));
        }
    }, []);

    return (
        <>
            <div className="relative hidden h-screen shadow-lg lg:block w-80">
                <div className="h-full bg-white dark:bg-gray-700">
                    <Link to="/dashboard" className="flex items-center justify-center pt-6">
                        <span className="hidden md:block self-center whitespace-nowrap text-2xl font-bold ">
                            LOKAK .<span className="text-primary hover:bg-primary rounded-md hover:text-quaternary hover:rounded-md p-1 ease-in-out transition duration-700">GAWE </span>
                        </span>
                        <span className="md:hidden self-center whitespace-nowrap text-2xl font-bold ">
                            LO.<span className="text-primary hover:bg-primary rounded-md hover:text-quaternary hover:rounded-md px-2 ease-in-out transition duration-700">G </span>
                        </span>
                    </Link>
                    <div className="grid items-center justify-center pt-6">
                        <img className="w-16 h-16 mb-3 border-2 border-primary rounded-full shadow-lg" src={user.image_url ?? "undifined"} />
                        <p className="text-primary font-semibold text-center">{user.name ?? "undifined"}</p>
                    </div>

                    <hr className="w-2/3 mx-auto mt-6 border-gray" />

                    <nav className="mt-6">
                        <div className="p-2 pl-6 font-semibold">General</div>
                        <div>
                            <Link to="/dashboard" className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition border-l-4 border-primary hover:bg-tertiary ease-in-out duration-700 ">
                                <span className="text-left">
                                    <svg width={20} height={20} fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"></path>
                                    </svg>
                                </span>
                                <span className="mx-2 text-sm font-normal">Dashboard</span>
                            </Link>
                        </div>
                        <div className="p-2 pl-6 font-semibold">Manage Data</div>
                        <div>
                            <Link to="/dashboard/list-job-vacancy" className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition border-l-4 border-primary hover:bg-tertiary ease-in-out duration-700 ">
                                <span className="text-left">
                                    <i className="fa-solid fa-table"></i>
                                </span>
                                <span className="mx-2 text-sm font-normal">List Data</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/dashboard/list-job-vacancy/form" className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition border-l-4 border-primary hover:bg-tertiary ease-in-out duration-700 ">
                                <span className="text-left">
                                    <i className="fa-solid fa-circle-plus"></i>
                                </span>
                                <span className="mx-2 text-sm font-normal">Create Data</span>
                            </Link>
                        </div>
                        <div className="p-2 pl-6 font-semibold">Setting User</div>
                        <div>
                            <Link to="/dashboard/profile" className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition border-l-4 border-primary hover:bg-tertiary ease-in-out duration-700 ">
                                <span className="text-left">
                                    <i className="fa-solid fa-user"></i>
                                </span>
                                <span className="mx-2 text-sm font-normal">Profile</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/dashboard/change-password" className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition border-l-4 border-primary hover:bg-tertiary ease-in-out duration-700 ">
                                <span className="text-left">
                                    <i className="fa-solid fa-unlock"></i>
                                </span>
                                <span className="mx-2 text-sm font-normal">Change Password</span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
