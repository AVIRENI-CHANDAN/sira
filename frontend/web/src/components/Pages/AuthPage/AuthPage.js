import React from 'react';
import NavigationBar from './../../NavigationBar/NavigationBar';
import styles from './AuthPage.module.scss';

function AuthPage() {
  return (
    <div className={styles.AuthPage} data-testid="AuthPage">
      <NavigationBar />
      AuthPage Component
    </div>
  );
}

AuthPage.propTypes = {};

AuthPage.defaultProps = {};

export default AuthPage;
