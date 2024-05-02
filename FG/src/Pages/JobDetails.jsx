import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useEffect([])
    useEffect(() => {
        fetch(`http://localhost:3000/all-jobs/${id}`).then(res => res.json).then(data => setJob(data))

    }, [])

    const handleApply = async () => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
        });
        if (url) {
            Swal.fire(`Entered URL: ${url}`);
        }
    }

    return (
        <div className='max-w-screen-2x1 container mx-auto x1:px-24  px-4'>
            <PageHeader title={"Detailed job page"} path={"single job"} />
            <h2>JobDetails :{id}</h2>
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