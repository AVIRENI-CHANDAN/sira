import React from "react";
import { NavLink } from 'react-router-dom';
import styles from '../NavigationMenu.module.scss';

class UnAuthorisedNavigationMenu extends React.Component {
    render() {
        const { hideMenu } = this.props;
        return (
            <>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} onClick={hideMenu} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} onClick={hideMenu} to="/features">Features</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} onClick={hideMenu} to="/pricing">Pricing</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} onClick={hideMenu} to="/about">About Us</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} onClick={hideMenu} to="/contact">Contact Us</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} onClick={hideMenu} to="/auth">Login/Signup</NavLink>
            </>
        );
    }
}

UnAuthorisedNavigationMenu.propTypes = {};

UnAuthorisedNavigationMenu.defaultProps = {};

export default UnAuthorisedNavigationMenu;
