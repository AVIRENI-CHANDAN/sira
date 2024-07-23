import React, { lazy, Suspense } from 'react';

const LazyApplicationFooter = lazy(() => import('./ApplicationFooter'));

const ApplicationFooter = props => (
  <Suspense fallback={null}>
    <LazyApplicationFooter {...props} />
  </Suspense>
);

export default ApplicationFooter;
