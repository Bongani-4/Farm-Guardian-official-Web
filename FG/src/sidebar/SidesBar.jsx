import React from 'react';
import Location from './Location';
import Salary from './Salary';
import JobPostinfData from './JobPostinfData';

const SidesBar = ({ handleChange, handleClick }) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold mb-2'>Filter</h3>
      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick={handleClick} />
      <JobPostinfData handleChange={handleChange} />



    </div>
  );
}

export default SidesBar;
