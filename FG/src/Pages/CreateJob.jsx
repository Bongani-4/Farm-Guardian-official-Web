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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
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

                        <input type="submit" className='my-5' />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default CreateJob