import React, { useState } from 'react';
import  '../styles/Jecy.css';
import {FaUser,FaFile,FaBriefcase,FaImage,FaTimes, FaHome,FaEnvelope, FaAppStore} from 'react-icons/fa';


const Header = () => {
  window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    //when the header is higher than 200 viewport height,add the scroll-header class to a header tag with the scroll top class
    if (this.scrollY >= 80){
       header.classList.add('scroll-header')
      }
    else header.classList.remove('scroll-header')

})
  const[Toggle,showMenu]=useState(false);
  const [activeNav, setActiveNav]=useState('#home');
  return (
    <div className="header">
        <nav className='nav container'>
            <a href='index.html' className='nav_logo'>JecyEasy</a>

            <div className={Toggle ? 'nav_menu show-menu': 'nav_menu'}>
                <ul className='nav_list'>
                    <li className='nav_item'></li>
                    <a href='#home'  onClick={()=>setActiveNav('#home')} className={activeNav==='#home'? 'nav_link active-link':'nav_link'}>
                    <FaHome className="icon1"/>Home
                    </a>

                    <li className='nav_item'></li>
                    <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about'? 'nav_link active-link':'nav_link'}>
                    <FaUser className="icon2"/>About
                    </a>

                    <li className='nav_item'></li>
                    <a href='#skills' onClick={()=>setActiveNav('#skills')} className={activeNav==='#skills'? 'nav_link active-link':'nav_link'}>
                    <FaFile className="icon3"/>Skills
                    </a>

                    <li className='nav_item'></li>
                    <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav==='#services'? 'nav_link active-link':'nav_link'}>
                    <FaBriefcase className="icon4"/>Services
                    </a>

                    <li className='nav_item'></li>
                    <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio'? 'nav_link active-link':'nav_link'}>
                    <FaImage className="icon5"/>Portfolio
                    </a>

                    <li className='nav_item'></li>
                    <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'nav_link active-link':'nav_link'}>
                    <FaEnvelope className="icon6"/>Contact
                    </a>
                </ul>
                <FaTimes className='nav_close' onClick={()=>showMenu(!Toggle)}/>
            </div>
            <div className='nav_toggle'>
              <FaAppStore className='icon7'  onClick={()=>showMenu(!Toggle)} />
            </div>
        </nav>
      
       
    </div>
   
  )
}

export default Header