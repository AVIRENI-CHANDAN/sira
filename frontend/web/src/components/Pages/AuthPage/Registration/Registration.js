import React, { useEffect, useState } from 'react';
import styles from '../AuthPage.module.scss';

function Registration({ toggleToLogin }) {
  const form_title = "register";
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleAuthToggle = () => {
    console.log("Auth toggle clicked");
    toggleToLogin("login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handle registration submit");
    setError("");
    setLoading(true);

    // Ensure field names match FastAPI expectations
    const requestBody = {
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
      cnfm_pswd: confirm_password,
      email: email,
      phn_nbr: phone,
      address: address,
      city: city,
      state: state,
      zip_code: zip_code,
      country: country
    };

    try {
      const response = await fetch("/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
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
        throw new Error(`Invalid ${data.detail[0].loc[1]}`)
      }

      console.log("Registration successful", data);

    } catch (error) {
      setLoading(false);
      setError(error.message || "An error occurred");
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [error]);


  return (
    <div className={styles.FormContainerBox}>
      <div className={styles.FormContainer}>
        <div className={styles.FormWrapper}>
          <div className={styles.FormTitle}>{form_title}</div>
          <form className={styles.Form} onSubmit={handleSubmit}>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="firstname">First Name</label>
              <input className={styles.Input} type="text" id="firstname" name="firstname" value={first_name} onChange={(e) => setFirstName(e.target.value)} autoComplete="given-name" />
            </div>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="lastname">Last Name</label>
              <input className={styles.Input} type="text" id="lastname" name="lastname" value={last_name} onChange={(e) => setLastName(e.target.value)} autoComplete="family-name" />
            </div>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="username">Username</label>
              <input className={styles.Input} type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username webauthn" />
            </div>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="password">Password</label>
              <input className={styles.Input} type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
            </div>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="confirm_password">Confirm Password</label>
              <input className={styles.Input} type="password" id="confirm_password" name="confirm_password" value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="new-password" />
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
              <label className={styles.Label} htmlFor="zipcode">Zip</label>
              <input className={styles.Input} type="text" id="zipcode" name="zipcode" value={zip_code} onChange={(e) => setZipCode(e.target.value)} />
            </div>
            <div className={styles.FormGroup}>
              <label className={styles.Label} htmlFor="country">Country</label>
              <input className={styles.Input} type="text" id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>
            <button className={((username.length > 0) && (password.length > 0) && (!loading)) ? styles.SubmitBtn : styles.InactiveSubmitBtn} type="submit">{loading ? "Submitting.." : "Register"}</button>
            <div className={styles.FormError} style={{ display: error ? "block" : "none" }}>{error}</div>
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

Registration.propTypes = {};

Registration.defaultProps = {};

export default Registration;
