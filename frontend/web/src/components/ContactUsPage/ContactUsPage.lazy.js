import React, { lazy, Suspense } from 'react';

const LazyContactUsPage = lazy(() => import('./ContactUsPage'));

const ContactUsPage = props => (
  <Suspense fallback={null}>
    <LazyContactUsPage {...props} />
  </Suspense>
);

export default ContactUsPage;
