import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useEffect([])
    useEffect(() => {
        fetch(`http://localhost:3000/all-jobs/${id}`).then(res => res.json).then(data => setJob(data))

    }, [])

    const handleApply = () => {

    }

    return (
        <div className='max-w-screen-2x1 container mx-auto x1:px-24  px-4'>JobDetails :{id}
            <h1>
                {job.jobTitle}
            </h1>
            <button className='bg-green px-8 py-2 text-white' onClick={handleApply}>
                Apply <Now></Now>
            </button>
        </div>
    )
}

export default JobDetails