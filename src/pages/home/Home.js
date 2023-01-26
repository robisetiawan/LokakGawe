import React from "react";
import ListVacancy from "../../components/ListVacancy";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="container mx-auto px-4 mt-7 space-y-10">
                <div className="flex flex-wrap md:flex-nowrap items-center py-16 gap-6">
                    <div className="w-full hover:skew-y-2 ease-in-out transition duration-700">
                        <img src={require("../../assets/img/herosection.png")} />
                    </div>
                    <div className="space-y-3 w-full">
                        <h1 className="text-3xl font-bold">Find your dream job</h1>
                        <p>Temukan pekerjaan impian anda dan kembangkan karir anda</p>
                        <div>
                            <Link to="/job-vacancy" className=" mt-9 border-2 border-primary hover:bg-primary text-primary hover:text-quaternary p-2 rounded-md ease-in-out transition duration-700">
                                find jobs <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex md:block md:text-center flex-wrap md:flex-nowrap items-center justify-center py-16 gap-6">
                    <h1 className="font-bold text-2xl md:mb-10">Tips Karir</h1>
                    <div className="text-center md:w-1/3 md:mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    <span className="block text-semibold text-primary">Mr.One</span>
                </div>
                <div className="flex md:block flex-wrap md:flex-nowrap items-center justify-center py-16 gap-6 md:space-y-7 md:w-1/2 md:mx-auto">
                    <h1 className="font-bold text-2xl text-center">Berkarir diperusahaan impian anda</h1>
                    <div className="flex">
                        <div className="w-1/3 ">
                            <img src={require("../../assets/img/link aja.png")} className="grayscale hover:grayscale-0 w-1/2 mx-auto pt-6 ease-in-out transition duration-700" />
                        </div>
                        <div className="w-1/3">
                            <img src={require("../../assets/img/Gojek.png")} className="grayscale hover:grayscale-0 w-2/3 mx-auto ease-in-out transition duration-700" />
                        </div>
                        <div className="w-1/3">
                            <img src={require("../../assets/img/blibli.png")} className="grayscale hover:grayscale-0 w-4/5 pt-10 mx-auto ease-in-out transition duration-700" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/3">
                            <img src={require("../../assets/img/tokped.png")} className="grayscale hover:grayscale-0 ease-in-out transition duration-700" />
                        </div>
                        <div className="w-1/3">
                            <img src={require("../../assets/img/bukalapak.png")} className="grayscale hover:grayscale-0 my-4 w-4/5 mx-auto ease-in-out transition duration-700" />
                            <img src={require("../../assets/img/traveloka.png")} className="grayscale hover:grayscale-0 ease-in-out transition duration-700" />
                        </div>
                        <div className="w-1/3">
                            <img src={require("../../assets/img/ruang guru.png")} className="grayscale hover:grayscale-0 w-2/3 ml-auto ease-in-out transition duration-700" />
                        </div>
                    </div>
                </div>
                <ListVacancy />
            </section>
        </>
    );
};

export default Home;
