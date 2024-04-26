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
        <div>
            <Navbar />

            <div className='max-w-screen-2x1  container mx-auto xl:px-24 px-4'>
                <div className='my-jobs-container'>
                    <h1 className='text-center'>
                        All My Jobs
                    </h1>
                    <div>
                        <input type='text' name='search' id='search' className='py-2 pl-3 border focus:outlune-none lg:w-6/12 mb-4 w-full ' />
                        <button className='bg-green text-white font-semibold px-8 py-2 rounded-sm mb-4  '> Search </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyJobs