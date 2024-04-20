import React from 'react'
import { FaEnvelopeOpenText } from 'react-icons/fa6'

const NewsLetter = () => {
    return (
        <div>
            <div>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaEnvelopeOpenText />
                    Email me for Jobs</h3>
            </div>
        </div>
    )
}

export default NewsLetter