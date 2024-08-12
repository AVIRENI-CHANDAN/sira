import React from "react";
import { NavLink } from 'react-router-dom';
import { RouteEndpoints } from "../../../../Endpoints";
import validateToken from "../../../../validateToken";
import styles from '../NavigationMenu.module.scss';

class UnAuthorisedNavigationMenu extends React.Component {
    render() {
        const { hideMenu } = this.props;
        return (
            <>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} onClick={hideMenu} to={RouteEndpoints.LANDING_PAGE}>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} onClick={hideMenu} to={RouteEndpoints.FEATURES_PAGE}>Features</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} onClick={hideMenu} to={RouteEndpoints.PRICING_PAGE}>Pricing</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} onClick={hideMenu} to={RouteEndpoints.ABOUT_PAGE}>About Us</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} onClick={hideMenu} to={RouteEndpoints.CONTACT_PAGE}>Contact Us</NavLink>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} onClick={hideMenu} to={RouteEndpoints.AUTHENTICATION_PAGE}>Login/Signup</NavLink>
            </>
        );
    }
}

UnAuthorisedNavigationMenu.propTypes = {};

UnAuthorisedNavigationMenu.defaultProps = {};

export default validateToken(UnAuthorisedNavigationMenu);
