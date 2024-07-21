import React from 'react';
import styles from './LandingPage.module.scss';
import HeadingSection from './HeadingSection/HeadingSection';

class LandingPage extends React.Component {
  render() {
    return (
      <div className={styles.LandingPage}>
        <HeadingSection />
      </div>
    );
  }
}

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
