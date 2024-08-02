import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CallToActionSection.module.scss';
import { RouteEndpoints } from '../../../Endpoints';

class CallToActionSection extends React.Component {
  render() {
    return (
      <section className={styles.CallToActionSection}>
        <Link to={RouteEndpoints.AUTHENTICATION_PAGE} className={styles.GetStartedBtn}>Get started</Link>
      </section>
    );
  }
}

CallToActionSection.propTypes = {};

CallToActionSection.defaultProps = {};

export default CallToActionSection;
