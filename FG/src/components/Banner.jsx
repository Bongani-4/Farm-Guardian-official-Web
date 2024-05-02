import React, { useState } from 'react'
import { FiMapPin, FiSearch } from "react-icons/fi"

const Banner = ({ query, handleInputChange }) => {


  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-8 px-4 md:py-3 py-14'>
      <h1 className='text-5xl font-bold text-black mb-5 '>Find your<span className='text-green'> job here</span></h1>
      <p className='text-lg text-black mb-3' > Thousands of jobs in agriculture, tech, business and many more sectors are looking for you. </p>

      <form className='mb-3'>
        <div className='flex justify-start-start md:flex-row flex-col md:gap-0 gap-4'>
          <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-insert md:w-3/4 w-full'>
            <input type="text" name="title" id="title" placeholder='What are you looking for?'
              className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900  placeholder:text-gray-400 
                  focus-right-0 sm:text-sm sm:leading-6'
              onChange={handleInputChange}
              value={query}
            />


            <FiSearch className='absolute mt-2.5 ml-2 text-green ' />

          </div>


          <button type='submit' className='bg-green py-2 px-8 text-white md:rounded-s-none rounded'>Search</button>
        </div>
      </form>
    </div>


  );

}

export default Banner