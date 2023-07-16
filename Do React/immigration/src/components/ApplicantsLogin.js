import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ApplicantsLogin() {
  const [applicantsName, setApplicantsName] = useState('');
  const [applicantsEmail, setApplicantsEmail] = useState('');
  const [applicantsPassword, setApplicantsPassword] = useState('');

  const handleApplicantsLoginSubmit = (event) => {
    event.preventDefault();
    // handle admin login submit logic here
  };

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="applicants-login-dropdown">
                Applicants Login
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Form onSubmit={handleApplicantsLoginSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Applicants Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter applicants name" value={applicantsName} onChange={(event) => setApplicantsName(event.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Applicant Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter applicants email" value={applicantsEmail} onChange={(event) => setApplicantsEmail(event.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={applicantsPassword} onChange={(event) => setApplicantsPassword(event.target.value)} />
                  </Form.Group>
                  <Link to='/Applicants'>
                  <Button variant="primary" type="submit"> Login </Button></Link>
                </Form>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Card.Header>
    </Card>
  );
};

export default ApplicantsLogin;

