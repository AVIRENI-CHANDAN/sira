import React, { lazy, Suspense } from 'react';

const LazyPrivacyPolicyPage = lazy(() => import('./PrivacyPolicyPage'));

const PrivacyPolicyPage = props => (
  <Suspense fallback={null}>
    <LazyPrivacyPolicyPage {...props} />
  </Suspense>
);

export default PrivacyPolicyPage;
