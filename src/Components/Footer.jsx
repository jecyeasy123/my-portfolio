import React from 'react';
import '../styles/footer.css';
import { FaFacebook, FaFigma, FaGithubAlt, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer_container'>
            <h1 className='footer_title'>JecyEasy</h1>

            <ul className='footer_list'>
                <li>
                    <a href='#about' className='footer_link'>About</a>
                </li>

                <li>
                    <a href='#portfolio' className='footer_link'>Projects</a>
                </li>

                <li>
                    <a href='#testimonials' className='footer_link'>Testimonials</a>
                </li>
            </ul>

            <div className='footer_social'>
            <a href = "https://www.instagram.com/">
            <FaInstagram className='footer_social-link'/>
        </a>
        <a href = "https://www.github.com/">
            <FaGithubAlt className='footer_social-link'/>
        </a>
        <a href = "https://www.figma.com/">
            <FaFigma className='footer_social-link'/>
        </a>
        <a href = "https://www.facebook.com/">
            <FaFacebook className='footer_social-link'/>
        </a>
        <a href = "https://www.twitter.com/">
            <FaTwitter className='footer_social-link'/>
        </a>
            </div>
            <span className='footer_copy'>&#169; Jecyeasy. All rights reserved </span>
        </div>
    </footer>
  )
}

export default Footer