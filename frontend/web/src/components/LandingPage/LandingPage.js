import React from 'react';
import BenefitsSection from './BenefitsSection/BenefitsSection';
import CallToActionSection from './CallToActionSection/CallToActionSection';
import FeatureSection from './FeatureSection/FeatureSection';
import HeadingSection from './HeadingSection/HeadingSection';
import styles from './LandingPage.module.scss';
import ContactSection from './ContactSection/ContactSection';

class LandingPage extends React.Component {
  render() {
    return (
      <div className={styles.LandingPage}>
        <HeadingSection />
        <FeatureSection />
        <CallToActionSection />
        <BenefitsSection />
        <ContactSection />
      </div>
    );
  }
}

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
