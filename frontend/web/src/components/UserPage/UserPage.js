import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import ModelListSection from './ModelListSection/ModelListSection';
import ModelsSection from './ModelsSection/ModelsSection';
import styles from './UserPage.module.scss';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active_model: "",
      active_model_objects: []
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

  componentDidUpdate() {
    console.log("UserPage Updated");
    if (this.state.active_model) {
      console.log("Active Model updated");
      fetch(`/admin/models/all/${this.state.active_model.toLowerCase()}`)
        .then(response => response.json())
        .then(data => {
          console.log("Data from response", data);
        });
    }
  }

  render() {
    return (
      <div className={styles.UserPage}>
        <section className={styles.ModelsSection}>
          <ModelListSection modelClickHandler={this.handleModelClick} active_model={this.state.active_model} />
        </section>
        <section className={styles.ModelListSection}>
          {this.state.active_model ? (
            <ModelsSection active_model={this.state.active_model} />
          ) : (
            <Dashboard />
          )}
        </section>
      </div>
    );
  }
}
UserPage.propTypes = {};

UserPage.defaultProps = {};

export default UserPage;
