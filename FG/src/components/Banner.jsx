import React from 'react'
import {FiSearch} from "react-icons/fi"

const Banner = () => {
  return (
  <div className='max-w-screen-2xl container mx-auto xl:px-0 px-4 md:py-10 py-14'> 
    <h1 className='text-5xl font-bold text-black mb-3 text-left'>Find your<span className='text-green'> job here</span></h1>
     <p className='text-lg text-black mb-8' > Find thousands of jobs in agriculture, tech, business and many more sectors waiting for you. </p>

     <form>
             <div>
              <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-insert md:w-1/2 w-full'>
                 <input type="text" name="title" id="title" placeholder='What role are you looking for ' 
                    className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900  placeholder:text-gray-400 
                  focus-right-0 sm:text-sm sm:leading-6' />
                    
                    <FiSearch  className='absolute mt-2.5 ml-2 text-gray-400 '/>

              </div>
             </div>
     </form>
  </div> 
   
    
);

}

export default Banner