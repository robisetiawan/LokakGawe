import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const LayoutDashboard = (props) => {
    return (
        <>
            <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div className="flex items-start justify-between">
                    <Sidebar />
                    <div className="flex flex-col w-4/5 md:space-y-4">
                        <Header />
                        <div className="h-screen px-4 pb-24 overflow-auto md:px-6">{props.children}</div>
                    </div>
                </div>
            </main>
            <footer className="p-4 bg-white border-t border-gray md:flex md:items-center md:justify-end md:p-6 ">
                <span className="text-sm text-gray-500 sm:text-center ">
                    © 2023{" "}
                    <a href="/dashboard" className="hover:underline font-semibold">
                        LOKAK.<span className="text-primary">GAWE</span>
                    </a>
                    . All Rights Reserved.
                </span>
            </footer>
        </>
    );
};

export default LayoutDashboard;
