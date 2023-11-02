import React from 'react'
import { FaGithubAlt, FaInstagram,FaFigma } from 'react-icons/fa';


const  Social =() =>{
  return (
    <div className='home_social'>
        <a href = "https://www.instagram.com/">
            <FaInstagram className='ico1'/>
        </a>
        <a href = "https://www.github.com/">
            <FaGithubAlt className='ico2'/>
        </a>
        <a href = "https://www.figma.com/">
            <FaFigma className='ico3'/>
        </a>
    </div>
  )
}

export default Social   