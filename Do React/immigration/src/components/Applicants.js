import React from 'react';

import { Link } from 'react-router-dom';

import './Applicants.css';




function Applicants() {

  return (

    <div className="Applicants">

      <div className='applicants-container'>

        <h1 className="title">Welcome to Applicants Page</h1>

        <div className='button-container'>

          <Link to="/AplnUI" className='button'> Action</Link>

        </div>

      </div>

    </div>

  );

}




export default Applicants;