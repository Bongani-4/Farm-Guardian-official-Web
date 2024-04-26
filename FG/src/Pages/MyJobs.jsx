import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const MyJobs = () => {
    const email = "Bong.FG@gmail.com";
    const [jobs, setJobs] = useState([])
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:3000/MyJobs/Bong.FG@gmail.com`)
            .then(res => res.json())
            .then(data => { setJobs(data) })

    }, [])
    return (
        <div className='max-w-screen-2x1 '>

            <Navbar />
        </div>
    )
}

export default MyJobs