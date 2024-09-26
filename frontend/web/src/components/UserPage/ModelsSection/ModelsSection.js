import React from 'react';
import styles from './ModelsSection.module.scss';

class ModelsSection extends React.Component {
  componentDidMount() {
    console.log("Component ModelsSection mounted");
  }
  componentDidUpdate() {
    console.log("Component ModelsSection updated");
  }
  render() {
    return (
      <div className={styles.ModelsSection}>
        ModelsSection Component - {this.props.active_model}
      </div>
    );
  }
}

ModelsSection.propTypes = {};

ModelsSection.defaultProps = {};

export default ModelsSection;
