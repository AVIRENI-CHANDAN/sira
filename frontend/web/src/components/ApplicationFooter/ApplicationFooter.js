import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styles from './ApplicationFooter.module.scss';
import { RouteEndpoints } from '../../Endpoints';

class ApplicationFooter extends React.Component {
  render() {
    return (
      <footer className={styles.ApplicationFooter}>
        <div className={styles.FooterWrapper}>
          <div className={styles.CopyrightWrapper}>
            <div className={styles.CopyrightSymbol}>©</div>
            <div className={styles.CompanyName}>SIRA</div>
            <div className={styles.RightReservedLine}>All rights reserved</div>
          </div>
          <div className={styles.LinksWrapper}>
            <NavLink to={RouteEndpoints.TERMS_PAGE} className={
              ({ isActive }) => (isActive) ? styles.ActiveLink : styles.Link
            }>Terms</NavLink>
            <NavLink to={RouteEndpoints.PRIVACY_POLICY_PAGE} className={
              ({ isActive }) => (isActive) ? styles.ActiveLink : styles.Link
            }>Privacy policy</NavLink>
          </div>
        </div>
      </footer>
    );
  }
}

ApplicationFooter.propTypes = {};

ApplicationFooter.defaultProps = {};

export default ApplicationFooter;
