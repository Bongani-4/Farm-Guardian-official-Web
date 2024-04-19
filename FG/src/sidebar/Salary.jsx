import React from 'react'
import Button from '../components/Button'
import InputField from '../components/InputField'

const Salary = ({ handleChange, handleClick }) => {
    return (
        <div >

            <h4 className=' text-lg font-medium mb-2'> Salary</h4>

            <div  >
                <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
                <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
            </div>
            <div className="mt-5">
                <label className='sidebar-label-container'>
                    <input type='radio' name='test' id='test' value="" onChange={handleChange} />
                    <span className='checkmark'> </span>Select All

                </label>


                <InputField handleChange={handleChange} value={30} title="< 30 000" name="test" />
                <InputField handleChange={handleChange} value={50} title="< 50 000" name="test" />
                <InputField handleChange={handleChange} value={80} title="< 80 000" name="test" />
                <InputField handleChange={handleChange} value={100} title="< 100 000" name="test" />
                <InputField handleChange={handleChange} value={150} title="< 150 000" name="test" />



            </div>
        </div>
    )
}

export default Salary