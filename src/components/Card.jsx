import React, { useEffect, useState } from 'react';
import { useFirebase } from '../context/context';

const CardPage = () => {
    const firebase = useFirebase();

    const [formData, setFormData] = useState(null);

    useEffect(() => {
        firebase.getMySurvey().then((formData) => setFormData(formData.docs[0].data()));
    }, []);

    // console.log(formData);

    if(formData) {
  return (
    <div className='container mt-4 card'>
        <h2>CodeAlpha survey details</h2>
        <h5>Your latest survey</h5>
        <div className='container card mt-5 mb-5'>
        <p> UserID: {formData.userId} </p>
        <p> Name: {formData.firstName} {formData.lastName} </p>
        <p> Address: {formData.address} </p>
        <p> City: {formData.city}</p>
        <p> State: {formData.state} </p>
        </div>
        </div>
  )
      }
      else <h1>First Sign up and fill survey form</h1>
}

export default CardPage;
