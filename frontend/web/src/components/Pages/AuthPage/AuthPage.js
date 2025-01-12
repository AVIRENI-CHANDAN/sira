import React, { useState } from 'react';
import NavigationBar from './../../NavigationBar/NavigationBar';
import styles from './AuthPage.module.scss';

function AuthLogin({ toggleToRegister }) {
  const form_title = "login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAuthToggle = () => {
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
                <input className={styles.Input} type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username webauthn" />
              </div>
              <div className={styles.FormGroup}>
                <label className={styles.Label} htmlFor="password">Password</label>
                <input className={styles.Input} type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password webauthn" />
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

function AuthRegister({ toggleToLogin }) {
  const form_title = "register";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  const handleAuthToggle = () => {
    console.log("Auth toggle clicked");
    toggleToLogin("login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handle registration submit");
  };

  return (
    <div className={styles.FormContainerBox}>
      <div className={styles.FormContainer}>
        <div className={styles.FormWrapper}>
          <div className={styles.FormTitle}>{form_title}</div>
          <form className={styles.Form} onSubmit={handleSubmit}>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="username">Username</label>
              <input className={styles.Input} type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username webauthn" />
            </div>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="password">Password</label>
              <input className={styles.Input} type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password webauthn" />
            </div>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="confirm_password">Confirm Password</label>
              <input className={styles.Input} type="password" id="confirm_password" name="confirm_password" value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="new-password webauthn" />
            </div>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="email">Email</label>
              <input className={styles.Input} type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="phone">Phone</label>
              <input className={styles.Input} type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="address">Address</label>
              <input className={styles.Input} type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="city">City</label>
              <input className={styles.Input} type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="state">State</label>
              <input className={styles.Input} type="text" id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} />
            </div>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="zip">Zip</label>
              <input className={styles.Input} type="text" id="zip" name="zip" value={zip} onChange={(e) => setZip(e.target.value)} />
            </div>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="country">Country</label>
              <input className={styles.Input} type="text" id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>
            <button className={((username.length > 0) && (password.length > 0)) ? styles.SubmitBtn : styles.InactiveSubmitBtn} type="submit">Register</button>
          </form>
          <div className={styles.AuthTypeRedirectContainer}>
            <div className={styles.AuthTypeRedirect} onClick={() => handleAuthToggle("login")}>
              Already user? Login here
            </div>
          </div>
        </div>
      </div>
    </div>
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
          (auth_type === "login") ? <AuthLogin toggleToRegister={toggleAuthType} /> : <AuthRegister toggleToLogin={toggleAuthType} />
        }
      </div>
    </div>
  );
}

AuthPage.propTypes = {};

AuthPage.defaultProps = {};

export default AuthPage;
