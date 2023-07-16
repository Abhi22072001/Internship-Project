import React from 'react';

import { useLocation } from 'react-router-dom';




const ClearanceStatus = () => {

  const location = useLocation();

  const { state } = location;




  if (!state || !state.applicantId || !state.status) {

    // Handle the case where state or the required properties are not available

    return <div>Error: Invalid state</div>;

  }




  const { applicantId, status } = state;

  const isPermitted = status === 'Permit';




  return (

    <div>

      <h2>Clearance Status</h2>

      <p>Applicant ID: {applicantId}</p>

      <p>Status: {status}</p>

      <p>

        {isPermitted

          ? "You're eligible to travel."

          : "You're not eligible to travel."}

      </p>

    </div>

  );

};




export default ClearanceStatus;