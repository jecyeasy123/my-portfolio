import React from 'react';
import '../styles/Skills.css';
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
         <h2 className='section_title'>Skills</h2>
        <span className='section_subtitle'>My Technical Level</span>

        <div className='skills_container'>
            <Frontend/>

            <Backend/>
        </div>
    </section>
  )
}

export default Skills