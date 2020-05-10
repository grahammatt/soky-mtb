import { createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import LocalStorage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: LocalStorage,
  whitelist: ["trails"],
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeEnhancer());

export const persistor = persistStore(store);
