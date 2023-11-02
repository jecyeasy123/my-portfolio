import React, { useRef } from 'react';
import '../styles/contact.css';
import {Resend }from "resend";
import { FaArrowRight, FaEnvelope, FaEnvelopeSquare, FaFacebookMessenger, FaGlassMartiniAlt, FaInstagram,FaLinkedin,FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
    const form = useRef();
    const [email,setEmail ] = useState("")
    const [name,setName] = useState("")
    const [project, setProject] = useState("")
   
     const sendmail = new Resend("re_d8q1eT6P_MB87oFwPKwd1Rn5zyySZW89F")   
  
    const SendEmail = async function(e){
    
        e.preventDefault();
   
    try{
        const data =  {
            name:name,
            project:project
        }

        const deliverMail = await sendmail.emails.send({
        from:'Acme <onboarding@resend.dev',  
        to: 'jecyeasy@gmail.com',
        text: data, 
        subject:"From my Contact Portfolio website",
        reply_to: email,
        headers:{"Controll-Allow-Origin": "*" }

        })
           if(deliverMail){
            setEmail("")
            setName("")
            setProject("")
            console.log(deliverMail);
           } 
       
    }
    catch(err){
      console.log(err)  
    }
     

    };
  
  return (
    <section className='contact section' id='contact'>
        <h2 className='section_title'>Get In Touch</h2>
        <span className='section_subtitle'>Contact Me</span>

        <div className='contact_container'>
            <div className='contact_content1'>
                <h3 className='contact_title'>Talk to Me</h3>
                <div className='contact_info'>
                    <div className='contact_card'>
                        <FaEnvelope className='contact_card-icon'/>

                        <h3 className='contact_card-title'>Email</h3>
                        <span className='contact_card-data'>jecyeasy@gmail.com</span>

                        <a href='mailto:jecyeasy@gmail.com' className='contact_button'>Write me
                        <FaArrowRight className='contact_button-icon'/></a>
                    </div>

                    <div className='contact_card'>
                        <FaWhatsapp className='contact_card-icon'/>

                        <h3 className='contact_card-title'>Whatsapp</h3>
                        <span className='contact_card-data'>+2349077457795</span>

                        <a href='https://api.whatsapp.com/send?phone=9077457795&text=Hello, more information!' className='contact_button'>Write me
                        <FaArrowRight className='contact_button-icon'/></a>
                    </div>

                     <div className='contact_card'>
                        <FaInstagram className='contact_card-icon'/>

                        <h3 className='contact_card-title'>Instagram</h3>
                        <span className='contact_card-data'>+2349077457795</span>

                        <a href='www.instagram.com' className='contact_button'>Write me
                        <FaArrowRight className='contact_button-icon'/></a>
                    </div>

                    <div className='contact_card'>
                    <FaFacebookMessenger className='contact_card-icon'/>

                <h3 className='contact_card-title'>Messenger</h3>
                <span className='contact_card-data'>@Jecinta Obiefula</span>

                <a href='https://m.me/Jecinta Obiefula' className='contact_button'>Write me
                <FaArrowRight className='contact_button-icon'/></a>
                </div>

                <div className='contact_card'>
                    <FaLinkedin className='contact_card-icon'/>

                <h3 className='contact_card-title'>Linkedin</h3>
                <span className='contact_card-data'>@Jecinta Obiefula</span>

                <a href='https://www.linkedin.com/in/jecinta-obiefula-a4166a203' className='contact_button'>Write me
                <FaArrowRight className='contact_button-icon'/></a>
                </div>
                </div>
            </div>

            <div className='contact_content2'>
                <h3 className='contact_title'>Write me your project</h3>

                <form ref={form} onSubmit={SendEmail} className='contact_form'>
                    <div className='contact_form-div'>
                        <label htmlFor='' className='contact_form-tag'> Name</label>
                        <input required onChange={(e)=>setName(e.target.value)} type='text' name='name' className='contact_form-input' placeholder='Insert your name'/>
                    </div>

                    <div className='contact_form-div'>
                        <label htmlFor='' className='contact_form-tag'> Mail</label>
                        <input required onChange={(e)=>setEmail(e.target.value)} type='email' name='email' className='contact_form-input' placeholder='Insert your email'/>
                    </div>

                    <div className='contact_form-div contact_form-area'>
                        <label htmlFor='' className='contact_form-tag'> Project</label>
                        <textarea onChange={(e)=>setProject(e.target.value)} name='project' cols='30' rows='10' className='contact_form-input' placeholder='Write your project'></textarea>
                    </div>

                    <button type='submit' className='button button--flex'>Send Message<FaEnvelope className='contact_button-icon'/></button>
                    
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact