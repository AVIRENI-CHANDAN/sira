import React from 'react';
import styles from './IntroSection.module.scss';

class IntroSection extends React.Component {
  render() {
    return (
      <section className={styles.IntroSection}>
        <div className={styles.IntroWrapper}>
          <div className={styles.Intro}>
            SIRA offers a comprehensive suite of features designed to streamline your project management and enhance team collaboration.
          </div>
        </div>
      </section>
    );
  }
}

IntroSection.propTypes = {};

IntroSection.defaultProps = {};

export default IntroSection;
