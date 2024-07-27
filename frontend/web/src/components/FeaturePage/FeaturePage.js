import React from 'react';
import styles from './FeaturePage.module.scss';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import IntroSection from './IntroSection/IntroSection';

class FeaturePage extends React.Component {
  render() {
    return (
      <div className={styles.FeaturePage}>
        <IntroSection />
        <FeaturesSection />
      </div>
    );
  }
}

FeaturePage.propTypes = {};

FeaturePage.defaultProps = {};

export default FeaturePage;
