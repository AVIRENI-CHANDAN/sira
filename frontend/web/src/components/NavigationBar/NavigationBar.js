import React from 'react';
import logo from '../../images/task-runners-svgrepo-com.svg';
import styles from './NavigationBar.module.scss';

function NavigationBar() {
  return (
    <div className={styles.NavigationBar} data-testid="NavigationBar">
      <div className={styles.LogoContainer}>
        <div className={styles.LogoWrapper}>
          <div className={styles.LogoImageBox}>
            <img src={logo} className={styles.LogoImage} alt='LogoImage' />
          </div>
        </div>
        <div className={styles.TitleWrapper}>
          <div className={styles.TitleBox}>
            <div className={styles.Title}>
              Sira
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ActionContainer}>
        <div className={styles.ActionWrapper}>
          <div className={styles.ActionsBox}>
            <div className={styles.ActionButton}>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
}

NavigationBar.propTypes = {};

NavigationBar.defaultProps = {};

export default NavigationBar;
