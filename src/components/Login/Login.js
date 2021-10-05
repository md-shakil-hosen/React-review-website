import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    
    return (
        <div>
            <div className="signDiv">
            <h3 className="text-center mt-5">Log in first if you are signed up</h3>
            <p className="w-50 mx-auto text-center">If you are first time,please log in first with your google account.And allow all cookies and privet policy here</p>
            </div>
            <Container>
            
            <Form className="px-5 py-5 w-50 mx-auto">

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="save password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <Link to="/sign">
                    <p>new user</p>
                </Link>
            </Form>
        </Container>
        </div>
        
    );
};

export default Login;