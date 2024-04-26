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

    }, []);

    const handleSearch = () => {
        const filter = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        setJobs(filter)
        setIsLoading(false)
    }

    return (
        <div>
            <Navbar />


            <div className='max-w-screen-2x1  container mx-auto xl:px-24 px-4'>
                <div className='my-jobs-container'>
                    <h1 className='text-center'>
                        All My Jobs
                    </h1>
                    <div className='search-box p-2 text-center '>
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            type='text' name='search' id='search' className='py-2 pl-3 border focus:outlune-none lg:w-6/12 mb-4 w-full ' />
                        <button className='bg-green text-white font-semibold px-8 py-2 rounded-sm mb-4  ' onClick={handleSearch}> Search </button>
                    </div>
                </div>

                {/**table  */}
                <section className="py-1 bg-blueGray-50">
                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                            <div className="rounded-t mb-0 px-4 py-3 border-0">
                                <div className="flex flex-wrap items-center">
                                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                        <h3 className="font-semibold text-base text-blueGray-700">All Jobs</h3>
                                    </div>
                                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                        <button className="bg-[#06be06] text-white active:bg-green text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Post a New Job</button>
                                    </div>
                                </div>
                            </div>

                            <div className="block w-full overflow-x-auto">
                                <table className="items-center bg-transparent w-full border-collapse ">
                                    <thead>
                                        <tr>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Page name
                                            </th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Visitors
                                            </th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Unique users
                                            </th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Bounce rate
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                /argon/
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                4,569
                                            </td>
                                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                340
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                                46,53%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                /argon/index.html
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                3,985
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                319
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                                                46,53%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                /argon/charts.html
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                3,513
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                294
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                                                36,49%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                /argon/tables.html
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                2,050
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                147
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                                50,87%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                /argon/profile.html
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                1,795
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                190
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                                                46,53%
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    <footer className="relative pt-8 pb-6 mt-16">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full md:w-6/12 px-4 mx-auto text-center">

                                </div>
                            </div>
                        </div>
                    </footer>
                </section>


            </div>
        </div>
    )
}

export default MyJobs