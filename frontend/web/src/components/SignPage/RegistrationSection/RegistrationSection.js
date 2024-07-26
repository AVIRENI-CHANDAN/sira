import PropTypes from 'prop-types';
import React from 'react';
import styles from './RegistrationSection.module.scss';

class RegistrationSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationForm: {
        full_name: '',
        company: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zip: '',
        phone: '',
        number_of_users: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        subscription_plan: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      registrationForm: {
        ...this.state.registrationForm,
        [event.target.name]: event.target.value
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    // Add your login logic here
    console.log("Submit login form", this.state.registrationForm);
    this.setState({
      registrationForm: {
        full_name: '',
        company: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zip: '',
        phone: '',
        number_of_users: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        subscription_plan: ''
      }
    });
  }
  render() {
    return (
      <section className={styles.RegistrationSection}>
        <div className={styles.FormWrapper}>
          <form className={styles.Form} onSubmit={this.handleSubmit}>
            <div className={styles.FormGroup}>
              <div className={styles.FormInput}>
                <input type='text' name='full_name' className={styles.FormFieldInput} onChange={this.handleChange} value={this.state.registrationForm.full_name} placeholder='Full Name' autoComplete='name' required />
              </div>
            </div>
            <fieldset className={styles.FormGroup}>
              <legend>Organization</legend>
              <div className={styles.FormInput}>
                <input type='text' name='company' className={styles.FormFieldInput} onChange={this.handleChange} value={this.state.registrationForm.company} placeholder='Company' autoComplete='organization' required />
              </div>
              <div className={styles.FormInput}>
                <input type='text' name='address' className={styles.FormFieldInput} onChange={this.handleChange} value={this.state.registrationForm.address} placeholder='Address' autoComplete='street-address' required />
              </div>
              <div className={styles.FormInput}>
                <input type='text' name='city' className={styles.FormFieldInput} onChange={this.handleChange} value={this.state.registrationForm.city} placeholder='City' autoComplete='address-level2' required />
              </div>
              <div className={styles.FormInput}>
                <input type='text' name='state' className={styles.FormFieldInput} onChange={this.handleChange} value={this.state.registrationForm.state} placeholder='State' autoComplete='address-level1' required />
              </div>
              <div className={styles.FormInput}>
                <input type='text' name='country' className={styles.FormFieldInput} onChange={this.handleChange} value={this.state.registrationForm.country} placeholder='Country' autoComplete='country-name' required />
              </div>
              <div className={styles.FormInput}>
                <input type='text' name='zip' className={styles.FormFieldInput} onChange={this.handleChange} value={this.state.registrationForm.zip} placeholder='Zipcode' autoComplete='postal-code' required />
              </div>
              <div className={styles.FormInput}>
                <input type='text' name='phone' className={styles.FormFieldInput} onChange={this.handleChange} value={this.state.registrationForm.phone} placeholder='Phone' autoComplete='tel' required />
              </div>
              <div className={styles.FormInput}>
                <input type='number' name='number_of_users' className={styles.FormFieldInput} onChange={this.handleChange} value={this.state.registrationForm.number_of_users} placeholder='Number of Users' autoComplete='off' required />
              </div>
              <div className={styles.FormInput}>
                <input type='email' name='email' className={styles.FormFieldInput} onChange={this.handleChange} value={this.state.registrationForm.email} placeholder='Email' autoComplete='email' required />
              </div>
            </fieldset>
            <fieldset className={styles.FormGroup}>
              <legend>Credentials</legend>
              <div className={styles.FormInput}>
                <input type='text' name='username' className={styles.FormFieldInput} onChange={this.handleChange} value={this.state.registrationForm.username} placeholder='Username' autoComplete='username' required />
              </div>
              <div className={styles.FormInput}>
                <input type='password' name='password' className={styles.FormFieldInput} onChange={this.handleChange} value={this.state.registrationForm.password} placeholder='Password' autoComplete='new-password' required />
              </div>
              <div className={styles.FormInput}>
                <input type='password' name='confirm_password' className={styles.FormFieldInput} onChange={this.handleChange} value={this.state.registrationForm.confirm_password} placeholder='Confirm Password' autoComplete='new-password' required />
              </div>
            </fieldset>
            <div className={styles.FormGroup}>
              <div className={styles.FormInput}>
                <select name="subscription_plan" className={styles.FormFieldInput} onChange={this.handleChange} value={this.state.registrationForm.subscription_plan} required>
                  <option value="" disabled>Select a plan</option>
                  <option value="basic">Basic</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
            </div>
            <button type="submit" className={styles.FormBtn}>Register</button>
          </form>
          <div className={styles.LoginRedirectLink}>
            <div className={styles.RedirectLink} onClick={this.props.toggleFunc}>
              Already user? Login here
            </div>
          </div>
        </div>
      </section>
    );
  }
}

RegistrationSection.propTypes = {
  toggleFunc: PropTypes.func.isRequired
};

RegistrationSection.defaultProps = {};

export default RegistrationSection;
