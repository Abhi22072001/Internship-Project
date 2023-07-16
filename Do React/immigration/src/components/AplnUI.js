/*import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../style.css/ApplicantPage.css';

function AplnUI () {
  const [applicantsID, setApplicantsID] = useState(1);
  const [fullName, setFullName] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [passportExpiryDate, setPassportExpiryDate] = useState('');
  const [gender, setGender] = useState('');
  const [nation, setNation] = useState('');
  const [visitingCountry, setVisitingCountry] = useState('');
  const [hasCriminalRecord, setHasCriminalRecord] = useState(false);
  const [firNumber, setFirNumber] = useState('');
  const [purposeName, setPurposeName] = useState('');
  const [purposeId, setPurposeId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePurposeChange = (event) => {
    const selectedPurpose = event.target.value;
    setPurposeName(selectedPurpose);

    // Map purpose to purposeId
    let mappedPurposeId = '';
    if (selectedPurpose === 'Study') {
      mappedPurposeId = '01';
    } else if (selectedPurpose === 'Work') {
      mappedPurposeId = '02';
    } else if (selectedPurpose === 'Travel') {
      mappedPurposeId = '03';
    }
    setPurposeId(mappedPurposeId);
  };

  const handleHasCriminalRecordChange = (event) => {
    const checked = event.target.checked;
    setHasCriminalRecord(checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      applicantsID: applicantsID,
      fullName: fullName,
      passportNumber: passportNumber,
      passportExpiryDate: passportExpiryDate,
      gender: gender,
      nation: nation,
      visitingCountry: visitingCountry,
      hasCriminalRecord: hasCriminalRecord,
      firNumber: firNumber,
      purposeName: purposeName,
      purposeId: purposeId
    };

    try {
      const response = await fetch("http://localhost:5001/api/Applicants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        setSuccessMessage("Applicants request submitted successfully!");
        setFullName("");
        setPassportNumber("");
        setPassportExpiryDate("");
        setGender("");
        setNation("");
        setVisitingCountry("");
        setHasCriminalRecord(false);
        setFirNumber("");
        setPurposeName("");
        setPurposeId("");
      } else {
        setSuccessMessage("Failed to submit Applicants request. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setSuccessMessage("An error occurred. Please try again.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="applicantsID">
        <Form.Label>Applicants ID</Form.Label>
        <Form.Control type="text" value={applicantsID.toString().padStart(2, '0')} readOnly />
      </Form.Group>

      <Form.Group controlId="fullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="passportNumber">
        <Form.Label>Passport Number</Form.Label>
        <Form.Control type="text" value={passportNumber} onChange={(e) => setPassportNumber(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="passportExpiryDate">
        <Form.Label>Passport Expiry Date</Form.Label>
        <Form.Control type="date" value={passportExpiryDate} onChange={(e) => setPassportExpiryDate(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">SelectGender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="nationa">
        <Form.Label>Nation</Form.Label>
        <Form.Control type="text" value={nation} onChange={(e) => setNation(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="visitingCountry">
        <Form.Label>Visiting Country</Form.Label>
        <Form.Control type="text" value={visitingCountry} onChange={(e) => setVisitingCountry(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="hasCriminalRecord">
        <Form.Check type="checkbox" label="Has Criminal Record" checked={hasCriminalRecord} onChange={handleHasCriminalRecordChange} />
      </Form.Group>

      {hasCriminalRecord && (
        <Form.Group controlId="firNumber">
          <Form.Label>FIR Number</Form.Label>
          <Form.Control type="text" value={firNumber} onChange={(e) => setFirNumber(e.target.value)} />
        </Form.Group>
      )}

      <Form.Group controlId="purposeName">
        <Form.Label>Purpose</Form.Label>
        <Form.Control as="select" value={purposeName} onChange={handlePurposeChange}>
          <option value="">Select Purpose</option>
          <option value="Travel">Travel</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="purposeId">
        <Form.Label>Purpose ID</Form.Label>
        <Form.Control type="text" value={purposeId} readOnly />
      </Form.Group>

      {successMessage && (
        <p className="success-message">{successMessage}</p>
      )}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AplnUI;*/


