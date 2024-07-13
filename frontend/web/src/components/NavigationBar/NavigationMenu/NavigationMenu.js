import React from 'react';
import { useLocation } from 'react-router-dom';
import AuthorisedNavigationMenu from './AuthorisedNavigationMenu/AuthorisedNavigationMenu';
import UnAuthorisedNavigationMenu from './UnAuthorisedNavigationMenu/UnAuthorisedNavigationMenu';

function NavigationMenu(props) {
  const location = useLocation();
  if (location.pathname.startsWith("/user")) {
    return <AuthorisedNavigationMenu {...props} />;
  }
  return <UnAuthorisedNavigationMenu {...props} />;
}


export default NavigationMenu;
