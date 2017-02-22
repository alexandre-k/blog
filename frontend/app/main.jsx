import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './components/App';

const rootElement = document.getElementById('app');

ReactDOM.render(
    <App />,
    rootElement
)

/*
 * ReactDOM.render(
 *     <AppContainer>
 *         <App />
 *     </AppContainer>,
 *     rootElement
 * );
 *
 * if (module.hot) {
 *     const nextApp = require('./components/App').default;
 *     module.hot.accept('./components/App', () => {
 *             ReactDOM.render(
 *             <AppContainer>
 *                 <NextApp />
 *             </AppContainer>,
 *             rootElement
 *         );
 *     });
 * }
 */
