# SIRA

SIRA is a project management tool inspired by JIRA, designed to help teams plan, track, and manage their projects effectively. Initially starting as a simple to-do application, SIRA is evolving into a comprehensive alternative to JIRA, providing robust features to support agile methodologies, task management, and collaboration.

## Features

- **Task Management**: Create, update, and track tasks efficiently.
- **Agile Support**: Manage your sprints, backlogs, and user stories with ease.
- **Custom Workflows**: Define custom workflows to match your team's processes.
- **Collaboration**: Comment on tasks, tag team members, and share updates in real-time.
- **Dashboards and Reports**: Generate reports and visualize your project's progress with customizable dashboards.
- **Notifications**: Stay informed with email and in-app notifications for important updates.
- **Search and Filters**: Quickly find tasks and information with powerful search and filtering options.
- **Integration**: Seamlessly integrate with other tools and services used by your team.

## Getting Started

### Prerequisites

- [React](https://reactjs.org/docs/getting-started.html) (for the frontend)
- [Flask](https://flask.palletsprojects.com/en/2.0.x/installation/) (for the backend)
- [Python](https://www.python.org/downloads/)
- [SQLite](https://www.sqlite.org/download.html)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AVIRENI-CHANDAN/sira.git
   cd sira
   ```

2. **Backend Setup:**

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Create a virtual environment and activate it:
     ```bash
     python -m venv venv
     source venv/bin/activate  # On Windows use `venv\Scripts\activate`
     ```
   - Install the required packages:
     ```bash
     pip install -r requirements.txt
     ```
   - Set up the SQLite database:
     ```bash
     flask db upgrade
     ```
   - Run the backend server:
     ```bash
     flask run
     ```

3. **Frontend Setup:**
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install React dependencies:
     ```bash
     npm install
     ```
   - Run the React app:
     ```bash
     npm start
     ```

## Usage

Once the backend server and React app are running, you can access the application via the web interface. Create an account, log in, and start managing your projects with SIRA.

## License

This project is licensed for personal, non-commercial use only. You may use, copy, modify, and redistribute the software under the following conditions:

1. **Personal Use Only**: This software is provided for personal, non-commercial use only.
2. **Prohibited Commercial Use**: You may not use, copy, modify, or distribute this software for any commercial purpose.
3. **Redistribution**: The redistributed software must retain this license agreement and must not be distributed for any commercial purposes.
4. **Modification**: Any modifications must also comply with the terms of this license.
5. **Disclaimer of Warranty**: The software is provided "as is," without warranty of any kind.

For the full license terms, see the [LICENSE](LICENSE) file.

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## Contact

For any questions or feedback, please contact us at avireni.chandanchandu43657@gmail.com
