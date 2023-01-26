import React, { useState } from "react";

const ChangePassword = () => {
    const [input, setInput] = useState({
        password: "",
        newpass: "",
        confirmpass: "",
    });

    const handleInput = (params) => setInput({ ...input, [params.target.name]: params.target.value });

    const handleSubmit = (params) => {};

    return (
        <>
            <h1 className="font-bold text-xl text-center my-5">Change Password</h1>
            <div className="flex justify-center p-10">
                <div className="w-full max-w-lg bg-white border-4 border-primary rounded-3xl shadow-lg">
                    <form onChange={handleSubmit} className="flex flex-col items-center py-10 gap-6 mb-6 ">
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-semibold text-primary ">
                                Current Password
                            </label>
                            <input
                                type="text"
                                id="password"
                                name="password"
                                className="bg-tertiary border font-medium border-secondary text-primary text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-50"
                                placeholder="job name ..."
                                required
                                onChange={handleInput}
                                value={input.password}
                            />
                        </div>
                        <div>
                            <label htmlFor="newpass" className="block mb-2 text-sm font-semibold text-primary ">
                                New Password
                            </label>
                            <input
                                type="text"
                                id="newpass"
                                name="newpass"
                                className="bg-tertiary border font-medium border-secondary text-primary text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-50"
                                placeholder="job name ..."
                                required
                                onChange={handleInput}
                                value={input.newpass}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmpass" className="block mb-2 text-sm font-semibold text-primary ">
                                Confirm Password
                            </label>
                            <input
                                type="text"
                                id="confirmpass"
                                name="confirmpass"
                                className="bg-tertiary border font-medium border-secondary text-primary text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-50"
                                placeholder="job name ..."
                                required
                                onChange={handleInput}
                                value={input.confirmpass}
                            />
                        </div>
                        <div className="flex">
                            <button type={"submit"} className="ml-auto text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-2xl text-sm w-full sm:w-auto px-10 py-2.5 text-center">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ChangePassword;
