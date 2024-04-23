import React from 'react'
import { useForm } from "react-hook-form"

const CreateJob = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it

    return (
        <div className=' max-w-screen-2x1 container mx-auto xl:px-24 px-24'>

            {/**forms */}
            <div className='bg-[#b3d39a] py-10px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="test" {...register("example")} />

                    <input {...register("exampleRequired", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>F

            </div>
        </div>
    )
}

export default CreateJob