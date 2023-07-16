import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function PurUI ()  {
  const [reason, setReason] = useState('');
  const [purposeId, setPurposeId] = useState('');
  const [visaCharges, setVisaCharges] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handlePurposeIdChange = (event) => {
    setPurposeId(event.target.value);
  };

  const handleVisaChargesChange = (event) => {
    setVisaCharges(event.target.value);
  };

  const handlePaymentModeChange = (event) => {
    setPaymentMode(event.target.value);
  };

  const handlePaymentStatusChange = (event) => {
    setPaymentStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here, you can perform further actions with the form data
    // For example, make an API call to submit the form data
    const data = {
      reason: reason,
      purposeId: purposeId,
      visaCharges: visaCharges,
      paymentMode: paymentMode,
      paymentStatus: paymentStatus
    };

    try {
      const response =  fetch("https://localhost:44393/api/Purpose", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
       
        setReason("");
        setPurposeId("");
        setVisaCharges("");
        setPaymentMode("");
        setPaymentStatus("");
      } else {
        setSuccessMessage("Request submitted successfully");
      }
    } catch (error) {
      console.log(error);
      setSuccessMessage("Failed to submit request. Please try again.");
    }
  
    // Redirect to the next page or perform any other necessary actions
  };

  return (
    <div className="purpose-page">
      <h1>Purpose Page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="reason">
          <Form.Label>Reason</Form.Label>
          <Form.Control as="select" value={reason} onChange={handleReasonChange}>
            <option value="">Select Reason</option>
            <option value="Study">Study</option>
            <option value="Work">Work</option>
            <option value="Travel">Travel</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="purposeId">
          <Form.Label>Purpose ID</Form.Label>
          <Form.Control type="text" value={purposeId} onChange={handlePurposeIdChange} />

        </Form.Group>

        <Form.Group controlId="visaCharges">
          <Form.Label>Visa Charges</Form.Label>
          <Form.Control as="select" value={visaCharges} onChange={handleVisaChargesChange}>
            <option value="">Select Visa Charges</option>
            <option value="9000">Study - 9000</option>
            <option value="12000">Work - 12000</option>
            <option value="15000">Travel - 15000</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="paymentMode">
          <Form.Label>Payment Mode</Form.Label>
          <Form.Control as="select" value={paymentMode} onChange={handlePaymentModeChange}>
            <option value="">Select Payment Mode</option>
            <option value="IMPS">IMPS</option>
            <option value="UPI">UPI</option>
            <option value="NEFT">NEFT</option>
            <option value="CREDIT">CREDIT CARD</option>
            <option value="DEBIT">DEBIT CARD</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="paymentStatus">
          <Form.Label>Payment Status</Form.Label>
          <Form.Control as="select" value={paymentStatus} onChange={handlePaymentStatusChange}>
            <option value="">Select Payment Status</option>
            <option value="Success">Successful</option>
            <option value="Failed">Failed</option>
          </Form.Control>
        </Form.Group>
       
       
        <Button variant="primary" type="submit">
          Apply
        </Button>

       { /*<Link to="/AdminUI">
        <Button variant="primary" type="submit">
          NextPage
        </Button>
  </Link>*/}
      </Form>

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
    </div>
    );
  };
  
  export default PurUI;
