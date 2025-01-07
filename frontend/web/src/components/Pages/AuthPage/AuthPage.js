import React, { useState } from 'react';
import NavigationBar from './../../NavigationBar/NavigationBar';
import styles from './AuthPage.module.scss';

function AuthLogin({ toggleToRegister }) {
  const form_title = "login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAuthToggle = (e) => {
    e.preventDefault();
    console.log("Auth toggle clicked");
    toggleToRegister("register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handle login submit");
  };

  return (
    <>
      <div className={styles.FormContainerBox}>
        <div className={styles.FormContainer}>
          <div className={styles.FormWrapper}>
            <div className={styles.FormTitle}>{form_title}</div>
            <form className={styles.Form}>
              <div className={styles.FormGroup}>
                <label className={styles.Label} htmlFor="username">Username</label>
                <input className={styles.Input} type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className={styles.FormGroup}>
                <label className={styles.Label} htmlFor="password">Password</label>
                <input className={styles.Input} type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button className={((username.length > 0) && (password.length > 0)) ? styles.SubmitBtn : styles.InactiveSubmitBtn} onClick={handleSubmit} type="submit">Login</button>
            </form>
            <div className={styles.AuthTypeRedirectContainer}>
              <div className={styles.AuthTypeRedirect} onClick={() => handleAuthToggle("register")}>
                New User? Register here
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

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
          (auth_type === "login") ? <AuthLogin toggleToRegister={toggleAuthType} /> : "Register"
        }
      </div>
    </div>
  );
}

AuthPage.propTypes = {};

AuthPage.defaultProps = {};

export default AuthPage;
