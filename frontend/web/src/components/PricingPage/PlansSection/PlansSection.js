import React from 'react';
import styles from './PlansSection.module.scss';

class PlansSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotationForm: {
        fullname: '',
        email: '',
        phone: '',
        company: '',
        subscription_plan: '',
        number_of_users: '',
        additional_requirements: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      quotationForm: {
        ...prevState.quotationForm,
        [name]: value
      }
    }));
  }

  onSubmit(event) {
    event.preventDefault();
    console.log("Form submitted", this.state.quotationForm);
    this.setState({
      quotationForm: {
        fullname: '',
        email: '',
        phone: '',
        company: '',
        subscription_plan: '',
        number_of_users: '',
        additional_requirements: ''
      }
    });
    // Clear form fields after submission
    event.target.reset();
  }

  render() {
    return (
      <section className={styles.PlansSection}>
        <div className={styles.PlansWrapper}>
          <div className={styles.PlansList}>
            <div className={styles.ListItem}>
              <div className={styles.ItemTitle}>
                Request quote
              </div>
              <div className={styles.ItemWrapper}>
                <div className={styles.QuotationFormBox}>
                  <form className={styles.QuotationForm} onSubmit={this.onSubmit}>
                    <div className={styles.FormGroup}>
                      <input type='text' name='fullname' placeholder='Full name' value={this.state.quotationForm.fullname} onChange={this.handleChange} required autoComplete='name' />
                    </div>
                    <div className={styles.FormGroup}>
                      <input type="email" name="email" placeholder='Email' value={this.state.quotationForm.email} onChange={this.handleChange} required autoComplete='email' />
                    </div>
                    <div className={styles.FormGroup}>
                      <input type="text" name="phone" placeholder='Phone' value={this.state.quotationForm.phone} onChange={this.handleChange} required autoComplete='tel' />
                    </div>
                    <div className={styles.FormGroup}>
                      <input type='text' name='company' placeholder='Company name' value={this.state.quotationForm.company} onChange={this.handleChange} required autoComplete='company' />
                    </div>
                    <div className={styles.FormGroup}>
                      <select name="subscription_plan" value={this.state.quotationForm.subscription_plan} onChange={this.handleChange} required>
                        <option value="" disabled>Select a plan</option>
                        <option value="basic">Basic</option>
                        <option value="standard">Standard</option>
                        <option value="premium">Premium</option>
                      </select>
                    </div>
                    <div className={styles.FormGroup}>
                      <input type="number" placeholder="Number of users" name="number_of_users" min={0} value={this.state.quotationForm.number_of_users} onChange={this.handleChange} required autoComplete='off' />
                    </div>
                    <div className={styles.FormGroup}>
                      <textarea placeholder="Additional requirements" name="additional_requirements" rows="5" value={this.state.quotationForm.additional_requirements} onChange={this.handleChange} autoComplete='off'></textarea>
                    </div>
                    <button type='submit' className={styles.SubmitBtn}>Get quotation</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

PlansSection.propTypes = {};

PlansSection.defaultProps = {};

export default PlansSection;
