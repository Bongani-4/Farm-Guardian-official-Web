import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useEffect([])
    useEffect(() => {
        fetch(`http://localhost:3000/all-jobs/${id}`).then(res => res.json).then(data => setJob(data))

    }, [])

    return (
        <div>JobDetails :{id}
            <h1>

            </h1>
        </div>
    )
}

export default JobDetails