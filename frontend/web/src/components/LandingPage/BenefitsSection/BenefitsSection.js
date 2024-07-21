import React from 'react';
import styles from './BenefitsSection.module.scss';

class BenefitsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      benifits: [
        {
          id: 1,
          question: "Tired of managing projects across multiple tools?",
          content: [
            "SIRA brings everything into one place, making project management simpler and more efficient."
          ]
        }
      ]
    }
  }
  render() {
    return (
      <section className={styles.BenefitsSection}>
        <div className={styles.BenefitsWrapper}>
          <div className={styles.BenefitsList}>

            {this.state.benifits.map((benefit) => (
              <div className={styles.Benefit} key={benefit.id}>
                <div className={styles.BenefitSegmentQuestion}>{benefit.question}</div>
                {benefit.content.map((benefit_segment, benefit_segment_index) => (
                  <div className={styles.BenefitSegment} key={benefit_segment_index}>{benefit_segment}</div>
                ))}
              </div>
            ))}

          </div>
        </div>
      </section>
    );
  }
}

BenefitsSection.propTypes = {};

BenefitsSection.defaultProps = {};

export default BenefitsSection;
