import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OffLR () {
  const [officerName, setOfficerName] = useState('');
  const [officerEmail, setOfficerEmail] = useState('');
  const [officerPassword, setOfficerPassword] = useState('');
 
  const handleOfficerLoginSubmit = (event) => {
    event.preventDefault();
    // handle officer login submit logic here
  };

  const handleOfficerRegisterSubmit = (event) => {
    event.preventDefault();
    // handle officer register submit logic here
  };

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="officer-login-dropdown">
                Officer Login
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Form onSubmit={handleOfficerLoginSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicOfficerName">
                    <Form.Label>Officer Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter officer name" value={officerName} onChange={(event) => setOfficerName(event.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicOfficerEmail">
                    <Form.Label>Officer Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter officer email" value={officerEmail} onChange={(event) => setOfficerEmail(event.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicOfficerPassword">
                    <Form.Label>Officer Password</Form.Label>
                    <Form.Control type="password" placeholder="Officer Password" value={officerPassword} onChange={(event) => setOfficerPassword(event.target.value)} />
                  </Form.Group>
                  <Link to ='/Officers'>
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

export default OffLR;