import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../style.css/ApplicantPage.css';
import { Link } from 'react-router-dom';
function AplnUI () {
  const [applicantsID, setApplicantsID] = useState('');
  const [fullName, setFullName] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [passportExpiryDate, setPassportExpiryDate] = useState('');
  const [gender, setGender] = useState('');
  const [nation, setNation] = useState('');
  const [visitingCountry, setVisitingCountry] = useState('');
  const [hasCriminalRecord, setHasCriminalRecord] = useState(false);
  const [firNumber, setFirNumber] = useState('');
  const [purposeName, setPurposeName] = useState('');
  const [purposeId, setPurposeId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePurposeChange = (event) => {
    const selectedPurpose = event.target.value;

    // Map purpose to purposeId
    let mappedPurposeId = '';
    if (selectedPurpose === 'Study') {
      mappedPurposeId = '01';
    } else if (selectedPurpose === 'Work') {
      mappedPurposeId = '02';
    } else if (selectedPurpose === 'Travel') {
      mappedPurposeId = '03';
    }

    setPurposeName(selectedPurpose);
    setPurposeId(mappedPurposeId);
  };

  const handleHasCriminalRecordChange = (event) => {
    const checked = event.target.checked;
    setHasCriminalRecord(checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      applicantsID: applicantsID,
      fullName: fullName,
      passportNumber: passportNumber,
      passportExpiryDate: passportExpiryDate,
      gender: gender,
      nation: nation,
      visitingCountry: visitingCountry,
      hasCriminalRecord: hasCriminalRecord,
      firNumber: firNumber,
      purposeName: purposeName,
      purposeId: purposeId
    };

    try {
      
      const response = await fetch("https://localhost:44393/api/Applicants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        setSuccessMessage("Applicants request submitted successfully!");
        setApplicantsID("");
        setFullName("");
        setPassportNumber("");
        setPassportExpiryDate("");
        setGender("");
        setNation("");
        setVisitingCountry("");
        setHasCriminalRecord(false);
        setFirNumber("");
        setPurposeName("");
        setPurposeId("");
      } else {
        setSuccessMessage("Failed to submit Applicants request. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setSuccessMessage("An error occurred. Please try again.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="applicantsID">
        <Form.Label>Applicants ID</Form.Label>
        <Form.Control type="text" value={applicantsID}onChange={(e) => setApplicantsID(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="fullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="passportNumber">
        <Form.Label>Passport Number</Form.Label>
        <Form.Control type="text" value={passportNumber} onChange={(e) => setPassportNumber(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="passportExpiryDate">
        <Form.Label>Passport Expiry Date</Form.Label>
        <Form.Control type="date" value={passportExpiryDate} onChange={(e) => setPassportExpiryDate(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">SelectGender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Control>
      </Form.Group>

     <Form.Group controlId="nationality">
        <Form.Label>Nation</Form.Label>
        <Form.Control type="text" value={nation} onChange={(e) => setNation(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="visitingCountry">
        <Form.Label>Visiting Country</Form.Label>
        <Form.Control type="text" value={visitingCountry} onChange={(e) => setVisitingCountry(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="hasCriminalRecord">
        <Form.Check type="checkbox" label="Has Criminal Record" checked={hasCriminalRecord} onChange={handleHasCriminalRecordChange} />
      </Form.Group>

      {hasCriminalRecord && (
        <Form.Group controlId="firNumber">
          <Form.Label>FIR Number</Form.Label>
          <Form.Control type="text" value={firNumber} onChange={(e) => setFirNumber(e.target.value)} />
        </Form.Group>
      )}

      <Form.Group controlId="purposeName">
        <Form.Label>PurposeName</Form.Label>
        <Form.Control as="select" value={purposeName} onChange={handlePurposeChange}>
          <option value="">Select Purpose</option>
          <option value="Travel">Travel</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="purposeId">
        <Form.Label>Purpose ID</Form.Label>
        <Form.Control type="text" value={purposeId} readOnly />
      </Form.Group>

      {successMessage && (
        <p className="success-message">{successMessage}</p>
      )}

      <Button variant="primary" type="submit">
        Apply
      </Button>
      <Link to='/PurUI'>
      <Button variant="primary" type="submit">
        NextPage
      </Button>
      </Link>

    </Form>
  );
}

export default AplnUI;


