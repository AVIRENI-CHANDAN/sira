import React, { lazy, Suspense } from 'react';

const LazyContactInfoSection = lazy(() => import('./ContactInfoSection'));

const ContactInfoSection = props => (
  <Suspense fallback={null}>
    <LazyContactInfoSection {...props} />
  </Suspense>
);

export default ContactInfoSection;
