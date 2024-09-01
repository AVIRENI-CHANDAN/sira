import React, { lazy, Suspense } from 'react';

const LazyModelsSection = lazy(() => import('./ModelsSection'));

const ModelsSection = props => (
  <Suspense fallback={null}>
    <LazyModelsSection {...props} />
  </Suspense>
);

export default ModelsSection;
