import React, { lazy, Suspense } from 'react';

const LazyNavigationMenu = lazy(() => import('./NavigationMenu'));

const NavigationMenu = props => (
  <Suspense fallback={null}>
    <LazyNavigationMenu {...props} />
  </Suspense>
);

export default NavigationMenu;
