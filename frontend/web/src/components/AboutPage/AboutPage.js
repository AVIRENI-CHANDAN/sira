import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutPage.module.scss';
import TeamSection from './TeamSection/TeamSection';

class AboutPage extends React.Component {
  render() {
    return (
      <div className={styles.AboutPage}>
        <TeamSection />
      </div>
    );
  }
}

AboutPage.propTypes = {};

AboutPage.defaultProps = {};

export default AboutPage;
