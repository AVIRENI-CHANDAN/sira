import React from 'react';
import ContactFormSection from './ContactFormSection/ContactFormSection';
import ContactInfoSection from './ContactInfoSection/ContactInfoSection';
import styles from './ContactUsPage.module.scss';

class ContactUsPage extends React.Component {
  render() {
    return (
      <div className={styles.ContactUsPage}>
        <ContactInfoSection />
        <ContactFormSection />
      </div>
    );
  }
}

ContactUsPage.propTypes = {};

ContactUsPage.defaultProps = {};

export default ContactUsPage;
