import React from 'react';

import { Link } from 'react-router-dom';

import './Admin.css';




function Admin() {

  return (

    <div className="Admin">

      <div className='admin-container'>

        <h1 className="title">Welcome to Admin Page</h1>

        <div className='button-container'>

          <Link to="/AdminUI" className='button'> Action</Link>

          <Link to="/AdminGetAll" className='button'>View All </Link>

          <Link to="/AdminGetID" className='button'>Get ID</Link>

          <Link to="/AdminDelete" className='button'>AdminDelete </Link>

        </div>

      </div>

    </div>

  );

}




export default Admin;