import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminUI = () => {
  const [adminId, setAdminId] = useState('');
  const [adminName, setAdminName] = useState('');
  const [officerId, setOfficerId] = useState('');
  const [applicantsId, setApplicantsId] = useState('');
  const [purposeId, setPurposeId] = useState('');
  const [responseId, setResponseId] = useState('');
  const [action, setAction] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const apiEndpoint = 'https://localhost:44393/api/Admin';

    const requestBody = {
      adminId,
      adminName,
      officerId,
      applicantsId,
      purposeId,
      responseId,
      action
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      {/*if (response.ok) {
        console.log('Form submitted successfully');
        window.location.href = '/OfficersUI';
      } else {
        console.error(`Failed to submit form: ${response.statusText}`);
        alert('An error occurred. Please try again.');
      }*/}
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleActionChange = (event) => {
    setAction(event.target.value);
    if (event.target.value === 'Approve') {
      setResponseId('01');
    } else if (event.target.value === 'Deny') {
      setResponseId('02');
    } else {
      setResponseId('');
    }
  };

  const handlePurposeChange = (event) => {
    setPurposeId(event.target.value);
  };

  return (
    <Container>
      <h1>Admin Page</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="adminId">
          <Form.Label>Admin ID</Form.Label>
          <Form.Control
            type="text"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="adminName">
          <Form.Label>Admin Name</Form.Label>
          <Form.Control
            type="text"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="officerId">
          <Form.Label>Officer ID</Form.Label>
          <Form.Control
            type="text"
            value={officerId}
            onChange={(e) => setOfficerId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="applicantsId">
          <Form.Label>Applicants ID</Form.Label>
          <Form.Control
            type="text"
            value={applicantsId}
            onChange={(e) => setApplicantsId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="purposeId">
          <Form.Label>Purpose ID</Form.Label>
          <Form.Control
            type="text"
            value={purposeId}
            onChange={handlePurposeChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="action">
          <Form.Label>Action</Form.Label>
          <Form.Control as="select" value={action} onChange={handleActionChange}>
            <option value="">Select Action</option>
            <option value="Approve">Approve</option>
            <option value="Deny">Deny</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="responseId">
          <Form.Label>Response ID</Form.Label>
          <Form.Control type="text" value={responseId} readOnly />
        </Form.Group>
          
          
        <Button variant="primary" type="submit">
          Apply
        </Button>

    {/*    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link to= "/AdminGetID">
            <button type="button" class="btn  btn-warning">GetID</button></Link>
  </div>

      
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link to= "/AdminGetAll">
            <button type="button" class="btn  btn-warning">GetAll</button></Link>
  </div>*/}
        {/*<Link to="/OfficersUI">
          <Button variant="primary" type="submit">NextPage</Button>
  </Link>*/}
      </Form>
    </Container>
  );
};

export default AdminUI;
