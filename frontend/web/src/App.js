import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import LandingPage from './components/LandingPage/LandingPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <div className={styles.NavigationBar}>
            <NavigationBar />
          </div>
          <div className={styles.PageContainer}>
            <Routes>
              <Route path='/' element={<LandingPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
