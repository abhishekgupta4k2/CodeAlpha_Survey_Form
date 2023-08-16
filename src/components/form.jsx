import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useFirebase } from "../context/context";
import { useNavigate } from "react-router-dom";

const MyForm = () => {

  const firebase = useFirebase();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const [isMale, setIsMale] = useState(null);

  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    if(firstName!=="" && lastName!=="" && city!=="" && state!=="" && address!=="") { await firebase.handleCreateNewListing(firstName, lastName, city, state, zip, address, comment, isMale);
    setFirstName("");
    setLastName("");
    setCity("");
    setState("");
    setZip("");
    setAddress("");
    setComment("");
    setIsMale(null);
    alert("Form data successfully submitted....");
    navigate("/survey/details"); }
  };

  return (
    <div className="container mt-2">
      <h1>Survey Form</h1>
      <Form
        className="container mt-5"
        noValidate
        // validated={validated}
        // onSubmit={handleSubmit}
        onSubmit={handleSubmit2}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control onChange={(e) => setFirstName(e.target.value)}
            value={firstName} type="text" placeholder="Enter your first name" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control onChange={(e) => setLastName(e.target.value)}
            value={lastName} type="text" placeholder="Enter your last name" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-3" as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control onChange={(e) => setCity(e.target.value)}
            value={city} type="text" placeholder="Enter your city"  required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-3" as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control onChange={(e) => setState(e.target.value)}
            value={state} type="text" placeholder="Enter your state"  required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-3" as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control onChange={(e) => setZip(e.target.value)}
            value={zip} type="text" placeholder="Enter your zipcode"  required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Gender
          </Form.Label>
          <Col sm={10}>

            <Form.Check
            className="mt-2"
              onChange={(e) => setIsMale(true)}
              type="radio"
              label="Male"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              onChange={(e) => setIsMale(true)}
              label="Female"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            </Col>
          
        </Form.Group>
      </fieldset>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Are you a student?" />
        </Col>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control onChange={(e) => setAddress(e.target.value)}
            value={address} type="text" placeholder="Enter your address" />
      </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comments</Form.Label>
          <Form.Control onChange={(e) => setComment(e.target.value)}
            value={comment} as="textarea" rows={3} />
        </Form.Group>
        <Button type="submit">Submit Form</Button>
      </Form>
    </div>
  );
};

export default MyForm;
