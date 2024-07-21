import React, { lazy, Suspense } from 'react';

const LazyFeatureSection = lazy(() => import('./FeatureSection'));

const FeatureSection = props => (
  <Suspense fallback={null}>
    <LazyFeatureSection {...props} />
  </Suspense>
);

export default FeatureSection;
