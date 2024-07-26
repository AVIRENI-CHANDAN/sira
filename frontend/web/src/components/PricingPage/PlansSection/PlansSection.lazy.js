import React, { lazy, Suspense } from 'react';

const LazyPlansSection = lazy(() => import('./PlansSection'));

const PlansSection = props => (
  <Suspense fallback={null}>
    <LazyPlansSection {...props} />
  </Suspense>
);

export default PlansSection;
