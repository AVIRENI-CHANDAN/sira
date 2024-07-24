import React, { lazy, Suspense } from 'react';

const LazyFeaturePage = lazy(() => import('./FeaturePage'));

const FeaturePage = props => (
  <Suspense fallback={null}>
    <LazyFeaturePage {...props} />
  </Suspense>
);

export default FeaturePage;
