import React from 'react';
import styles from './FeaturesSection.module.scss';

class FeaturesSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          "name": "Task Management",
          "groups": [
            {
              "name": "Task Boards",
              "description": "Visualize your tasks with customizable boards that allow you to organize and prioritize work efficiently.",
              "highlight": "Drag-and-drop functionality, color-coded tasks, and status indicators."
            },
            {
              "name": "Task Assignment",
              "description": "Assign tasks to team members, set deadlines, and monitor progress in real-time.",
              "highlight": "Automatic notifications and reminders."
            }
          ]
        },
        {
          "name": "Collaboration Tools",
          "groups": [
            {
              "name": "Real - Time Collaboration",
              "description": "Work together with your team in real-time, ensuring everyone is on the same page.",
              "highlight": "Live updates, shared documents, and instant feedback."
            },
            {
              "name": "Team Communication",
              "description": "Integrated chat and messaging system to facilitate seamless communication within your team.",
              "highlight": "Group chats, direct messages, and file sharing."
            }
          ]
        },
        {
          "name": "Project Tracking",
          "groups": [
            {
              "name": "Milestones and Deadlines",
              "description": "Set and track project milestones to ensure timely completion of tasks.",
              "highlight": "Visual timeline view and milestone notifications."
            },
            {
              "name": "Progress Tracking",
              "description": "Monitor project progress with detailed status updates and progress bars.",
              "highlight": "Real-time progress indicators and custom progress reports."
            }
          ]
        },
        {
          "name": "Customization",
          "groups": [
            {
              "name": "Custom Workflows",
              "description": "Tailor workflows to fit your team's unique processes and requirements.",
              "highlight": "Flexible workflow templates and customizable task stages."
            },
            {
              "name": "Personalized Dashboards",
              "description": "Create personalized dashboards to view the most relevant information at a glance.",
              "highlight": "Drag-and-drop widgets and customizable layout."
            }
          ]
        },
        {
          "name":
            "Reporting and Analytics", "groups": [
              {
                "name": "Detailed Reports",
                "description": "Generate comprehensive reports to gain insights into project performance and team productivity.",
                "highlight": "Customizable report templates and export options."
              },
              {
                "name": "Analytics Dashboard",
                "description": "Access a centralized dashboard with key metrics and data visualizations.",
                "highlight": "Interactive charts, graphs, and real-time data updates."
              }
            ]
        }
      ]
    }
  }

  render() {
    return (
      <section className={styles.FeaturesSection}>
        <div className={styles.FeaturesContainer}>
          <div className={styles.FeaturesList}>
            {this.state.features.map((feature, index) => (
              <div key={index} className={styles.Feature}>
                <div className={styles.FeatureName}>{feature.name}</div>
                <div className={styles.GroupContainer}>
                  {feature.groups.map((group, groupIndex) => (
                    <div key={groupIndex} className={styles.Group}>
                      <div className={styles.GroupName}>{group.name}</div>
                      <div className={styles.GroupPoints}>
                        <div className={styles.Description}>{group.description}</div>
                        <div className={styles.Highlight}>{group.highlight}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

FeaturesSection.propTypes = {};

FeaturesSection.defaultProps = {};

export default FeaturesSection;
