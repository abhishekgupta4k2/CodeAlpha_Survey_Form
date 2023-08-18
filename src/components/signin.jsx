import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/context';


const Signin = () => {

  const navigate = useNavigate();
  const firebase = useFirebase();

  useEffect(() => {           
    if(firebase.isLoggedIn) {                               
        navigate("/survey/form");
    }
}, [firebase, navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();                      // When we submit a form then it refresh the page so it prevent to refresh the page.
    console.log(" Login in a user....")
    const result = await firebase.loginWithEmailAndPassword(email, password);
    console.log("successful", result);
}

  return (
    <div>
      <h4 className='container mt-4'>Signin for the survey form</h4>
      <Form className='container mt-5' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Enter password" />
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 8, offset: 2 }}>
          <Button type="submit">Sign In</Button>
          <h5 className='mt-2'>OR</h5>
          <Button onClick={firebase.signinWithGoogle} >Google Signin</Button>
        </Col>
      </Form.Group>
    </Form>

    </div>
  )
}

export default Signin;
