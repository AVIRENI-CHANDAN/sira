import React from 'react';
import styles from './PricingPage.module.scss';
import PlansSection from './PlansSection/PlansSection';

class PricingPage extends React.Component {
  render() {
    return (
      <div className={styles.PricingPage}>
        <PlansSection />
      </div>
    );
  }
}

PricingPage.propTypes = {};

PricingPage.defaultProps = {};

export default PricingPage;
