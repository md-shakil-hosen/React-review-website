import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-custom text-light text-center pt-5 cusFooter">
            <Container className="footerGrid">
                <div>
                    <h3 className="text-start">SOL</h3>
                    <ul className="d-block p-0 m-0">
                        <Link to="/facebook">Facebook</Link> <br />
                        <Link to="/facebook">YouTube</Link> <br />
                        <Link to="/facebook">LinkedIn</Link>
                    </ul>
                </div>
                <div>
                    <h3 className="text-start">Company</h3>
                    <ul className="d-block p-0 m-0">
                        <li>Privacy policy</li>
                        <li>Terms of use</li>
                        <li>Refund policy</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-start">Crash Course</h3>
                    <ul className="d-block p-0 m-0">
                        <li>SSC Crash Course 2022</li>
                        <li>HSC Crash Course 2021</li>
                        <li>HSC Crash Course 2022</li>
                        <li>Pre Admission Medical 2021</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-start">Popular</h3>
                    <ul className="d-block p-0 m-0">
                        <li>English Grammar</li>
                        <li>Microsoft PowerPoint</li>
                        <li>Facebook Marketing</li>
                    </ul>
                </div>
            </Container>
            <hr className="fw-5" />
            <p className="p-0 m-0">Alright reserved by Shakil Mahmud</p>
        </div>
    );
};

export default Footer;