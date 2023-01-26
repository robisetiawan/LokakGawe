import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalcontext";

const CreateData = () => {
    const { state, handleFunction } = useContext(GlobalContext);

    let { data, setData, input, setInput } = state;

    let { handleInput, handleSubmit } = handleFunction;

    return (
        <>
            <h1 className="font-bold text-xl my-5">Form Data</h1>
            <div className="rounded-lg shadow-lg border-2 border-tertiary p-10">
                <form onSubmit={handleSubmit} className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="title" className="block mb-2 text-sm font-semibold text-primary ">
                            Job Name
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="bg-tertiary border font-medium border-secondary text-primary text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-50"
                            placeholder="job name ..."
                            required
                            onChange={handleInput}
                            value={input.title}
                        />
                    </div>
                    <div>
                        <label htmlFor="company_image_url" className="block mb-2 text-sm font-semibold text-primary ">
                            Company Logo Image URL
                        </label>
                        <input
                            type="text"
                            id="company_image_url"
                            name="company_image_url"
                            className="bg-tertiary border font-medium border-secondary text-primary text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-50"
                            placeholder="https://...."
                            required
                            onChange={handleInput}
                            value={input.company_image_url}
                        />
                    </div>
                    <div>
                        <label htmlFor="company_name" className="block mb-2 text-sm font-semibold text-primary ">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="company_name"
                            name="company_name"
                            className="bg-tertiary border font-medium border-secondary text-primary text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-50"
                            placeholder="company name ..."
                            required
                            onChange={handleInput}
                            value={input.company_name}
                        />
                    </div>
                    <div>
                        <label htmlFor="company_city" className="block mb-2 text-sm font-semibold text-primary ">
                            Company City
                        </label>
                        <input
                            type="text"
                            id="company_city"
                            name="company_city"
                            className="bg-tertiary border font-medium border-secondary text-primary text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-50"
                            placeholder="company city ..."
                            required
                            onChange={handleInput}
                            value={input.company_city}
                        />
                    </div>
                    <div>
                        <label htmlFor="job_type" className="block mb-2 text-sm font-semibold text-primary ">
                            Job Type
                        </label>
                        <input
                            type="text"
                            id="job_type"
                            name="job_type"
                            className="bg-tertiary border font-medium border-secondary text-primary text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-50"
                            placeholder="job type ..."
                            required
                            onChange={handleInput}
                            value={input.job_type}
                        />
                    </div>
                    <div>
                        <label htmlFor="job_tenure" className="block mb-2 text-sm font-semibold text-primary ">
                            Tenure
                        </label>
                        <input
                            type="text"
                            id="job_tenure"
                            name="job_tenure"
                            className="bg-tertiary border font-medium border-secondary text-primary text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-50"
                            placeholder="tenure ..."
                            required
                            onChange={handleInput}
                            value={input.job_tenure}
                        />
                    </div>
                    <div>
                        <label htmlFor="salary_min" className="block mb-2 text-sm font-semibold text-primary ">
                            Salary min
                        </label>
                        <input
                            type="text"
                            id="salary_min"
                            name="salary_min"
                            className="bg-tertiary border font-medium border-secondary text-primary text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-50"
                            placeholder="salary min ..."
                            required
                            onChange={handleInput}
                            value={input.salary_min}
                        />
                    </div>
                    <div>
                        <label htmlFor="salary_max" className="block mb-2 text-sm font-semibold text-primary ">
                            Salary max
                        </label>
                        <input
                            type="text"
                            id="salary_max"
                            name="salary_max"
                            className="bg-tertiary border font-medium border-secondary text-primary text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-50"
                            placeholder="salary max ..."
                            required
                            onChange={handleInput}
                            value={input.salary_max}
                        />
                    </div>
                    <div>
                        <label htmlFor="job_description" className="block mb-2 text-sm font-semibold text-primary ">
                            Description
                        </label>
                        <textarea
                            className="bg-tertiary border font-medium border-secondary text-primary text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-50"
                            id="job_description"
                            name="job_description"
                            rows={4}
                            onChange={handleInput}
                            value={input.job_description}
                            required
                            placeholder="description ..."
                        />
                    </div>
                    <div>
                        <label htmlFor="job_qualification" className="block mb-2 text-sm font-semibold text-primary ">
                            Qualification
                        </label>
                        <textarea
                            className="bg-tertiary border font-medium border-secondary text-primary text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-50"
                            id="job_qualification"
                            name="job_qualification"
                            rows={4}
                            onChange={handleInput}
                            value={input.job_qualification}
                            required
                            placeholder="qualification ..."
                        />
                    </div>
                    <div>
                        <label htmlFor="job_status" className="block mb-2 text-sm font-semibold text-primary ">
                            Status
                        </label>
                        <input
                            type="text"
                            id="job_status"
                            name="job_status"
                            className="bg-tertiary border font-medium border-secondary text-primary text-sm rounded-2xl focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-50"
                            placeholder="status ..."
                            onChange={handleInput}
                            value={input.job_status}
                            max="1"
                            min="0"
                            required
                        />
                    </div>
                    <div className="flex items-end">
                        <button type={"submit"} className="ml-auto text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateData;
