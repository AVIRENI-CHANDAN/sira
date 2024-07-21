import React, { lazy, Suspense } from 'react';

const LazyContactSection = lazy(() => import('./ContactSection'));

const ContactSection = props => (
  <Suspense fallback={null}>
    <LazyContactSection {...props} />
  </Suspense>
);

export default ContactSection;
