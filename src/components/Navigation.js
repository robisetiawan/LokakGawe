import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="fixed top-0 right-0 left-0 py-2 bg-white z-50">
            <Navbar className="container mx-auto py-6" fluid={true} rounded={true}>
                <Navbar.Brand href="/">
                    <span className="hidden md:block self-center whitespace-nowrap text-2xl font-bold ">
                        LOKAK .<span className="text-primary hover:bg-primary rounded-md hover:text-quaternary hover:rounded-md p-1 ease-in-out transition duration-700">GAWE </span>
                    </span>
                    <span className="md:hidden self-center whitespace-nowrap text-2xl font-bold ">
                        LO.<span className="text-primary hover:bg-primary rounded-md hover:text-quaternary hover:rounded-md px-2 ease-in-out transition duration-700">G </span>
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {/* <Button>Get started</Button> */}
                    <Link to="/login" className="bg-primary hover:bg-white text-quaternary hover:text-primary py-2 px-4 text-sm font-semibold rounded-md border-2 border-primary ease-in-out transition duration-700">
                        Login
                    </Link>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <li className="mx-auto sm:m-0 my-2 border-b-2 sm:border-none hover:text-primary ">
                        <Link to="/" className="text-dark font-semibold hover:text-primary ">
                            Home
                        </Link>
                    </li>
                    <li className="mx-auto sm:m-0 my-2 border-b-2 sm:border-none hover:text-primary ">
                        <Link to="/job-vacancy" className="text-dark font-semibold hover:text-primary ">
                            Job Vacancy
                        </Link>
                    </li>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;
