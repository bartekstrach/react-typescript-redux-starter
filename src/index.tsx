import 'src/config/i18n';

import App from './app';
import DevTools from 'src/config/dev-tools';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import initStore from 'src/config/store';
import { isDevelopmentEnvironment } from 'src/utils/node-env.utils';

const store = initStore();
const rootElement = document.getElementById('root');
const devToolsComponent = isDevelopmentEnvironment() ? <DevTools /> : null;

ReactDOM.render(
    <Provider store={store}>
        {devToolsComponent}
        <App />
    </Provider>,
    rootElement
);
