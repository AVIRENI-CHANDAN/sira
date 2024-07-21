import React from 'react';
import styles from './FeatureSection.module.scss';

class FeatureSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id: 1,
          title: 'Task Management',
          description: 'Organize and prioritize your tasks effortlessly.'
        },
        {
          id: 2,
          title: "Collaboration Tools",
          description: "Communicate and collaborate with your team in real-time."
        },
        {
          id: 3,
          title: "Customizable Workflows",
          description: "Tailor your project workflows to suit your needs."
        },
        {
          id: 4,
          title: "Reporting and Analytics",
          description: "Get insights into your project’s progress with detailed reports."
        }
      ]
    };
  }

  render() {
    return (
      <section className={styles.FeatureSection}>
        <div className={styles.FeaturesWrapper}>
          <div className={styles.FeatureList}>

            {this.state.features.map((element) => (
              <div className={styles.FeatureWrapper} key={element.id}>
                <div key={element.id} className={styles.Feature}>
                  <div className={styles.FeatureTitle}>
                    {element.title}
                  </div>
                  <div className={styles.FeatureDescription}>
                    {element.description}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    );
  }
}

FeatureSection.propTypes = {};

FeatureSection.defaultProps = {};

export default FeatureSection;
