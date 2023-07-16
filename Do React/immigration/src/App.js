import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import ApplicantsLogin from './components/ApplicantsLogin';
import OfficerLogin from './components/OfficerLogin';
import AdminL from './components/AdminL';
import AplnUI from './components/AplnUI';
import PurUI from './components/PurUI';
import AdminUI from './components/AdminUI';
import OfficersUI from './components/OfficersUI';
import ClearanceStatus from './components/ClearanceStatus';
import AdminGetID from './components/AdminGetID';
import AdminGetAll from './components/AdminGetAll';
import OffficersPUT from './components/OfficersPUT';
import Admin from './components/Admin';
import Officers from './components/Officers';
import Applicants from'./components/Applicants';
import AdminDelete from'./components/AdminDelete';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Component } from 'react';



function App() {
  return (
    
    <div>
      <Router>
     <Navbar />
     {/*<Welcome/>*/}

      {/*<AplnUI />*/}
     {/*<PurUI />*/}
     {/*<AdminUI />*/}
    {/*<OfficersUI />*/}
    <ClearanceStatus />
    
     <Routes>

          <Route path="/" element = {<Welcome />}/>

          <Route path="/AplnUI" element={<AplnUI />}/>

          <Route path="/PurUI" element={<PurUI/>} />

          <Route path="/AdminUI" element={<AdminUI />} />

          <Route path="/OfficersUI" element={<OfficersUI />} />
          <Route path="/AdminL" element={<AdminL />} />
          <Route path="/ApplicantsLogin" element={<ApplicantsLogin />} />
          <Route path="/OfficerLogin" element={<OfficerLogin />} />
          <Route path="/AdminGetID" element={<AdminGetID />} />
          <Route path="/AdminGetAll" element={<AdminGetAll />} />
          <Route path="/OfficersPUT" element={<OffficersPUT />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Officers" element={<Officers />} />
          <Route path="/Applicants" element={<Applicants />} />
          <Route path="/AdminDelete" element={<AdminDelete />} />

          
          

          
                 
      </Routes>

      </Router>
    
    </div>

  );
}

export default App;
