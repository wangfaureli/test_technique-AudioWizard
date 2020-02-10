import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { UsernameContext } from "../App";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar(props) {
    const { username } = React.useContext(UsernameContext);
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        src="https://audiowizard.fr/assets/img/brand/audowizard-logo-white.png"
                        width="200"
                        className="d-inline-block align-top"
                        alt="logo audiowizard"
                    />
                </Navbar.Brand>
                <div className="ml-auto">
                    {username &&
                    <div className="user-greeting">Hello, {username}</div>}
                    {!username &&
                    <Link to="/login">
                        <Button variant="info">Login</Button>
                    </Link>}
                </div>
            </Navbar>
            
        </div>
    );
}

export default NavBar;