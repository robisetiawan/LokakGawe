import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Dashboard = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        if (Cookies.get("user_data") !== undefined) {
            setUser(JSON.parse(Cookies.get("user_data")));
        }
    }, []);

    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get(" https://dev-example.sanbercloud.com/api/job-vacancy")
            .then((res) => {
                // let results = res.data.data;
                // setData([...results]);
                setData([...res.data.data]);
            })
            .catch((err) => {});
    }, []);

    return (
        <>
            <section className="border border-gray rounded-3xl shadow-lg m-4">
                <div className="block text-center justify-center space-y-7 py-32">
                    <h1 className="text-3xl font-bold">
                        Selamat datang <i className="fa-regular fa-hand"></i>, <span className="text-primary">{user.name ?? undefined}</span>
                    </h1>
                    <div className="border border-gray w-1/3 mx-auto rounded-3xl gap-4 shadow-lg h-60 flex flex-col justify-center items-center">
                        <h2 className="text-xl font-semibold">Jumlah Semua Data</h2>
                        <div className="font-bold text-primary text-7xl">{data?.length}</div>
                        <Link to="/dashboard/list-job-vacancy/form" className="bg-primary font-semibold text-quaternary p-3 rounded-lg hover:bg-secondary ease-in-out transition duration-700">
                            Add data
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
