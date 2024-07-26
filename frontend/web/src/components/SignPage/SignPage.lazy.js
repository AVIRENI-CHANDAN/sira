import React, { lazy, Suspense } from 'react';

const LazySignPage = lazy(() => import('./SignPage'));

const SignPage = props => (
  <Suspense fallback={null}>
    <LazySignPage {...props} />
  </Suspense>
);

export default SignPage;
