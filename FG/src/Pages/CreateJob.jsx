import React from 'react'
import { useForm } from "react-hook-form"
import Navbar from '../components/Navbar'

const CreateJob = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }



    return (
        <div>
            <Navbar />
            <div className=' max-w-screen-2x1 mt-5 container mx-auto xl:px-24 px-24'>

                {/**forms */}
                <div className='bg-[#b3d39a] py-10 px-4 lg:px-16'>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

                        {/**1st row */}
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>
                                    Job Title
                                </label>
                                <input type='text' defaultValue={"Animal caretaker"}
                                    {...register("jobTitle")} className='create-job-input' />
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block mb-2 text-lg'>
                                    Company Name
                                </label>
                                <input type='text' placeholder='Ex: Farm Guardian'
                                    {...register("companyName")} className='create-job-input' />
                            </div>

                        </div>

                        {/**2nd row */}
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block  mb-2 text-lg'>
                                    Minimum Salary
                                </label>
                                <input type='text' placeholder="$20k"
                                    {...register("minPrice")} className='create-job-input' />
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block  mb-2 text-lg'>
                                    Maximum Salary
                                </label>
                                <input type='text' placeholder="$120k"
                                    {...register("maxPrice")} className='create-job-input' />
                            </div>

                        </div>

                        {/**3rd row */}
                        <div className='create-job-flex'>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block  mb-2 text-lg'>
                                    Salary Type</label>

                                <select {...register("Title", { required: true })}>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Dr">Dr</option>
                                </select>
                            </div>
                            <div className='lg:w-1/2 w-full'>
                                <label className='block  mb-2 text-lg'>
                                    Job Location    </label>
                                <input type='text' placeholder="$120k"
                                    {...register("jobLocation")} className='create-job-input' />
                            </div>

                        </div>

                        <input type="submit" className='my-5' />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default CreateJob