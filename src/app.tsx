import 'src/app.scss';

import React, { FC, Suspense } from 'react';

import Page from './pages/page';

const App: FC = () => (
    <Suspense fallback="Loading...">
        {/* provide loading indicator in fallback component */}
        <Page />
    </Suspense>
);

export default App;
