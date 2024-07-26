import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import ApplicationFooter from './components/ApplicationFooter/ApplicationFooter';
import FeaturePage from './components/FeaturePage/FeaturePage';
import LandingPage from './components/LandingPage/LandingPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import ContactUsPage from './components/ContactUsPage/ContactUsPage';
import AboutPage from './components/AboutPage/AboutPage';
import PricingPage from './components/PricingPage/PricingPage';
import SignPage from './components/SignPage/SignPage';

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
              <Route path='/features' element={<FeaturePage />} />
              <Route path='/contact' element={<ContactUsPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/pricing' element={<PricingPage />} />
              <Route path='/auth' element={<SignPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <ApplicationFooter />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
