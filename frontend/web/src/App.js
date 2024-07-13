import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <div className={styles.NavigationBar}>
            <NavigationBar />
          </div>
          <div className={styles.PageContainer}>
            Page Container
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
