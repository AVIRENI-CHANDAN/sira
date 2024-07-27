import React, { lazy, Suspense } from 'react';

const LazyTermsPage = lazy(() => import('./TermsPage'));

const TermsPage = props => (
  <Suspense fallback={null}>
    <LazyTermsPage {...props} />
  </Suspense>
);

export default TermsPage;
