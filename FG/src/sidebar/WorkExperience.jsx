import React from 'react'
import InputField from '../components/InputField'

const WorkExperience = ({ handleChange }) => {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Work experience</h4>
            <div>
                <label className='sidebar-label-container'>
                    <input type='radio' name='test' id='test' value="" onChange={handleChange} />
                    <span className='checkmark'> </span>Select All

                </label>

                <InputField handleChange={handleChange} value="london" title="London" name="test" />
                <InputField handleChange={handleChange} value="seattle" title="Seattle" name="test" />
                <InputField handleChange={handleChange} value="madrid" title="Madrid" name="test" />
                <InputField handleChange={handleChange} value="boston" title="Boston" name="test" />
                <InputField handleChange={handleChange} value="Cape Town" title="Cape Town" name="test" />

            </div>
        </div>
    )
}

export default WorkExperience