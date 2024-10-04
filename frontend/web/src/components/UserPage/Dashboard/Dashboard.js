import React from 'react';
import withNavigation from '../../../withNavigate';
import styles from './Dashboard.module.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model_counts: [],
      total_count: 0
    };
  }
  componentDidMount() {
    const access_token = localStorage.getItem('access_token');
    fetch("/admin/models/all/count",
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        }
      }
    )
      .then(response => response.json())
      .then(data => data['model_counts'])
      .then(data => {
        console.log("Data", data, typeof (data));
        this.setState({ model_counts: data });
        let total_object_count = 0;
        if (data) {
          Object.entries(data).forEach(([key, value]) => {
            total_object_count += value;
          });
          this.setState({ total_count: total_object_count });
        }
      });
    // .then(data => {
    //   // this.setState({ total_count: data["count"] });
    //   console.log("Sound", data);
    // });
  }
  render() {
    if (this.state.model_counts) {
      return (
        <div className={styles.Dashboard}>
          <div className={styles.ModelsCountContainer}>
            <div className={styles.ModelCountBox}>
              <div className={styles.Title}>Total</div>
              <div className={styles.Count}>{this.state.total_count}</div>
            </div>
            {Object.entries(this.state.model_counts).map(([key, value]) => (
              <div className={styles.ModelCountBox} key={key}>
                <div className={styles.Title}>{key}</div>
                <div className={styles.Count}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return this.props.navigate("/auth");
  }
}

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default withNavigation(Dashboard);
