import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import PostDetails from './components/PostDetails'

const rootElement = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App} />
        {/*        <Route path='/post/:postId' component={PostDetails} />*/}
    </Router>,
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
