import React, { lazy, Suspense } from 'react';

const LazyHeadingSection = lazy(() => import('./HeadingSection'));

const HeadingSection = props => (
  <Suspense fallback={null}>
    <LazyHeadingSection {...props} />
  </Suspense>
);

export default HeadingSection;
