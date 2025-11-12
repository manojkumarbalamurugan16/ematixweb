import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Training from './components/Training'; // Import the Training page
import Home from './components/Pages/Home';
import Footer from './components/Footer';
import Courseslist from './components/Pages/Courseslist';
import Solution from './components/Pages/Solution';
import Contactus from './components/Pages/Contactus';
import Internship from './components/Pages/Internship';
import InplantTraining from './components/Pages/Inplant_training';
import VirtualTraining from './components/Pages/VirtualTraining';
import Mentorship from './components/Pages/Mentorship';
import Careers from './components/Pages/Careers';
import Franchise from './components/Pages/Franchise';
import ApplicationForm from './components/Pages/ApplicationForm';
import CampusAmbassador from './components/Pages/CampusAmbassador';
import Support from './components/Pages/Support';
import Campus from './components/Pages/Campus';
import CourseDetails from './components/Pages/CourseDetails';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/training" element={<Training />} />
        <Route path='/Courseslist' element={<Courseslist/>}/>
        <Route path="/Course/:id" element={<CourseDetails />} />
        <Route path='/Internship' element={<Internship/>}/>
        <Route path='/Solution' element={<Solution/>}/>
        <Route path='/Franchise' element={<Franchise/>}/>
        <Route path='/Contactus' element={<Contactus/>}/>
        <Route path='/Mentorship' element={<Mentorship/>}/>
        <Route path='/Support' element={<Support/>}/>
        <Route path="/application-form" element={<ApplicationForm />} />
        <Route path='/Careers' element={<Careers/>}/>
        <Route path="/Inplanttraining" element={<InplantTraining />} />
        <Route path="/Virtualtraining" element={<VirtualTraining />} />
        <Route path="/CampusAmbassadorform" element={<CampusAmbassador />} />
        <Route path="/CampusAmbassador" element={<Campus />} />
        
      </Routes>
    
      <Footer/> 
    </div>
  );
};

export default App;
