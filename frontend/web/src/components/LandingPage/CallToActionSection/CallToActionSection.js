import React from 'react';
import PropTypes from 'prop-types';
import styles from './CallToActionSection.module.scss';
import { Link } from 'react-router-dom';

class CallToActionSection extends React.Component {
  render() {
    return (
      <section className={styles.CallToActionSection}>
        <Link to="/auth" className={styles.GetStartedBtn}>Get started</Link>
      </section>
    );
  }
}

CallToActionSection.propTypes = {};

CallToActionSection.defaultProps = {};

export default CallToActionSection;
