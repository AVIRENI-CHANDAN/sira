import React, { useState } from 'react';
import NavigationBar from './../../NavigationBar/NavigationBar';
import styles from './AuthPage.module.scss';
import Login from './Login/Login';
import Registration from './Registration/Registration';

function AuthPage() {
  const [auth_type, setAuthType] = useState('login');

  const toggleAuthType = (value) => {
    console.log("Setting type to", value);
    setAuthType(value);
  }

  return (
    <div className={styles.AuthPage} data-testid="AuthPage">
      <NavigationBar />
      <div className={styles.Container}>
        {
          (auth_type === "login") ? <Login toggleToRegister={toggleAuthType} /> : <Registration toggleToLogin={toggleAuthType} />
        }
      </div>
    </div>
  );
}

AuthPage.propTypes = {};

AuthPage.defaultProps = {};

export default AuthPage;
