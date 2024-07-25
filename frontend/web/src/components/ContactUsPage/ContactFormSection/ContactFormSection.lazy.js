import React, { lazy, Suspense } from 'react';

const LazyContactFormSection = lazy(() => import('./ContactFormSection'));

const ContactFormSection = props => (
  <Suspense fallback={null}>
    <LazyContactFormSection {...props} />
  </Suspense>
);

export default ContactFormSection;
