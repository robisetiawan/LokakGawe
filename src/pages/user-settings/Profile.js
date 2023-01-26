import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        if (Cookies.get("user_data") !== undefined) {
            setUser(JSON.parse(Cookies.get("user_data")));
        }
    }, []);
    return (
        <>
            <h1 className="font-bold text-xl text-center my-5">Profile</h1>
            <div className="flex justify-center p-10">
                <div className="w-full max-w-sm bg-white border-4 border-primary rounded-3xl shadow-lg">
                    <div className="flex flex-col items-center py-10">
                        <img className="w-24 h-24 border-4 border-primary mb-3 rounded-full shadow-lg" src={user.image_url ?? "undifined"} />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name ?? "undifined"}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{user.email ?? "undifined"}</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <Link
                                to="/dashboard/change-password"
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Change Password
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
