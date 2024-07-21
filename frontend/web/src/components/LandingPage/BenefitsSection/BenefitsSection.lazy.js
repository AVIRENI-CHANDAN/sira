import React, { lazy, Suspense } from 'react';

const LazyBenefitsSection = lazy(() => import('./BenefitsSection'));

const BenefitsSection = props => (
  <Suspense fallback={null}>
    <LazyBenefitsSection {...props} />
  </Suspense>
);

export default BenefitsSection;
