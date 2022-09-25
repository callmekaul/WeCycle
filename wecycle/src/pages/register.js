import React from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Navbar from "../components/navbar";

const register = () => {
  return (
    <>
        <Navbar/>
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Control className="mt-3 mb-3" placeholder="First Name" />
                    </Col>
                    <Col>
                        <Form.Control className="mt-3 mb-3" placeholder="Last Name" />
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="companyName">
                    <Form.Control type="text" placeholder="Company Name" />
                </Form.Group>

                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                    <Row>
                        <Col>
                            <Form.Check
                            type="radio"
                            label="Waste Producer"
                            name="formHorizontalRadios"
                            id="producerRadio"
                            />
                        </Col>
                        <Col>
                            <Form.Check
                            type="radio"
                            label="Waste Consumer"
                            name="formHorizontalRadios"
                            id="consumer Radio"
                            />
                        </Col>
                    </Row>
                    </Form.Group>
                </fieldset>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email ID" />
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Register
                </Button>

                <Link to="/login">
                    <Button className="mx-3" variant="secondary" type="submit">
                        Existing User? Sign In 
                    </Button>
                </Link>
            </Form>
        </Container>
    </>
  )
}

export default register