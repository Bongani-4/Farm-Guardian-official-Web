import React from 'react'
import InputField from '../components/InputField'

const JobPostinfData = ({ handleChange }) => {
    const now = new Date();


    const twntyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000)
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000)
    const ThertyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000)

    //convert date to string
    const twntyFourHoursAgoDate = twntyFourHoursAgo.toISOString().slice(0, 10)
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
    const ThertyDaysAgoDate = ThertyDaysAgo.toISOString().slice(0, 10)




    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Job Posted</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type='radio' name='test' id='test' value="" onChange={handleChange} />
                    <span className='checkmark'> </span>Any Time

                </label>

                <InputField handleChange={handleChange} value={twntyFourHoursAgo} title="24 Hours ago" name="test" />
                <InputField handleChange={handleChange} value={sevenDaysAgo} title="7 Days ago" name="test" />
                <InputField handleChange={handleChange} value={ThertyDaysAgo} title="30 Days ago" name="test" />

            </div>
        </div>
    )
}

export default JobPostinfData