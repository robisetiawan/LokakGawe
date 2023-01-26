import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Jobvacancy = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy").then((res) => {
            setData(res.data.data);
        });
    }, []);

    const currency = (number) => {
        if (number !== 0) {
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumSignificantDigits: 3,
            }).format(number);
        }
    };
    const [display, setDisplay] = useState(false);

    const [search, setSearch] = useState("");

    const handleSearch = (event) => setSearch(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        let fetchData = async () => {
            setDisplay(true);
            let { data } = await axios.get("https://dev-example.sanbercloud.com/api/job-vacancy");
            let datajob = data.data;

            let searchData = datajob.filter((res) => {
                return Object.values(res).join(" ").toLowerCase().includes(search.toLowerCase());
            });

            // console.log(searchData);
            setDisplay(false);
            setData([...searchData]);
        };

        fetchData();
        setSearch("");
    };

    const [filter, setFilter] = useState({
        title: "",
        company_name: "",
        company_city: "",
    });

    const handleChangeFilter = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.value });
    };

    const handleFilter = (event) => {
        event.preventDefault();
        console.log(filter.title);

        let fetchData = async () => {
            setDisplay(true);
            let { data } = await axios.get("https://dev-example.sanbercloud.com/api/job-vacancy");
            let datajob = data.data;

            let filterData = datajob.filter((res) => {
                console.log(res.title);
                return res.title === filter.title && res.company_name === filter.company_name && res.company_city === filter.company_city;
            });

            console.log(filterData);
            setDisplay(false);
            setData([...filterData]);
        };

        fetchData();
        setSearch("");
    };

    return (
        <>
            <section className="container mx-auto px-4 mt-7 space-y-10">
                <div className="block items-center justify-between py-24 space-y-8 md:space-y-7">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-3xl">List lowongan</h1>
                    </div>
                    <div className="grid gap-4">
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-secondary">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <form onSubmit={handleSubmit} className="flex items-center md:w-1/2">
                                <label htmlFor="search" className="sr-only">
                                    Search
                                </label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="search"
                                        onChange={handleSearch}
                                        value={search}
                                        className="bg-tertiary border border-secondary text-primary text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full pl-10 p-3 "
                                        placeholder="Search"
                                    />
                                </div>
                                <button type="submit" className="p-3 ml-2 text-sm font-medium text-tertiary bg-primary rounded-2xl border border-primary hover:bg-primary focus:ring-4 focus:outline-none ">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </form>
                        </div>
                        <form onSubmit={handleFilter} className="grid md:flex gap-4">
                            <input
                                onChange={handleChangeFilter}
                                value={filter.title}
                                className="p-3 bg-tertiary border border-secondary rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                                name="title"
                                placeholder="nama pekerjaan"
                            />
                            <input
                                onChange={handleChangeFilter}
                                value={filter.company_name}
                                className="p-3 bg-tertiary border border-secondary rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                                name="company_name"
                                placeholder="perusahaan"
                            />
                            <input
                                onChange={handleChangeFilter}
                                value={filter.company_city}
                                className="p-3 bg-tertiary border border-secondary rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                                name="company_city"
                                placeholder="kota"
                            />
                            <div className="flex ml-auto gap-2">
                                <button type="submit" className="py-3 px-6 text-quaternary bg-secondary font-semibold hover:bg-primary w-fit rounded-xl ease-in-out trasition duration-700">
                                    Filter
                                </button>
                                {/* <button className="py-3 px-6 text-quaternary bg-red-500 font-semibold hover:bg-red-600 w-fit rounded-xl ease-in-out trasition duration-700">Reset</button> */}
                            </div>
                        </form>
                    </div>

                    <div className="flex flex-wrap justify-start gap-4">
                        {data !== null &&
                            data.map((res) => {
                                return (
                                    <div key={res.id} className="bg-white w-full lg:max-w-sm rounded-xl shadow-lg border border-gray p-9 hover:border-secondary hover:bg-tertiary ease-in-out transition duration-700">
                                        <img src={res.company_image_url} className="max-h-20 mb-3" />
                                        <h1 className="text-xl font-bold">{res.title}</h1>
                                        <h2 className="font-semibold">{res.company_name}</h2>
                                        <h2>
                                            {res.job_tenure} - {res.company_city}
                                        </h2>
                                        <p className="mt-4 font-semibold">
                                            {currency(res.salary_min)} - {currency(res.salary_max)}
                                        </p>
                                        <Link to={`/job-vacancy/${res.id}`} className="text-primary ">
                                            Apply now ...
                                        </Link>
                                    </div>
                                );
                            })}
                    </div>
                    {data === null && (
                        <div className="text-center">
                            <div role="status">
                                <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary   " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Jobvacancy;
