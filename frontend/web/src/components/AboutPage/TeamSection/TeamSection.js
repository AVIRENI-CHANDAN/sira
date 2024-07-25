import React from 'react';
import styles from './TeamSection.module.scss';

class TeamSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMembers: [
        {
          id: 1,
          name: 'Avireni Chandan',
          role: 'Software Engineer',
          image: 'chandan.jpeg'
        },
        {
          id: 2,
          name: 'Jane Smith',
          role: 'Project Manager',
          image: 'chandan.jpeg'
        }
      ]
    }
  }
  render() {
    return (
      <section className={styles.TeamSection}>
        <div className={styles.TeamWrapper}>
          <div className={styles.TeamContainer}>
            <div className={styles.Title}>Our Team</div>
            <div className={styles.TeamList}>
              {this.state.teamMembers.map((member, member_id) => (
                <div key={member_id} className={styles.TeamMember}>
                  <div className={styles.ImageWrapper}>
                    <img src={`/images/${member.image}`} alt={member.name} />
                  </div>
                  <div className={styles.DetailsWrapper}>
                    <div className={styles.Name}>{member.name}</div>
                    <div className={styles.Role}>{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

TeamSection.propTypes = {};

TeamSection.defaultProps = {};

export default TeamSection;
