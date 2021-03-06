import React from "react";
import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    const { data:blogs, loading:isPending, error, fetchData } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {isPending && <div>Loading..</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>

    );
}

export default Home;