import React, { useEffect, useState } from "react";

import Navbar from "components/Navbar/Navbar";

import DatePicker from 'react-date-picker';

import "./style.css";

const AdminBlogs = () => {
    const [datePublished, setDatePublished] = useState(new Date());

    useEffect(() => {
        console.log("The choosen date is : ", datePublished);
    })

    return (
        <div>
            <Navbar />
            <br /><br /><br /><br />
            <div className="container">
                <h1 className="headings_admin_page">Admin Blogs Page</h1>

                <br />

                <div className="addNewBlogContainer">
                    <h3 className="headings_admin_page">Enter the Blog Title:- <span className="text-danger">*</span> </h3>
                    <input className="inputAdmin" type="text" title="Blog Title" placeholder="Please type the Blog Title here ..." />

                    <hr />

                    <h3 className="headings_admin_page">Blog was written by (Author Name):- <span className="text-danger">*</span></h3>
                    <input className="inputAdmin" type="text" title="Blog Title" placeholder="Please type the Author Name here ..." />

                    <hr />

                    <h3 className="headings_admin_page">Choose a Date when your blog was written:- <span className="text-danger">*</span></h3>
                    <DatePicker onChange={setDatePublished} value={datePublished} />

                </div>
            </div>
        </div>
    )
}
export default AdminBlogs;