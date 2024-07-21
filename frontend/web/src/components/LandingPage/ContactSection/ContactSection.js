import React from 'react';
import styles from './ContactSection.module.scss';

class ContactSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactForm: {
        name: '',
        email: ''
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({
      contactForm: {
        ...this.state.contactForm,
        [name]: value
      }
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.contactForm);
    // Send form data to server
    this.setState({
      contactForm: {
        name: '',
        email: ''
      }
    });
  }
  render() {
    return (
      <section className={styles.ContactSection}>
        <div className={styles.ContactWrapper}>
          <div className={styles.ContactFormBox}>
            <h2 id="contact-heading" className={styles.ContactHeading}>Contact Us</h2>
            <div className={styles.ContactFormWrapper}>
              <form className={styles.ContactForm}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.contactForm.name}
                  onChange={this.handleInputChange}
                  autoComplete='fullname'
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.contactForm.email}
                  onChange={this.handleInputChange}
                  autoComplete='email'
                />
                <button type="submit" onClick={this.handleSubmit}>Get a Callback</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ContactSection.propTypes = {};

ContactSection.defaultProps = {};

export default ContactSection;
