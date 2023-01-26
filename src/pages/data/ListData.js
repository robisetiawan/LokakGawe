import axios from "axios";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/globalcontext";

const ListData = () => {
    const { state, handleFunction } = useContext(GlobalContext);

    let { data, setData, fetchStatus, setFetchStatus } = state;
    let { handleDelete, handleEdit } = handleFunction;

    useEffect(() => {
        if (fetchStatus === true) {
            axios
                .get(" https://dev-example.sanbercloud.com/api/job-vacancy")
                .then((res) => {
                    // console.log(res.data.data);
                    // let results = res.data.data;
                    // setData([...results]);
                    setData([...res.data.data]);
                })
                .catch((err) => {});

            setFetchStatus(false);
        }
    }, [fetchStatus, setFetchStatus]);

    const description = (str) => {
        if (str?.length <= 20) {
            return str;
        }
        return str?.slice(0, 20) + "...";
    };

    const currency = (number) => {
        if (number !== 0) {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumSignificantDigits: 3,
            }).format(number);
        } else {
            return "Free";
        }
    };

    return (
        <>
            <h1 className="font-bold my-5 text-xl">List Data</h1>
            <div className="relative overflow-x-auto shadow-md border rounded-lg border-tertiary">
                <table className="text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-quaternary uppercase bg-secondary ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Logo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Job Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tenure
                            </th>
                            <th scope="col" className="px-6 py-3">
                                City
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Salary
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Company
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qualification
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data !== null &&
                            data.map((res, index) => {
                                return (
                                    <tr key={res.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {index + 1}
                                        </th>

                                        <td className="px-6 py-4">
                                            <img src={res.company_image_url} />
                                        </td>
                                        <td className="px-6 py-4">
                                            {res.job_status === 1 ? (
                                                <span className="bg-green-500 text-quaternary p-1 rounded-lg font-semibold ">Open</span>
                                            ) : (
                                                <span className="bg-red-500 text-quaternary p-1 rounded-lg font-semibold ">Close</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">{res.title}</td>
                                        <td className="px-6 py-4">{res.job_type}</td>
                                        <td className="px-6 py-4">{res.job_tenure}</td>
                                        <td className="px-6 py-4">{res.company_city}</td>
                                        <td className="px-6 py-4">
                                            {currency(res.salary_min)}(min)- {currency(res.salary_max)}(max)
                                        </td>
                                        <td className="px-6 py-4">{res.company_name}</td>
                                        <td className="px-6 py-4">{description(res.job_description)}</td>
                                        <td className="px-6 py-4">{description(res.job_qualification)}</td>
                                        <td className="flex items-center px-6 py-4 space-x-3">
                                            <button onClick={handleEdit} value={res.id} className="bg-emerald-500 text-slate-50 p-2 rounded">
                                                Edit
                                            </button>
                                            <button onClick={handleDelete} value={res.id} className="bg-red-500 text-slate-50 p-2 rounded">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ListData;
