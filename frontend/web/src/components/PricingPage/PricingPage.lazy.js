import React, { lazy, Suspense } from 'react';

const LazyPricingPage = lazy(() => import('./PricingPage'));

const PricingPage = props => (
  <Suspense fallback={null}>
    <LazyPricingPage {...props} />
  </Suspense>
);

export default PricingPage;
