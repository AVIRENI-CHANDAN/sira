import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/terms" className={styles.Link}>Terms</Link>
            <Link to="/privacy-policy" className={styles.Link}>Privacy policy</Link>
          </div>
        </div>
      </footer>
    );
  }
}

ApplicationFooter.propTypes = {};

ApplicationFooter.defaultProps = {};

export default ApplicationFooter;
