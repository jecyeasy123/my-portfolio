import React from 'react';
import Header from './Components/Jecy';
import Social from './Components/Social';
import Data from './Components/Data';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Qualification from './Components/Qualification';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ScrollUp from './Components/ScrollUp';
import './App.css';
import { Route, Routes } from 'react-router-dom';








const App =  ()=>{
  return(


<React.Fragment>
<main>
  
 <Header/> 
 <HomePage/>
  <About/>
  <Skills/>
  <Services/>
  <Qualification/>
   <Contact/>
</main>
<Footer/>
<ScrollUp/>
 
</React.Fragment>
  )
}
export default App;
