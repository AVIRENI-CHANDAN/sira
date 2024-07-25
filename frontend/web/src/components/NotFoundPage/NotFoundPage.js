import React from 'react';
import styles from './NotFoundPage.module.scss';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className={styles.NotFoundPage}>
        NotFoundPage Component
      </div>
    );
  }
}

NotFoundPage.propTypes = {};

NotFoundPage.defaultProps = {};

export default NotFoundPage;
