import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ClearanceStatus from './ClearanceStatus';

const OfficersPUT = () => {
  const [officerId, setOfficerId] = useState('');
  const [officerName, setOfficerName] = useState('');
  const [region, setRegion] = useState('');
  const [applicantsId, setApplicantsId] = useState('');
  const [responseId, setResponseId] = useState('');
  const [securityClearance, setSecurityClearance] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const apiEndpoint = `https://localhost:44393/api/Officers/${officerId}`;

    const requestBody = {
      officerId,
      officerName,
      region,
      applicantsId,
      responseId,
      securityClearance,
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        navigate('/ClearanceStatus', {
          state: {
            applicantId: applicantsId,
            status: securityClearance,
          },
        });
      } else {
        console.error(`Failed to submit form: ${response.statusText}`);
        alert('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleResponseIdChange = (event) => {
    setResponseId(event.target.value);

    if (event.target.value === '01') {
      setSecurityClearance('Permit');
    } else if (event.target.value === '02') {
      setSecurityClearance('Reject');
    } else {
      setSecurityClearance('');
    }
  };

  return (
    <Container>
      <h1>Officers Page</h1>

      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="officerId">
          <Form.Label>Officer ID</Form.Label>
          <Form.Control type="text" value={officerId} onChange={(e) => setOfficerId(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="officerName">
          <Form.Label>Officer Name</Form.Label>
          <Form.Control type="text" value={officerName} onChange={(e) => setOfficerName(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="region">
          <Form.Label>Region</Form.Label>
          <Form.Control type="text" value={region} onChange={(e) => setRegion(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="applicantsId">
          <Form.Label>Applicants ID</Form.Label>
          <Form.Control type="text" value={applicantsId} onChange={(e) => setApplicantsId(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="responseId">
          <Form.Label>Response ID</Form.Label>
          <Form.Control as="select" value={responseId} onChange={handleResponseIdChange} required>
            <option value="">Select Response ID</option>
            <option value="01">Approve</option>
            <option value="02">Deny</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="securityClearance">
          <Form.Label>Security Clearance</Form.Label>
          <Form.Control type="text" value={securityClearance} readOnly />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default OfficersPUT;