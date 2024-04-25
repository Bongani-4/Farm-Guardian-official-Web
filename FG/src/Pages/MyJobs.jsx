import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const MyJobs = () => {
    const email = "Bong.FG@gmail.com";
    const [jobs, setJobs] = useState([])
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        fetch

    }, [])
    return (
        <div>

            <Navbar />
        </div>
    )
}

export default MyJobs