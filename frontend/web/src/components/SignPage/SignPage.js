import React from 'react';
import styles from './SignPage.module.scss';
import LoginSection from './LoginSection/LoginSection';
import RegistrationSection from './RegistrationSection/RegistrationSection';

class SignPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginPage: true
    };
    this.setToLoginPage = this.setToLoginPage.bind(this);
    this.setToRegistrationPage = this.setToRegistrationPage.bind(this);
  }
  setToLoginPage() {
    this.setState({ isLoginPage: true });
  }
  setToRegistrationPage() {
    this.setState({ isLoginPage: false });
  }
  render() {
    return (
      <div className={styles.SignPage}>
        <div className={styles.SignWrapper}>
          {this.state.isLoginPage ? (
            <LoginSection toggleFunc={this.setToRegistrationPage} />
          ) : (
            <RegistrationSection toggleFunc={this.setToLoginPage} />
          )}
        </div>
      </div>
    );
  }
}

SignPage.propTypes = {};

SignPage.defaultProps = {};

export default SignPage;
