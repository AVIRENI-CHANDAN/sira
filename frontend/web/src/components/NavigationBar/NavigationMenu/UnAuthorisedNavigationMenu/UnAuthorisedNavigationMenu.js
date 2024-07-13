import React from "react";
import { NavLink } from 'react-router-dom';
import styles from '../NavigationMenu.module.scss';

class UnAuthorisedNavigationMenu extends React.Component {
    render() {
        return (
            <div className={styles.NavigationMenuList}>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} to="/features">Features</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} to="/pricing">Pricing</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} to="/about">About Us</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} to="/contact">Contact Us</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} to="/auth">Login/Signup</NavLink>
            </div>
        );
    }
}

UnAuthorisedNavigationMenu.propTypes = {};

UnAuthorisedNavigationMenu.defaultProps = {};

export default UnAuthorisedNavigationMenu;
