import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const SideBar = (props) => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs="3" md="2">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </Col>
                    <Col xs="9" md="10">{props.children}</Col>
                </Row>
            </Container>
        </div>
    );
}

export default SideBar;