import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignIn.css'


const SignIn = () => {
    return (

        // sign in page start 
        <>
            <div className="signDiv">
                <h3 className="text-center">Please sign in first</h3>
                <p className="w-50 mx-auto text-center">If you are first time,please sign in first with your google account.And allow all cookies and privet policy here</p>
            </div>
            <Container>
                <Form className="px-5 py-5 w-50 mx-auto">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="save password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                    <Link to="/log">
                        <p>signed in</p>
                    </Link>
                </Form>
            </Container>
        </>
        // sign in page start 
    );
};

export default SignIn;