import React from 'react';
import styles from './ContactFormSection.module.scss';

class ContactFormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact_form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      contact_form: {
        ...this.state.contact_form,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Send form data to server
    console.log("Form submitted", this.state.contact_form);
    this.setState({
      contact_form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    });
    // Clear form fields after submission
    event.target.reset();
  }

  render() {
    return (
      <section className={styles.ContactFormSection}>
        <div className={styles.ContactFormWrapper}>
          <div className={styles.ContactFormBox}>
            <div className={styles.ContactFormTitle}>
              Send Us a Message
            </div>
            <form className={styles.ContactForm} onSubmit={this.handleSubmit}>
              <div className={styles.FormGroup}>
                <input type="text" id="name" name="name" placeholder='Name' required onChange={this.handleChange} autoComplete='name' />
              </div>
              <div className={styles.FormGroup}>
                <input type="email" id="email" name="email" placeholder='Email' required onChange={this.handleChange} autoComplete='email' />
              </div>
              <div className={styles.FormGroup}>
                <input type="text" id="subject" name="subject" placeholder='Subject' required onChange={this.handleChange} autoComplete='off' />
              </div>
              <div className={styles.FormGroup}>
                <textarea id="message" name="message" rows="5" placeholder='Message' required onChange={this.handleChange} autoComplete='off' />
              </div>
              <button type="submit" className={styles.SubmitBtn}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

ContactFormSection.propTypes = {};

ContactFormSection.defaultProps = {};

export default ContactFormSection;
