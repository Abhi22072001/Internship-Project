import React, { useState, useEffect } from "react";

const AdminGetAll = () => {
  const [adminList, setAdminList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGetAll = async () => {
    try {
      const response = await fetch("https://localhost:44393/api/Admin");
      if (response.status === 200) {
        const data = await response.json();
        setAdminList(data);
        setErrorMessage("");
      } else {
        setAdminList([]);
        setErrorMessage("Could not retrieve admin details. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setAdminList([]);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    handleGetAll();
  }, []);

  return (
    <div className="view-admin-details">
      <h2>View All Admin Details</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <table>
        <thead>
          <tr>
            <th>Admin ID</th>
            <th>Admin Name</th>
            <th>Applicants ID</th>
            {/* <th>Purpose ID</th> */}
            <th>Response ID</th>
            <th>Officer ID</th>
          </tr>
        </thead>
        <tbody>
          {adminList.map((admin) => (
            <tr key={admin.adminID}>
              <td>{admin.adminID}</td>
              <td>{admin.adminName}</td>
              <td>{admin.applicantsID}</td>
              {/* <td>{admin.purposeID || admin.PurposeId}</td> */}
              <td>{admin.responseID}</td>
              <td>{admin.officerID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminGetAll;