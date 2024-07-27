import React from 'react';
import styles from './PrivacyPolicyPage.module.scss';

class PrivacyPolicyPage extends React.Component {
  render() {
    return (
      <div className={styles.PrivacyPolicyPage}>
        <div className={styles.PolicyWrapper}>

          <section className={styles.IntroSection}>
            We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use SIRA.
          </section>

          <section className={styles.InformationSection}>
            We collect the following types of information:
            <div className={styles.InformationGroups}>

              <div className={styles.Group}>
                <div className={styles.Title}>Personal Data</div>
                <div className={styles.Description}>
                  When you create an account, we may collect your name, email address, and other contact information.
                </div>
              </div>

              <div className={styles.Group}>
                <div className={styles.Title}>Usage Data</div>
                <div className={styles.Description}>
                  We collect information about your interactions with the Application, such as pages visited, actions taken, and the time and date of your activities.
                </div>
              </div>

              <div className={styles.Group}>
                <div className={styles.Title}>Usage</div>
                <div className={styles.Description}>
                  We use cookies and similar tracking technologies to enhance your experience and gather information about your usage patterns.
                </div>
              </div>

            </div>
          </section>

          <section className={styles.InformationSection}>
            We use the information we collect to:
            <div className={styles.InformationList}>
              <div className={styles.ListItem}>
                Provide, maintain, and improve the Application.
              </div>
              <div className={styles.ListItem}>
                Communicate with you, including sending updates, security alerts, and support messages.
              </div>
              <div className={styles.ListItem}>
                Analyze usage trends and user behavior to improve our services.
              </div>
            </div>
          </section>

          <section className={styles.InformationSharingSection}>
            We do not share your personal information with third parties except in the following circumstances:
            <div className={styles.SharingList}>
              <div className={styles.ListItem}>
                With your consent.
                With service providers who perform services on our behalf.
              </div>
              <div className={styles.ListItem}>
                To comply with legal obligations or respond to lawful requests by public authorities.
              </div>
              <div className={styles.ListItem}>
                To protect and defend our rights and property.
              </div>
            </div>
          </section>

          <section className={styles.DataSecuritySection}>
            We implement appropriate technical and organizational measures to protect your information from unauthorized access, use, or disclosure.
          </section>

          <section className={styles.UserRightsSection}>
            You have the right to:
            <div className={styles.RightsList}>
              <div className={styles.ListItem}>
                Access the personal information we hold about you.
              </div>
              <div className={styles.ListItem}>
                Request correction of any inaccurate or incomplete information.
              </div>
              <div className={styles.ListItem}>
                Request deletion of your personal information.
              </div>
              <div className={styles.ListItem}>
                Object to the processing of your personal information.
              </div>
              <div className={styles.ListItem}>
                Request the transfer of your personal information to another service provider.
              </div>
            </div>
          </section>

          <section className={styles.TrackingSection}>
            We use cookies and similar tracking technologies to enhance your experience on our Application. You can control the use of cookies through your browser settings.
          </section>

          <section className={styles.ThirdPartyLinkSection}>
            Our Application may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites.
          </section>

          <section className={styles.PrivacyPolicyChangeSection}>
            We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the effective date.
          </section>

        </div>
      </div>
    );
  }
}

PrivacyPolicyPage.propTypes = {};

PrivacyPolicyPage.defaultProps = {};

export default PrivacyPolicyPage;
