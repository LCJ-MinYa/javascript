### expected the enhancer to be a function

```javascript
/*redux源码相关*/
import isPlainObject from 'lodash/isPlainObject'
import $$observable from 'symbol-observable'

export default function createStore(reducer, preloadedState, enhancer) {
  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState
    preloadedState = undefined
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.')
    }

    return enhancer(createStore)(reducer, preloadedState)
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.')
  }
  ...

  return {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [$$observable]: observable
  }
}

/* 报错原因
 * 同事在测试环境中加入ReduxDevToolsIfNeed，打正式包时没有对应的值，所以会引发redux源码抛出异常，注释ReduxDevToolsIfNeed即可
 */
'use strict';

import thunk from 'redux-thunk';
import {
    applyMiddleware,
    createStore
} from 'redux';
import AppReducer from '../reducers/AppReducer';

const ReduxDevToolsIfNeed = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const middlewares = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function storeConfig(initialState) {
    const store = createStoreWithMiddleware(
        AppReducer,
        initialState,
        // ReduxDevToolsIfNeed,  
    );
    return store;
}
```