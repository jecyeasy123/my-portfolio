import React, { useState } from 'react';
import'../styles/services.css';
import { FaArrowRight, FaCheckCircle, FaCode, FaEdit, FaTimes, FaWindowRestore } from 'react-icons/fa';


const Services = () => {
    const[toggleState, setToggleState]=useState(0);
    const toggleTab = (index) => {
        setToggleState (index);
    }

  return (
    <section className='services section' id='services'>
        <h2 className='section_title'>Services</h2>
        <span className='section_subtitle'>What I offer</span>

        <div className='services_container'>
            <div className='services_content'>
            <div>
                    <FaWindowRestore className='services_icon'/>

                <h3 className='services_title'>Product <br/>Designer </h3>
                </div>
                <span className='services_button' onClick={()=> toggleTab(1)}>View More  <FaArrowRight className='services_button-icon'/></span>
            <div>
                    <FaCode className='services_icon'/>

                <h3 className='services_title'>Visual <br/>Designer </h3>
                </div>
                <span className='services_button' onClick={()=> toggleTab(2)}>View More  <FaArrowRight className='services_button-icon'/></span>


                <div>
                    <FaEdit className='services_icon'/>

                <h3 className='services_title'>UI/UX <br/>Designer </h3>
                </div>
                <span className='services_button' onClick={()=> toggleTab(3)}>View More  <FaArrowRight className='services_button-icon'/></span>
            </div>
            <div className={toggleState ===1 ? 'services_modal active-modal':'services_modal'}>
                <div className='services_modal-content'>
                    <FaTimes onClick={()=>toggleTab(0)} className='services_modal-close'/>
                    <h3 className='services_modal-title'>Product <br/>Designer</h3>
                    <p className='services_modal-description'>Service with more than 3 years of experience. Providing quality work to clients and companies.</p>
                <ul className='services_modal-services'>
                    <li className='services_modal-services'>
                        <FaCheckCircle className='services_modal-icon'/>
                        <p className='services_modal-info'>I develop the user interface.</p>
                    </li>

                    <li className='services_modal-services'>
                        <FaCheckCircle className='services_modal-icon'/>
                        <p className='services_modal-info'>Webpage development.</p>
                    </li>

                    <li className='services_modal-services'>
                        <FaCheckCircle className='services_modal-icon'/>
                        <p className='services_modal-info'>I create Ux element interactions.</p>
                    </li>

                    <li className='services_modal-services'>
                        <FaCheckCircle className='services_modal-icon'/>
                        <p className='services_modal-info'>I position company brand.</p>
                    </li>

                    <li className='services_modal-services'>
                        <FaCheckCircle className='services_modal-icon'/>
                        <p className='services_modal-info'>Design mockups of products for companies.</p>
                    </li>
                </ul>
                </div>
            </div>


            <div className={toggleState ===2 ? 'services_modal active-modal':'services_modal'}>
                <div className='services_modal-content'>
                    <FaTimes onClick={()=>toggleTab(0)} className='services_modal-close'/>
                    <h3 className='services_modal-title'>Visual <br/>Designer</h3>
                    <p className='services_modal-description'>Service with more than 3 years of experience. Providing quality work to clients and companies.</p>
                <ul className='services_modal-services'>
                    <li className='services_modal-services'>
                        <FaCheckCircle className='services_modal-icon'/>
                        <p className='services_modal-info'>I develop the user interface.</p>
                    </li>

                    <li className='services_modal-services'>
                        <FaCheckCircle className='services_modal-icon'/>
                        <p className='services_modal-info'>Webpage development.</p>
                    </li>

                    <li className='services_modal-services'>
                        <FaCheckCircle className='services_modal-icon'/>
                        <p className='services_modal-info'>I create Ux element interactions.</p>
                    </li>

                    <li className='services_modal-services'>
                        <FaCheckCircle className='services_modal-icon'/>
                        <p className='services_modal-info'>I position company brand.</p>
                    </li>

                    <li className='services_modal-services'>
                        <FaCheckCircle className='services_modal-icon'/>
                        <p className='services_modal-info'>Design mockups of products for companies.</p>
                    </li>
                </ul>
                </div>
            </div>

            <div className={toggleState ===3 ? 'services_modal active-modal':'services_modal'}>
                <div className='services_modal-content'>
                    <FaTimes onClick={()=>toggleTab(0)} className='services_modal-close'/>
                    <h3 className='services_modal-title'>UI/UX <br/>Designer</h3>
                    <p className='services_modal-description'>Service with more than 3 years of experience. Providing quality work to clients and companies.</p>
                <ul className='services_modal-services'>
                    <li className='services_modal-services'>
                        <FaCheckCircle className='services_modal-icon'/>
                        <p className='services_modal-info'>I develop the user interface.</p>
                    </li>

                    <li className='services_modal-services'>
                        <FaCheckCircle className='services_modal-icon'/>
                        <p className='services_modal-info'>Webpage development.</p>
                    </li>

                    <li className='services_modal-services'>
                        <FaCheckCircle className='services_modal-icon'/>
                        <p className='services_modal-info'>I create Ux element interactions.</p>
                    </li>

                    <li className='services_modal-services'>
                        <FaCheckCircle className='services_modal-icon'/>
                        <p className='services_modal-info'>I position company brand.</p>
                    </li>

                    <li className='services_modal-services'>
                        <FaCheckCircle className='services_modal-icon'/>
                        <p className='services_modal-info'>Design mockups of products for companies.</p>
                    </li>
                </ul>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Services