import React, { lazy, Suspense } from 'react';

const LazyUnAuthorisedNavigationMenu = lazy(() => import('./UnAuthorisedNavigationMenu'));

const UnAuthorisedNavigationMenu = props => (
    <Suspense fallback={null}>
        <LazyUnAuthorisedNavigationMenu {...props} />
    </Suspense>
);

export default UnAuthorisedNavigationMenu;
