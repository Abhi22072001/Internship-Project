import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AdminL() {
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleAdminLoginSubmit = (event) => {
    event.preventDefault();
    // handle admin login submit logic here
  };

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="admin-login-dropdown">
                Admin Login
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Form onSubmit={handleAdminLoginSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Admin Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter admin name" value={adminName} onChange={(event) => setAdminName(event.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Admin Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter admin email" value={adminEmail} onChange={(event) => setAdminEmail(event.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={adminPassword} onChange={(event) => setAdminPassword(event.target.value)} />
                  </Form.Group>
                  <Link to='/Admin'>
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

export default AdminL;