import React from 'react';
import '../styles/scrollup.css';
import { FaArrowUp } from 'react-icons/fa'

const ScrollUp = () => {
    window.addEventListener('scroll', function(){
        const ScrollUp = document.querySelector('.scrollup');
        //when the scrollis higher than 560 viewport height,add the show-scroll class to a tag with the scroll top class
        if (this.scrollY >= 560) ScrollUp.classList.add('show-scroll');
        else ScrollUp.classList.remove('show-scroll')

    })
  return (
    <a href='#' className='scrollup'>
        <FaArrowUp className='scrollup_icon'/>
    </a>
  )
}

export default ScrollUp