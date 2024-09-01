import React from 'react';
import ModelListSection from './ModelListSection/ModelListSection';
import ModelsSection from './ModelsSection/ModelsSection';
import styles from './UserPage.module.scss';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleModelClick = this.handleModelClick.bind(this);
  }

  handleModelClick(event) {
    const { target } = event;
    console.log("Values", target.dataset.id, target.dataset.name);
  }

  render() {
    return (
      <div className={styles.UserPage}>
        <section className={styles.ModelsSection}>
          <ModelListSection modelClickHandler={this.handleModelClick} />
        </section>
        <section className={styles.ModelListSection}>
          <ModelsSection />
        </section>
      </div>
    );
  }
}

UserPage.propTypes = {};

UserPage.defaultProps = {};

export default UserPage;
