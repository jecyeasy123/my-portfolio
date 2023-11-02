import React from 'react';
import {FaAward} from 'react-icons/fa';

const Backend = () => {
  return (
    <div className='skills_content'>
    <h3 className='skills_title'>Backend Developer</h3>
<div className='skills_box'>
    <div className='skills_group'>
        <div className='skills_data'>
            <FaAward className='ico'/>
            <div>
                <h3 className='skills_name'>PHP</h3>
                <span className='skills_level'>Intermidate</span>
            </div>
        </div>

        <div className='skills_data'>
            <FaAward className='ico'/>
            <div>
                <h3 className='skills_name'>Node JS</h3>
                <span className='skills_level'>Basic</span>
            </div>
        </div>

        <div className='skills_data'>
            <FaAward className='ico'/>
            <div>
                <h3 className='skills_name'>Python</h3>
                <span className='skills_level'>Intermidate</span>
            </div>
        </div>

        <div className='skills_data'>
            <FaAward className='ico'/>
            <div>
                <h3 className='skills_name'>MYSQL</h3>
                <span className='skills_level'>Intermidate</span>
            </div>
        </div>

        <div className='skills_data'>
            <FaAward className='ico'/>
            <div>
                <h3 className='skills_name'>Firebase</h3>
                <span className='skills_level'>Intermidate</span>
            </div>
        </div>

        <div className='skills_data'>
            <FaAward className='ico'/>
            <div>
                <h3 className='skills_name'>SQL</h3>
                <span className='skills_level'>Intermidate</span>
            </div>
        </div>
    </div>

</div>
</div>
  )
}

export default Backend