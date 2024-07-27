import React from 'react';
import PlansSection from './PlansSection/PlansSection';
import styles from './PricingPage.module.scss';

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
