import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './SubHomeTwo.css'
const SubHomeTwo = () => {
    return (
        <div className=" career-section text-center mb-20px">
            <h1 className="h3-head">
                Learn as you wish!</h1>
            <h5 className='homesection2'>Academic library rich in videos, quizzes, interactive books, get professional and skill development <br /> courses always, completely free!</h5>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <div className="carD">
                            <Card.Body>
                                <Card.Text>
                                    <h2 className='fw-500' style={{ color: '#ff294f' }}>Video tutorial</h2>
                                    <h3>19,440+</h3>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="carD">
                            <Card.Body>
                                <Card.Text>
                                    <h2 className='fw-500' style={{ color: '#ff294f' }}>Quiz</h2>
                                    <h3>49,550+</h3>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="carD">
                            <Card.Body>
                                <Card.Text>
                                    <h2 className='fw-500' style={{ color: '#ff294f' }}>Note</h2>
                                    <h3>1,140+</h3>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Col>
                    <Col>
                        <div className="carD">
                            <Card.Body>
                                <Card.Text>
                                    <h2 className='fw-500' style={{ color: '#ff294f' }}>Blog</h2>
                                    <h3>1,300+</h3>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SubHomeTwo;