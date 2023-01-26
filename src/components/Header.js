import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("token");
        Cookies.remove("user_data");
        navigate("/");
    };

    return (
        <>
            <header className="z-40 flex items-center justify-end w-full h-16 px-5 text-sm bg-primary ">
                <button onClick={handleLogout} className="flex items-center gap-1 p-2 rounded-lg border-2 border-quaternary hover:bg-quaternary hover:text-primary text-quaternary ease-in-out transition duration-700 ">
                    <i className="fa-solid fa-right-from-bracket"> </i> Logout
                </button>
            </header>
        </>
    );
};

export default Header;
