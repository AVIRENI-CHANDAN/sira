import PropTypes from 'prop-types';
import React from 'react';
import { ApiEndpoints } from '../../../Endpoints';
import withNavigation from '../../../withNavigate';
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
    fetch(ApiEndpoints.USER_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.loginForm)
    }).then(response => {
      return response.json();
    }).then(data => {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      const user = JSON.parse(atob(data.access_token.split('.')[1]));
      localStorage.setItem('user_role', user.sub.role);
      console.log("The user of the application", user);
      this.setState({ loginForm: { username: '', password: '' } });
      if (user.sub.role === 'super_user') {
        this.props.navigate('/super-dashboard');
      } else {
        this.props.navigate('/user-dashboard');
      }
    }).catch(error => {
      console.error('Error:', error);
    })
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
  toggleFunc: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired
};

LoginSection.defaultProps = {};

export default withNavigation(LoginSection);
