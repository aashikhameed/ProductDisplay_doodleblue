
import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import reducers from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
}
const reducer = combineReducers(reducers)

// const persistedReducer = persistReducer(persistConfig, reducer)
export const store = createStore(reducer);
// export const persistor = persistStore(store);