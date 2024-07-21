import React, { lazy, Suspense } from 'react';

const LazyCallToActionSection = lazy(() => import('./CallToActionSection'));

const CallToActionSection = props => (
  <Suspense fallback={null}>
    <LazyCallToActionSection {...props} />
  </Suspense>
);

export default CallToActionSection;
