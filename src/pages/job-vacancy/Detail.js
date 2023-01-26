import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const { id } = useParams();
    console.log(id);

    const [data, setData] = useState(null);

    useEffect(() => {
        if (id !== undefined) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`).then((res) => {
                setData(res.data);
                // console.log(res.data);
            });
        }
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

    // console.log(data.title);
    if (data === null) {
        return (
            <section className="container grid md:flex md:gap-10 mx-auto px- mb-20 mt-28 space-y-10">
                <div class="mx-auto">
                    <div role="status">
                        <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </section>
        );
    }
    return (
        <>
            <section className="container grid md:flex md:gap-10 mx-auto px-4 mb-20 mt-28 space-y-10">
                <div className="grid gap-5 md:w-2/3">
                    <div className="space-y-1">
                        <h1 className="font-bold text-3xl">{data.title}</h1>
                        <h2 className="text-primary">{data.company_name}</h2>
                        <h3>{data.company_city}</h3>
                        <h4 className="font-semibold">
                            {currency(data.salary_min)} - {currency(data.salary_max)}
                        </h4>
                    </div>
                    <div className="space-y-1">
                        <h1 className="font-semibold text-xl">Deskripsi Pekerjaan</h1>
                        <p className="md:text-sm">{data.job_description}</p>
                    </div>
                    <div className="space-y-1">
                        <h1 className="font-semibold text-xl">Kualifikasi</h1>
                        <p className="md:text-sm">{data.job_qualification}</p>
                    </div>
                    <div>
                        <button className="p-3 bg-secondary hover:bg-primary rounded-lg text-quaternary ease-in-out transition duration-700">Apply now</button>
                    </div>
                </div>
                <div className="space-y-5 md:w-1/3">
                    <div className="text-center border rounded-xl p-6">
                        <h1 className="font-bold text-primary text-xl">Open</h1>
                        <img src={data.company_image_url} className="max-h-20 mx-auto my-7" />
                        <h2 className="text-primary">{data.company_name}</h2>
                        <h3>{data.company_city}</h3>
                        <button className="p-3 mt-7 bg-secondary hover:bg-primary rounded-lg text-quaternary ease-in-out transition duration-700">Detail perusahaan</button>
                    </div>
                    <div className="text-center border rounded-xl p-6 space-y-9">
                        <h1 className="font-bold text-primary text-xl">Share</h1>
                        <div className="flex space-x-5 justify-center pb-5 text-primary">
                            <i className="fa-brands fa-facebook fa-xl hover:text-blue-500 cursor-pointer ease-in-out transition duration-700"></i>
                            <i className="fa-brands fa-instagram fa-xl hover:text-pink-600 cursor-pointer ease-in-out transition duration-700"></i>
                            <i className="fa-brands fa-twitter fa-xl hover:text-sky-400 cursor-pointer ease-in-out transition duration-700"></i>
                            <i className="fa-solid fa-share fa-xl hover:text-yellow-400 cursor-pointer ease-in-out transition duration-700"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Detail;
