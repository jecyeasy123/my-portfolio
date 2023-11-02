import React from 'react';
import { FaAward } from 'react-icons/fa';


const Frontend = () => {
  return (
    <div className='skills_content'>
        <h3 className='skills_title'>Frontend Developer</h3>
    <div className='skills_box'>
        <div className='skills_group'>
            <div className='skills_data'>
                <FaAward className='ico'/>
                <div>
                    <h3 className='skills_name'>HTML</h3>
                    <span className='skills_level'>Basic & Advanced</span>
                </div>
            </div>

            <div className='skills_data'>
                <FaAward className='ico'/>
                <div>
                    <h3 className='skills_name'>CSS</h3>
                    <span className='skills_level'>Basic & Advanced</span>
                </div>
            </div>

            <div className='skills_data'>
                <FaAward className='ico'/>
                <div>
                    <h3 className='skills_name'>Javascript</h3>
                    <span className='skills_level'>Intermidate</span>
                </div>
            </div>

            <div className='skills_data'>
                <FaAward className='ico'/>
                <div>
                    <h3 className='skills_name'>Bootstrap</h3>
                    <span className='skills_level'>Intermidate</span>
                </div>
            </div>

            <div className='skills_data'>
                <FaAward className='ico'/>
                <div>
                    <h3 className='skills_name'>Git</h3>
                    <span className='skills_level'>Intermidate</span>
                </div>
            </div>

            <div className='skills_data'>
                <FaAward className='ico'/>
                <div>
                    <h3 className='skills_name'>React</h3>
                    <span className='skills_level'>Intermidate</span>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Frontend