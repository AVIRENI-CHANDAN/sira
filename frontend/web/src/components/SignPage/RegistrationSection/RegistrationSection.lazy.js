import React, { lazy, Suspense } from 'react';

const LazyRegistrationSection = lazy(() => import('./RegistrationSection'));

const RegistrationSection = props => (
  <Suspense fallback={null}>
    <LazyRegistrationSection {...props} />
  </Suspense>
);

export default RegistrationSection;
