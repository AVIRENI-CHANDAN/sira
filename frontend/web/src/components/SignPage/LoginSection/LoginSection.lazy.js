import React, { lazy, Suspense } from 'react';

const LazyLoginSection = lazy(() => import('./LoginSection'));

const LoginSection = props => (
  <Suspense fallback={null}>
    <LazyLoginSection {...props} />
  </Suspense>
);

export default LoginSection;
