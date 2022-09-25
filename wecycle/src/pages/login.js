import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from "../components/navbar";

const login = () => {
    return (
        <>
            <Navbar/>
            <Container>
            <Form>
        
            <Form.Group className="mt-3 mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        
            <Button variant="primary" type="submit">
                Sign In
            </Button>

            <Link to="/register">
                <Button className="mx-3" variant="secondary" type="submit">
                    New User? Register 
                </Button>
            </Link>
        
            </Form>
            </Container>
        </>
      );
}

export default login