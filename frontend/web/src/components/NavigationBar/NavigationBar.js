import React from 'react';
import logo_svg from '../../images/logo.svg';
import styles from './NavigationBar.module.scss';
import NavigationMenu from './NavigationMenu/NavigationMenu';

class NavigationBar extends React.Component {
  render() {
    return (
      <header className={styles.NavigationBar}>
        <div className={styles.LogoContainer}>
          <div className={styles.LogoWrapper}>
            <img src={logo_svg} alt="svg-logo" draggable={false} />
          </div>
        </div>
        <div className={styles.NavigationMenuContainer}>
          <NavigationMenu />
        </div>
      </header>
    );
  }
}

NavigationBar.propTypes = {};

NavigationBar.defaultProps = {};

export default NavigationBar;
