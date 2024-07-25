import React from 'react';
import location_svg from './../../../images/location.svg';
import mail_svg from './../../../images/mail.svg';
import phone_svg from './../../../images/phone.svg';
import styles from './ContactInfoSection.module.scss';


class ContactInfoSection extends React.Component {
  render() {
    return (
      <section className={styles.ContactInfoSection}>
        <div className={styles.ContactInfoWrapper}>
          <div className={styles.ContactInfo}>
            <div className={styles.ContactInfoTitle}>Contact Information</div>
            <div className={styles.ContactInfoDescription}>If you have any questions or need assistance, feel free to contact us through any of the following methods:</div>
            <div className={styles.ContactList}>
              <div className={styles.ListItem}>
                <div className={styles.ListItemTitle}>
                  <div className={styles.TitleIconWrapper}>
                    <img src={mail_svg} alt='MailSVG' draggable={false} />
                  </div>
                </div>
                <div className={styles.ListItemValue}>
                  <a href="mailto:support@sira.com">support@sira.com</a>
                </div>
              </div>
              <div className={styles.ListItem}>
                <div className={styles.ListItemTitle}>
                  <div className={styles.TitleIconWrapper}>
                    <img src={phone_svg} alt='PhoneSVG' draggable={false} />
                  </div>
                </div>
                <div className={styles.ListItemValue}>
                  +1(123)-456-7890
                </div>
              </div>
              <div className={styles.ListItem}>
                <div className={styles.ListItemTitle}>
                  <div className={styles.TitleIconWrapper}>
                    <img src={location_svg} alt='LocationSVG' draggable={false} />
                  </div>
                </div>
                <div className={styles.ListItemValue}>
                  Address: 1234 SIRA St, Suite 100, Tech City, TC 56789
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ContactInfoSection.propTypes = {};

ContactInfoSection.defaultProps = {};

export default ContactInfoSection;
