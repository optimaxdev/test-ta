import createSagaMiddleware from 'redux-saga';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import { cartSaga } from '../sagas/cart';

const sagaMiddleware = createSagaMiddleware();

/*
 * ReduxDevTools does not work.
 * Possible cause is "createStore" which needs to be replaced "configureStore"
*/
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(cartSaga);

export type StateT = ReturnType<typeof store.getState>;
