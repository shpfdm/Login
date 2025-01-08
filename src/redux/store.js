import { legacy_createStore as createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";

//redux-thunk
import { thunk } from 'redux-thunk';
import { applyMiddleware } from "redux";


import authReducer from "./Reducer";

const rootReducer = combineReducers({
    auth: authReducer
});

const persistConfig = {
    key: "coffee",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };