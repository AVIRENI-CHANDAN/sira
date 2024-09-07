import React from 'react';
import ModelListSection from './ModelListSection/ModelListSection';
import ModelsSection from './ModelsSection/ModelsSection';
import styles from './UserPage.module.scss';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_model: ""
    }
    this.handleModelClick = this.handleModelClick.bind(this);
  }

  handleModelClick(event) {
    const { target } = event;
    console.log("Values", target.dataset.id, target.dataset.name);
    if (this.state.active_model === target.dataset.name) {
      this.setState({ active_model: "" });
    }
    else {
      this.setState({ active_model: target.dataset.name });
    }
  }

  render() {
    return (
      <div className={styles.UserPage}>
        <section className={styles.ModelsSection}>
          <ModelListSection modelClickHandler={this.handleModelClick} active_model={this.state.active_model} />
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
