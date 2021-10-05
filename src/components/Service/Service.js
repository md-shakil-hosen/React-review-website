import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllService from '../AllService/AllService';
import './Service.css'
const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./details.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div className="serviceBackdround">
                <h2 className="text-center text-dark"><span style={{ fontSize: '4rem' }}> <span className="text-danger">Skill</span> Development</span></h2>
                <p className="text-center w-50 mx-auto text-dark">When I was in high school, I was always more motivated to get homework and studying done on days I had practice or a game. On days when I had nothing going on after school, it felt like I had unlimited time to get everything done, so it was easier to put it off.
                </p>
            </div>
            <Container>

                <Row xs={1} md={3} className="g-4 pb-5">
                    {
                        services.map(service => <AllService key={service.id} service={service}></AllService>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Service;