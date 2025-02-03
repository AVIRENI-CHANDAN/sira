import React, { useState } from 'react';
import styles from '../AuthPage.module.scss';

function Login({ toggleToRegister }) {
  const form_title = "Login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAuthToggle = () => {
    console.log("Auth toggle clicked");
    toggleToRegister("register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const requestBody = {
      username: username,
      password: password
    };

    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody)
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error("Invalid server response");
      }

      setLoading(false);

      if (!response.ok) {
        console.log("Data", data);
        throw new Error(`Invalid ${data.detail[0].loc[1]}` || "Login failed");
      }

      localStorage.setItem("access_token", data.access_token);
      console.log("Login successful", data);

    } catch (error) {
      setLoading(false);
      setError(error.message || "An error occurred");
    }
  };

  return (
    <div className={styles.FormContainerBox}>
      <div className={styles.FormContainer}>
        <div className={styles.FormWrapper}>
          <div className={styles.FormTitle}>{form_title}</div>
          <form className={styles.Form} onSubmit={handleSubmit}>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="username">Username</label>
              <input
                className={styles.Input}
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username webauthn"
              />
            </div>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="password">Password</label>
              <input
                className={styles.Input}
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password webauthn"
              />
            </div>
            {error && <div className={styles.ErrorMessage}>{error}</div>}
            <button
              className={(username.length > 0 && password.length > 0) ? styles.SubmitBtn : styles.InactiveSubmitBtn}
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className={styles.AuthTypeRedirectContainer}>
            <div className={styles.AuthTypeRedirect} onClick={handleAuthToggle}>
              New User? Register here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
