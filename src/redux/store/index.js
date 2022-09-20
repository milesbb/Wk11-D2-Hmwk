import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";

import indexReducer from "../reducers/index";
import companiesReducer from "../reducers/companies";
import jobsReducer from "../reducers/jobs";
import storage from "redux-persist/lib/storage";
import localforage from 'localforage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { encryptTransform } from "redux-persist-transform-encrypt";

console.log(process.env)

const persistConfig = {
  key: "root",
  storage: localforage,
  // uses indexedDB
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
      onError: function (error) {
        console.log(error)
      },
    }),
  ],
}

const comboReducer = combineReducers({
  index: indexReducer,
  companies: companiesReducer,
  jobs: jobsReducer,
});

const persistedReducer = persistReducer(persistConfig, comboReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
});

export const persistor = persistStore(store);

export { configureStore};
