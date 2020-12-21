import { createStore, compose } from 'redux';
// hook up react router with redux
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
// action and action creaters are also core in redux
// how we are going to be able to interface with the store
import rootReducer from './reducers/index';

// we need some default data to populate
import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
const defaultState = {
    posts,
    comments
};

// redux dev tools
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = reduce('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;