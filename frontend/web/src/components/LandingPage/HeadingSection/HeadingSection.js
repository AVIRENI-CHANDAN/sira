import React from 'react';
import styles from './HeadingSection.module.scss';
import heading_bg from '../../../images/heading-bg.jpeg';

class HeadingSection extends React.Component {
  render() {
    return (
      <>
        <section className={styles.HeadingSection}>
          <div className={styles.Heading} style={{ backgroundImage: `url(${heading_bg})` }}>
            <div className={styles.DarkOverlay}></div>
            <h1>Streamline Your</h1>
            <h1>Project Management</h1>
            <h1>with SIRA</h1>
          </div>
        </section>

        <section className={styles.CaptionSection}>
          <div className={styles.Caption}>
            <p>
              Your ultimate tool for tracking tasks, managing projects, and collaborating with your team seamlessly.
            </p>
          </div>
        </section>
      </>
    );
  }
}

HeadingSection.propTypes = {};

HeadingSection.defaultProps = {};

export default HeadingSection;
