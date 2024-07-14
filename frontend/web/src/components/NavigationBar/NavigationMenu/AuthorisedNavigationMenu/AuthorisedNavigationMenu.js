import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../NavigationMenu.module.scss';

class AuthorisedNavigationMenu extends React.Component {
    render() {
        const { hideMenu } = this.props;
        return (<>
            <NavLink className={({ isActive }) => (isActive) ? styles.ActiveMenuItem : styles.NavMenuItem} onClick={hideMenu} to="/user/home">Home</NavLink>
        </>);
    }
}

AuthorisedNavigationMenu.propTypes = {};

AuthorisedNavigationMenu.defaultProps = {};

export default AuthorisedNavigationMenu;
