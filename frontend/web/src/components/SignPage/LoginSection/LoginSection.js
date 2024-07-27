import PropTypes from 'prop-types';
import React from 'react';
import styles from './LoginSection.module.scss';

class LoginSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
        username: '', password: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      loginForm: {
        ...prevState.loginForm,
        [name]: value
      }
    }));
  }
  handleSubmit(event) {
    event.preventDefault();
    // Add your login logic here
    console.log("Submit login form", this.state.loginForm);
    this.setState({ loginForm: { username: '', password: '' } });
  }
  render() {
    return (
      <section className={styles.LoginSection}>
        <div className={styles.FormWrapper}>
          <form className={styles.Form} onSubmit={this.handleSubmit}>
            <div className={styles.FormGroup}>
              <input type='text' name='username' className={styles.FormFieldInput} onChange={this.handleChange} placeholder='username' autoComplete='username' required />
            </div>
            <div className={styles.FormGroup}>
              <input type='password' name='password' className={styles.FormFieldInput} onChange={this.handleChange} placeholder='password' autoComplete='current-password' required />
            </div>
            <button type='submit' className={styles.FormBtn}>Login</button>
          </form>
          <div className={styles.RegistrationRedirectLink}>
            <div className={styles.RedirectLink} onClick={this.props.toggleFunc}>
              New user? Register here
            </div>
          </div>
        </div>
      </section>
    );
  }
}

LoginSection.propTypes = {
  toggleFunc: PropTypes.func.isRequired
};

LoginSection.defaultProps = {};

export default LoginSection;
