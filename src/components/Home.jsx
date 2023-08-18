import React, { useEffect, useState } from "react";
import CardGroup from 'react-bootstrap/CardGroup';              // For making the cards in grid formate without it card is appear one by one in a vertical line

import { useFirebase } from "../context/Firebase";
import BookCard from "../components/Card";

const HomePage = () => {

    const firebase = useFirebase();

    const [formData, setFormData] = useState([]);

    useEffect(() => {
        firebase.getMySurvey().then((formData) => setFormData(formData.docs));
    })

    return (
        <div className="container mt-5" >
                <CardGroup>

            {
                formData.map((formdata) => (
                    < BookCard key={formdata.id} id={formdata.id} {...formdata.data()} />
                ))
            }
                </CardGroup>

        </div>
    )
}

export default HomePage;