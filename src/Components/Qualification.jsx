import React from 'react';
import { useState } from 'react';
import'../styles/qualification.css';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Qualification = () => {
    const[toggleState, setToggleState]=useState(1);
    const toggleTab = (index) => {
        setToggleState (index);
    }

  return (
   <section className='qualification section'>
     <h2 className='section_title'>Qualification</h2>
    <span className='section_subtitle'>My personal journey</span>

    <div className='qualification_container'>
        <div className='qualification_tabs'>
            <div className={toggleState === 1 ?'qualification_button qualification_active button--flex':'qualification_button button--flex'}onClick={()=>toggleTab(1)}>
                <FaGraduationCap className='qualification_icon'/> Education
            </div>

            <div className={toggleState === 2 ?'qualification_button qualification_active button--flex':'qualification_button button--flex'}onClick={()=>toggleTab(2)}>
                <FaBriefcase className='qualification_icon'/> Experience
            </div>
        </div>
        <div className='qualification_sections'>
            <div className={toggleState === 1 ?'qualification_content-active': 'qualification_content'}>
                <div className='qualification_data'>
                    <div>
                        <h3 className='qualification_title'>Web Design</h3>
                        <span className='qualification_subtitle'>Unmerited Favour Institute </span>
                        <div className='qualification_calendar'>
                            <FaCalendarAlt/> June 2023 - Present
                        </div>
                    </div>
                    <div>
                        <span className='qualification_rounder'></span>
                        <span className='qualification_line'></span>
                    </div>
                </div>

                <div className={toggleState === 2 ?'qualification_content-active': 'qualification_content'}></div>
                
                <div className='qualification_data'>
                    <div></div>
                    <div>
                        <span className='qualification_rounder'></span>
                        <span className='qualification_line'></span>
                    </div>
                    <div>
                        <h3 className='qualification_title'>Product Designer</h3>
                        <span className='qualification_subtitle'>Figma </span>
                        <div className='qualification_calendar'>
                            <FaCalendarAlt/> June 2023 - Present
                        </div>
                    </div>
                    
                </div>

                <div className='qualification_data'>
                    <div></div>
                    <div>
                        <span className='qualification_rounder'></span>
                        <span className='qualification_line'></span>
                    </div>
                    <div>
                        <h3 className='qualification_title'>React Pro</h3>
                        <span className='qualification_subtitle'>Unmerited Favour Institute </span>
                        <div className='qualification_calendar'>
                            <FaCalendarAlt/> June 2023 - Present
                        </div>
                    </div>
                    
                </div>

                <div className='qualification_data'>
                    <div></div>
                    <div>
                        <span className='qualification_rounder'></span>
                        <span className='qualification_line'></span>
                    </div>
                    <div>
                        <h3 className='qualification_title'>UX & UI Expert</h3>
                        <span className='qualification_subtitle'>Unmerited Favour Institute </span>
                        <div className='qualification_calendar'>
                            <FaCalendarAlt/> June 2023 - Present
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Qualification