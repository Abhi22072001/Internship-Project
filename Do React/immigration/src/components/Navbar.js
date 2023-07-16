import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
function Navbar(){
    return(
        // <div className="container" style={{}}>
        <nav className="navbar navbar-expand-lg bg-light" style={{padding: '5px'}}>
    <a className="navbar-brand" href="#">
      <img src="https://img.freepik.com/free-vector/happy-travelers-going-through-flight-registration-counter-trip-baggage-luggage-flat-vector-illustration-travel-vacation_74855-8405.jpg?size=626&ext=jpg&ga=GA1.1.811328831.1686748477&semt=sph" alt="Bootstrap" width="90" height="80"/>
    </a>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Gateway Guru</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        
        </ul> 
        <li className="nav-item">
          <a className="nav-link" href="ApplicantsLogin">ApplicantsLogin</a>
        </li>

        <br />

        <li className="nav-item">
          <a className="nav-link" href="OfficerLogin">OfficerLogin</a>
        </li>

        <br />

        <li className="nav-item">
          <a className="nav-link" href="AdminL">AdminL</a>
        </li>

        <br />
        {/* <span className="navbar-text">
         Journey with ease, migrate with us. 
        </span> */}
    </div>
  </div>
  
</nav>
// </div>
    );
    
}

export default Navbar;