import React, { useState } from 'react';
import axios from 'axios';

const AdminDelete = () => {
  const [applicantsID, setApplicantsID] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = e => {
    setApplicantsID(e.target.value);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    try {
      await axios.delete(`https://localhost:44393/api/Applicants/${applicantsID}`);
      setSuccess(true);
      setApplicantsID('');
    } catch (error) {
      console.error('Error deleting applicants:', error);
      setError('Error deleting applicants. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="applicantsID">Applicants ID:</label>
        <input type="text" id="applicantsID" value={applicantsID} onChange={handleInputChange} />
      </div>
      <button type="submit">Delete Applicants</button>
      {error && <p>{error}</p>}
      {success && <p>Applicants deleted successfully!</p>}
    </form>
  );
};

export default AdminDelete;