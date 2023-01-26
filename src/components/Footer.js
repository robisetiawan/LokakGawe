import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="grid md:flex gap-4 justify-between bg-primary px-4 md:px-8 py-8 text-quaternary">
                    <div className="space-y-4 md:w-1/3 md:p-6">
                        <h1 className="text-2xl font-bold text-secondary">
                            LOKAK.<span className="text-quaternary">GAWE</span>
                        </h1>
                        <p className="space-y-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
                    </div>
                    <div className="w-1/3 md:py-6 md:pl-24">
                        <h2 className="text-lg mb-1 font-semibold">Kategori</h2>
                        <ul className="space-y-1">
                            <li className="hover:text-secondary">Full time</li>
                            <li className="hover:text-secondary">Part time</li>
                            <li className="hover:text-secondary">Magang</li>
                            <li className="hover:text-secondary">Kontrak</li>
                        </ul>
                    </div>
                    <div className="w-1/3 md:py-6 md:pl-10">
                        <h2 className="text-lg mb-1 font-semibold">Sosmed</h2>
                        <ul className="space-y-1">
                            <li className="hover:text-secondary">
                                <i className="fa-brands fa-facebook"></i> Facebook
                            </li>
                            <li className="hover:text-secondary">
                                <i className="fa-brands fa-instagram"></i> Instagram
                            </li>
                            <li className="hover:text-secondary">
                                <i className="fa-brands fa-linkedin"></i> LinkedIn
                            </li>
                            <li className="hover:text-secondary">
                                <i className="fa-brands fa-twitter"></i> Twitter
                            </li>
                            <li className="hover:text-secondary">
                                <i className="fa-brands fa-youtube"></i> YouTube
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-5 bg-[#0B343C] text-quaternary text-center">©️ 2023 Lokak.Gawe by Robisetiawan</div>
            </footer>
        </>
    );
};

export default Footer;
