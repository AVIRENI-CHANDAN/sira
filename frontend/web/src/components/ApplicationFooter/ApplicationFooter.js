import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ApplicationFooter.module.scss';

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
            <NavLink to="/terms" className={
              ({ isActive }) => (isActive) ? styles.ActiveLink : styles.Link
            }>Terms</NavLink>
            <NavLink to="/privacy-policy" className={
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
