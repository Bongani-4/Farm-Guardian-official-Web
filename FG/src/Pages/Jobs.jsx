import React from 'react'

const Jobs = ({ result }) => {
  return (
    <div> <h3 className=" text-lg font-bold mb-2">{result.length} Jobs  found</h3>
      {result}</div>
  )
}

export default Jobs