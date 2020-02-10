import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

function NavBar(props) {
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
                    <Button variant="info">Login</Button>
                </div>
            </Navbar>
            
        </div>
    );
}

export default NavBar;