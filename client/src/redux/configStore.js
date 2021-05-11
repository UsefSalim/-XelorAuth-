import
{
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
import authSlice from './slices/authSlice';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const reducer = combineReducers({
  authentification: authSlice,
});

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), ...middleware],
});
sagaMiddleware.run(watcherSaga);
