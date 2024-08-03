import React, { lazy, Suspense } from 'react';

const LazyUserPage = lazy(() => import('./UserPage'));

const UserPage = props => (
  <Suspense fallback={null}>
    <LazyUserPage {...props} />
  </Suspense>
);

export default UserPage;
