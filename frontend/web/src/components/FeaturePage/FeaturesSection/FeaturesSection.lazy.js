import React, { lazy, Suspense } from 'react';

const LazyFeaturesSection = lazy(() => import('./FeaturesSection'));

const FeaturesSection = props => (
  <Suspense fallback={null}>
    <LazyFeaturesSection {...props} />
  </Suspense>
);

export default FeaturesSection;
