import React from 'react';
import logo_64 from '../../images/logo64.png';
import styles from './NavigationBar.module.scss';

class NavigationBar extends React.Component {
  render() {
    return (
      <header className={styles.NavigationBar}>
        <div className={styles.LogoContainer}>
          <div className={styles.LogoWrapper}>
            <img src={logo_64} alt="64Logo" />
          </div>
        </div>
      </header>
    );
  }
}

NavigationBar.propTypes = {};

NavigationBar.defaultProps = {};

export default NavigationBar;
