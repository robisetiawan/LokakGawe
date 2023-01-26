import logo from "./logo.svg";
import "./assets/css/App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Jobvacancy from "./pages/job-vacancy/Jobvacancy";
import Detail from "./pages/job-vacancy/Detail";
import Login from "./pages/login-register/Login";
import LayoutLanding from "./layout/LayoutLanding";
import LayoutDashboard from "./layout/LayoutDashboard";
import Cookies from "js-cookie";
import Dashboard from "./pages/dashboard/Dashboard";
import ListData from "./pages/data/ListData";
import { GlobalProvider } from "./context/globalcontext";
import CreateData from "./pages/data/CreateData";
import Register from "./pages/login-register/Register";
import Profile from "./pages/user-settings/Profile";
import ChangePassword from "./pages/user-settings/ChangePassword";

function App() {
    const Auth = (props) => {
        if (Cookies.get("token") === undefined) {
            return props.children;
        } else if (Cookies.get("token") !== undefined) {
            return <Navigate to={"/dashboard"} />;
        }
    };
    const Guest = (props) => {
        if (Cookies.get("token") === undefined) {
            return <Navigate to={"/login"} />;
        } else if (Cookies.get("token") !== undefined) {
            return props.children;
        }
    };

    return (
        <BrowserRouter>
            <div className="font-poppins text-dark">
                <GlobalProvider>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Auth>
                                    <LayoutLanding>
                                        <Home />
                                    </LayoutLanding>
                                </Auth>
                            }
                        />
                        <Route
                            path="/job-vacancy"
                            element={
                                <Auth>
                                    <LayoutLanding>
                                        <Jobvacancy />
                                    </LayoutLanding>
                                </Auth>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <Auth>
                                    <Login />
                                </Auth>
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                <Auth>
                                    <Register />
                                </Auth>
                            }
                        />
                        <Route
                            path="/job-vacancy/:id"
                            element={
                                <Auth>
                                    <LayoutLanding>
                                        <Detail />
                                    </LayoutLanding>
                                </Auth>
                            }
                        />

                        {/* Routes Admin */}
                        <Route
                            path="/dashboard"
                            element={
                                <Guest>
                                    <LayoutDashboard>
                                        <Dashboard />
                                    </LayoutDashboard>
                                </Guest>
                            }
                        />
                        <Route
                            path="/dashboard/list-job-vacancy"
                            element={
                                <Guest>
                                    <LayoutDashboard>
                                        <ListData />
                                    </LayoutDashboard>
                                </Guest>
                            }
                        />
                        <Route
                            path="/dashboard/list-job-vacancy/form"
                            element={
                                <Guest>
                                    <LayoutDashboard>
                                        <CreateData />
                                    </LayoutDashboard>
                                </Guest>
                            }
                        />
                        <Route
                            path="/dashboard/list-job-vacancy/form/:id"
                            element={
                                <Guest>
                                    <LayoutDashboard>
                                        <CreateData />
                                    </LayoutDashboard>
                                </Guest>
                            }
                        />
                        <Route
                            path="/dashboard/profile"
                            element={
                                <Guest>
                                    <LayoutDashboard>
                                        <Profile />
                                    </LayoutDashboard>
                                </Guest>
                            }
                        />
                        <Route
                            path="/dashboard/change-password"
                            element={
                                <Guest>
                                    <LayoutDashboard>
                                        <ChangePassword />
                                    </LayoutDashboard>
                                </Guest>
                            }
                        />
                    </Routes>
                </GlobalProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;
