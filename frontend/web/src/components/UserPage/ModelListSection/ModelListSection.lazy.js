import React, { lazy, Suspense } from 'react';

const LazyModelListSection = lazy(() => import('./ModelListSection'));

const ModelListSection = props => (
  <Suspense fallback={null}>
    <LazyModelListSection {...props} />
  </Suspense>
);

export default ModelListSection;
