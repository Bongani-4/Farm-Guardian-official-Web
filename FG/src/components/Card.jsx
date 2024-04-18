import React from 'react'

const Card = ({data}) => {

    const {companyName,companyLogo,minPrice,maxPrice,salaryType,jobLocation,employmentType,postingDate,description
    } = data;
  return (
    
        <section className='card'>
            <Link to ={"/"} className ="flex gap-4 flex-col sm:flex-row items-start">
                

            </Link>
             
        </section>
     
  )
}

export default Card