import React, { useState } from "react";
import './GetID.css';

const AdminGetID = () => {
  const [id, setAdminId] = useState("");
  const [adminRequest, setAdminRequest] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://localhost:44393/api/Admin/${id}`);
      if (response.status === 200) {
        const data = await response.json();
        setAdminRequest(data);
        setErrorMessage("");
      } else if (response.status === 404) {
        setAdminRequest(null);
        setErrorMessage("Admin not found.");
      } else {
        setAdminRequest(null);
        setErrorMessage("Could not retrieve admin details. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setAdminRequest(null);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="view-admin-details">
      <h2>View Admin Details</h2>
      <div className="form-field">
        <label htmlFor="AdminId">Admin ID:</label>
        <input type="text" id="AdminId" value={id} onChange={(e) => setAdminId(e.target.value)} />
      </div>
      <button onClick={handleSearch}>Search</button>
      {errorMessage && <p>{errorMessage}</p>}
      {adminRequest && (
        <table>
          <thead>
            <tr>
              <th>Admin ID</th>
              <th>Admin Name</th>
              <th>Applicants ID</th>
              <th>Applicants Name</th>
              {/* <th>Purpose ID</th> */}
              <th>Response ID</th>
              <th>Action </th>
              <th>Officer ID</th>
              <th>Officer Name</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{adminRequest.adminID}</td>
              <td>{adminRequest.adminName}</td>
              <td>{adminRequest.applicantsID}</td>
              <td>{adminRequest.applicants.fullName}</td>
              {/* <td>{adminRequest.purposeID}</td>
              <td>{adminRequest.purpose.purpose}</td> */}
              <td>{adminRequest.responseID}</td>
              <td>{adminRequest.response.action}</td>
              <td>{adminRequest.officerID}</td>
              <td>{adminRequest.officers.officerName}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminGetID;