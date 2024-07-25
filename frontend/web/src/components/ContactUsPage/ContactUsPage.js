import React from 'react';
import styles from './ContactUsPage.module.scss';
import ContactInfoSection from './ContactInfoSection/ContactInfoSection';
import ContactFormSection from './ContactFormSection/ContactFormSection';

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
