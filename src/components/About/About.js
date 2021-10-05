import React from 'react';
import { Accordion, Container, } from 'react-bootstrap';
import './About.css'
const About = () => {
    return (
        <>
            <Container className="text-center">

                <h1 className="mb-3 text-danger ">About Us</h1>
                {/* FQA According  */}
                <Accordion className="my-5" defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is Sopno Academy</Accordion.Header>
                        <Accordion.Body>
                            <p>  The platform covers academic classes from classes 1 to 12 covering the entire academic syllabus of the Bangladesh schooling system, university admission subjects covering different branches of study, and skills training.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Achievement</Accordion.Header>
                        <Accordion.Body>Bangladesh's largest online school, Sonpno Online Academy has launched Digital Masterclass, a certification course model with the objective to offer quality education content to students across the country for free of cost.
                            <h4>Rani Elizabath Aword</h4>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Location</Accordion.Header>
                        <Accordion.Body>Details from Google Maps <br />
                            London city<br />
                            +250 724 123 139
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </>
    );
};

export default About;