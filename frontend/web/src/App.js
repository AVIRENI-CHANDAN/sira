import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import AboutPage from './components/AboutPage/AboutPage';
import ApplicationFooter from './components/ApplicationFooter/ApplicationFooter';
import ContactUsPage from './components/ContactUsPage/ContactUsPage';
import FeaturePage from './components/FeaturePage/FeaturePage';
import LandingPage from './components/LandingPage/LandingPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import PricingPage from './components/PricingPage/PricingPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage/PrivacyPolicyPage';
import SignPage from './components/SignPage/SignPage';
import TermsPage from './components/TermsPage/TermsPage';
import UserPage from './components/UserPage/UserPage';
import { ProtectedRouteEndpoints, RouteEndpoints } from './Endpoints';

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
              <Route path={RouteEndpoints.LANDING_PAGE} element={<LandingPage />} />
              <Route path={RouteEndpoints.FEATURES_PAGE} element={<FeaturePage />} />
              <Route path={RouteEndpoints.CONTACT_PAGE} element={<ContactUsPage />} />
              <Route path={RouteEndpoints.ABOUT_PAGE} element={<AboutPage />} />
              <Route path={RouteEndpoints.PRICING_PAGE} element={<PricingPage />} />
              <Route path={RouteEndpoints.AUTHENTICATION_PAGE} element={<SignPage />} />
              <Route path={RouteEndpoints.TERMS_PAGE} element={<TermsPage />} />
              <Route path={RouteEndpoints.PRIVACY_POLICY_PAGE} element={<PrivacyPolicyPage />} />
              <Route path={ProtectedRouteEndpoints.USER_HOME} element={<UserPage />} />
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
