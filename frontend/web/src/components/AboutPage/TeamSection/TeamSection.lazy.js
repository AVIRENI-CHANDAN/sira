import React, { lazy, Suspense } from 'react';

const LazyTeamSection = lazy(() => import('./TeamSection'));

const TeamSection = props => (
  <Suspense fallback={null}>
    <LazyTeamSection {...props} />
  </Suspense>
);

export default TeamSection;
