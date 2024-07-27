import React from 'react';
import styles from './TermsPage.module.scss';

class TermsPage extends React.Component {
  render() {
    return (
      <div className={styles.TermsPage}>
        <div className={styles.TermsWrapper}>

          <section className={styles.IntroSection}>
            Welcome to SIRA, a project management application designed to help teams collaborate and manage their tasks effectively. These Terms of Service govern your use of SIRA, provided by us.
          </section>

          <section className={styles.TermsSection}>
            By accessing or using the Application, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Application.
          </section>

          <section className={styles.TermsChangeSection}>
            We reserve the right to modify these Terms at any time. We will notify you of any significant changes by posting the new Terms on our website and updating the effective date. Your continued use of the Application after such changes constitutes your acceptance of the new Terms.
          </section>

          <section className={styles.AccountsSection}>
            To use certain features of the Application, you must create an account. You agree to provide accurate and complete information during the registration process and to update such information to keep it accurate and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </section>

          <section className={styles.UserConductSection}>
            You agree to use the Application only for lawful purposes. Prohibited activities include, but are not limited to:
            <div className={styles.ConditionList}>
              <div className={styles.ListItem}>
                Posting or transmitting any content that is defamatory, obscene, or harmful.
              </div>
              <div className={styles.ListItem}>
                Using the Application to engage in harassment, stalking, or threatening others.
              </div>
              <div className={styles.ListItem}>
                Attempting to gain unauthorized access to the Application or other user accounts.
              </div>
            </div>
            Violations of these terms may result in the suspension or termination of your account.
          </section>

          <section className={styles.OwnershipSection}>
            You retain ownership of any content you submit, post, or display on or through the Application. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, modify, distribute, and display such content for the purpose of operating and providing the Application.
          </section>

          <section className={styles.IntellectualPropertySection}>
            All intellectual property rights in the Application, including but not limited to software, text, images, and trademarks, are owned by us or our licensors. You may not use, copy, modify, or distribute any part of the Application without our prior written consent.
          </section>

          <section className={styles.LiabilityLimitationSection}>
            To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of the Application.
          </section>

          <section className={styles.DisputeResolutionSection}>
            Any disputes arising out of or related to these Terms or the Application shall be resolved through binding arbitration in accordance with the rules of SIRA, rather than in court.
          </section>

          <section className={styles.GoverningLawSection}>
            These Terms shall be governed by and construed in accordance with the laws of Bharat, without regard to its conflict of law principles.
          </section>

          <section className={styles.TerminationSection}>
            We reserve the right to suspend or terminate your account at any time for any reason, including but not limited to a breach of these Terms.
          </section>

        </div>
      </div>
    );
  }
}

TermsPage.propTypes = {};

TermsPage.defaultProps = {};

export default TermsPage;
