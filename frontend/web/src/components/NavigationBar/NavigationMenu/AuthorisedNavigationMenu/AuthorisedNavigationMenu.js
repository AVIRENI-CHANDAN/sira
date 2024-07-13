import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../NavigationMenu.module.scss';

class AuthorisedNavigationMenu extends React.Component {
    render() {
        return (
            <div className={styles.NavigationMenuList}>
                <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} to="/user/home">Home</NavLink>
            </div>
        );
    }
}

AuthorisedNavigationMenu.propTypes = {};

AuthorisedNavigationMenu.defaultProps = {};

export default AuthorisedNavigationMenu;
