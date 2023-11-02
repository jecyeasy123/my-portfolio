import React from 'react';
import '../styles/About.css';
import Info from './Info';
import { FaFile } from 'react-icons/fa';
import image from '../assets/Jecyesy.png'


const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section_title'>About Me</h2>
        <span className='section_subtitle'>Introduction</span>

        <div className='about_container'>
        <img src={image} alt="image" height="auto" className='about_img'/>
        </div>
        <div className='about_data'>
            <Info/>
            <p className='about_description'>I am a FullStack Developer, I create Web pages with
            User Interface(UI) and User Expereience (UX). I have experience and all my clients are happy 
            with the projects have done so far. </p>

            <a download= '' href='' className='button button--flex'>Download CV</a>
            <FaFile/>

        </div>
    </section>
  )
}

export default About