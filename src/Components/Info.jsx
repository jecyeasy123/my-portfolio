import React from 'react'
import { FaAward,FaBriefcase,FaHeadset } from 'react-icons/fa'

const Info = () => {
  return (
    <div className='about_info'>
        <div className='about_box1'>
            <FaAward className='about_icon3'/>
            <h3 className='about_title'>Experience</h3>
            <span className='about_subtitle'>6 months Working</span>
        </div>

        <div className='about_box2'>
            <FaBriefcase className='about_icon2'/>
            <h3 className='about_title'>Completed</h3>
            <span className='about_subtitle'>10+ Projects</span>
        </div>

        <div className='about_box3'>
            <FaHeadset className='about_icon1'/>
            <h3 className='about_title'>Support</h3>
            <span className='about_subtitle'>Online 24/7</span>
        </div>
    </div>
  )
}

export default Info