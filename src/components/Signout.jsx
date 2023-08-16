import React, { useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import { useFirebase } from '../context/context';

const Signout = () => {
    const firebase = useFirebase();
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        firebase.getMySurvey().then((formData) => setFormData(formData.docs[0].data()));
    }, []);

    if(formData) {
  return (
    <div className='container mt-5'>
        <h2> {formData.firstName} {formData.lastName} </h2>
      <Button className='my-2' onClick={firebase.userSignout} variant='danger' >Sign Out</Button>
    </div>
  )
}
}

export default Signout;
