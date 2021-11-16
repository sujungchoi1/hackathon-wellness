import React, { useState } from 'react';
import {
    Navbar, 
    NavbarBrand, 
    Collapse, 
    Nav, 
    NavItem, 
    NavLink, 
    Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from 'react-icons/cg';

import './NavBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <Navbar
            expand="md"
            light
            className="nav-bar"
            sticky="top"
        >
            <NavbarBrand href="/">
                <h3>SUPERBLOOM</h3>
            </NavbarBrand>
            <CgMenuRightAlt onClick={toggle} className="nav-menu"/>
                <Collapse isOpen={isOpen} navbar className="dropdown">
                    <Nav
                        className=""
                        navbar
                    >
                        <NavItem className="nav-items"> 
                            <NavLink href="/">
                                Home
                            </NavLink>
                            <NavLink href="/about">
                                About
                            </NavLink>
                            <NavLink href="signup">
                                <Button className="button-class" outline>
                                    Sign Up
                                </Button>
                            </NavLink>
                            <NavLink href="login">
                                <Button className="button-class" outline>
                                    Log In
                                </Button>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    
                </Collapse>
        </Navbar>
    )
}

export default NavBar
