import React from 'react';
import { Navbar } from "react-bootstrap";
import NavItems from "./nav-items";
import { GetMenuItems } from "../../hooks/getMenuItems";
import navigationStyles from './navigation.module.scss';
import './navigationStyles.scss';

const Navigation = () => (
    <Navbar className={navigationStyles.navBar} expand={'lg'} sticky={'top'}>
        <Navbar.Toggle className={navigationStyles.toggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <NavItems navItems={GetMenuItems().primaryNav}/>
        </Navbar.Collapse>
    </Navbar>
)

export default Navigation;
