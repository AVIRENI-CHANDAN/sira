import React, { lazy, Suspense } from 'react';

const LazyAuthorisedNavigationMenu = lazy(() => import('./AuthorisedNavigationMenu'));

const AuthorisedNavigationMenu = props => (
    <Suspense fallback={null}>
        <LazyAuthorisedNavigationMenu {...props} />
    </Suspense>
);

export default AuthorisedNavigationMenu;
