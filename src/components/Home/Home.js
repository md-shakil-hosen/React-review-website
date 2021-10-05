import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import MainHome from '../SubHome/SubHome';
import SubHomeTwo from '../SubHomeTwo/SubHomeTwo';
import './Home.css'
const Home = () => {
    return (
        <>
            <div className="background">
                <Container>
                    <Row className="d-flex align-items-center pt-5">
                        <div className="col col-md-5">
                            <h2 className="fw-bold">
                                Easy solution to <br /> study at
                                <span className="text-span"> HOME</span>
                            </h2>
                            <Button variant="danger">Let's Learning</Button>
                        </div>
                        <div className="col col-md-7 imgHover">
                            <img style={{ marginRight: '40px' }} src="https://10minuteschool.com/assets/landing-page/studying.svg" alt="" />
                        </div>
                    </Row>
                </Container>
            </div>
            <SubHomeTwo></SubHomeTwo>
            <MainHome></MainHome>
        </>
    );
};

export default Home;