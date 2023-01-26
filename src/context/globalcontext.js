import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    let navigate = useNavigate();

    const [data, setData] = useState(null);

    const [input, setInput] = useState({
        title: "",
        company_image_url: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure: "",
        job_status: 0,
        company_name: "",
        company_city: "",
        salary_min: 0,
        salary_max: 0,
    });

    const [fetchStatus, setFetchStatus] = useState(true);

    const [currentId, setCurrentId] = useState(-1);

    // handleFunction
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setInput({ ...input, [name]: value });
    };

    const handleEdit = (event) => {
        let idData = parseInt(event.target.value);

        setCurrentId(idData);
        navigate(`/dashboard/list-job-vacancy/form/${idData}`);
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`).then((res) => {
            let data = res.data;
            setInput({
                title: data.title,
                company_image_url: data.company_image_url,
                job_description: data.job_description,
                job_qualification: data.job_qualification,
                job_type: data.job_type,
                job_tenure: data.job_tenure,
                job_status: data.job_status,
                company_name: data.company_name,
                company_city: data.company_city,
                salary_min: data.salary_min,
                salary_max: data.salary_max,
            });
        });
    };

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value);

        console.log(idData);

        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, { headers: { Authorization: "Bearer " + Cookies.get("token") } }).then((res) => {
            setFetchStatus(true);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let { title, company_image_url, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_city, salary_min, salary_max } = input;

        if (currentId === -1) {
            axios
                .post(
                    `https://dev-example.sanbercloud.com/api/job-vacancy`,
                    { title, company_image_url, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_city, salary_min, salary_max },
                    { headers: { Authorization: "Bearer " + Cookies.get("token") } }
                )
                .then((has) => {
                    console.log(has);
                    setFetchStatus(true);
                    navigate("/dashboard/list-job-vacancy");
                });
        } else {
            axios
                .put(
                    `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
                    { title, company_image_url, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_city, salary_min, salary_max },
                    { headers: { Authorization: "Bearer " + Cookies.get("token") } }
                )
                .then((has) => {
                    setFetchStatus(true);
                    navigate("/dashboard/list-job-vacancy");
                });
        }

        setCurrentId(-1);

        setInput({
            title: "",
            company_image_url: "",
            job_description: "",
            job_qualification: "",
            job_type: "",
            job_tenure: "",
            job_status: 0,
            company_name: "",
            company_city: "",
            salary_min: 0,
            salary_max: 0,
        });
    };

    let state = {
        data,
        setData,
        input,
        setInput,
        fetchStatus,
        setFetchStatus,
    };

    let handleFunction = {
        handleDelete,
        handleInput,
        handleEdit,
        handleSubmit,
    };

    return (
        <GlobalContext.Provider
            value={{
                state,
                handleFunction,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
