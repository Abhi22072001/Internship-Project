import React from 'react';

import { Link } from 'react-router-dom';

import './Admin.css';




function Officers() {

  return (

    <div className="Officers">

      <div className='officers-container'>

        <h1 className="title">Welcome to Officers Page</h1>

        <div className='button-container'>

          <Link to="/OfficersUI" className='button'> Action</Link>

          <Link to="/OfficersPUT" className='button'>Update Exsisting </Link>

        </div>

      </div>

    </div>

  );

}




export default Officers;