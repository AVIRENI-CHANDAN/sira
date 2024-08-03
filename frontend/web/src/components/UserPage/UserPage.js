import React from 'react';
import styles from './UserPage.module.scss';

class UserPage extends React.Component {
  render() {
    return (
      <div className={styles.UserPage}>
        UserPage Component
      </div>
    );
  }
}

UserPage.propTypes = {};

UserPage.defaultProps = {};

export default UserPage;
