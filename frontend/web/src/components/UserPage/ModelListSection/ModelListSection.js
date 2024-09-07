import React from 'react';
import styles from './ModelListSection.module.scss';

class ModelListSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      models: []
    };
  }

  componentDidMount() {
    console.log('ModelListSection component loaded');
    const access_token = localStorage.getItem('access_token');
    const refresh_token = localStorage.getItem('refresh_token');
    fetch("/admin/models/list")
      .then(response => response.json())
      .then(data => data['models'])
      .then(result => {
        this.setState({ models: result });
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  render() {
    return (
      <div className={styles.ModelListSection}>
        <div className={styles.ModelListWrapper}>
          <div className={styles.ModelsList}>
            {this.state.models.map((item, ind) => (
              <div className={`${styles.Model} ${(this.props.active_model === item) ? styles.ActiveModel : ''
                }`} data-name={item} data-id={ind} key={ind} onClick={this.props.modelClickHandler}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

ModelListSection.propTypes = {};

ModelListSection.defaultProps = {};

export default ModelListSection;
